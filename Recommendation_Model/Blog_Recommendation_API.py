from flask import Flask, request, jsonify
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import linear_kernel
import pickle

app = Flask(__name__)

# Load the saved model
with open('cosine_sim.pkl', 'rb') as file:
    cosine_sim = pickle.load(file)

# Load the dataset
df = pd.read_csv("hf-blogs.csv") 

# Combine relevant columns into a single text column
df['text'] = df['author'].astype(str) + ' ' + df['title'] + ' ' + df['local'] + ' ' + df['tags']

# Fill missing values in 'text' column with an empty string
df['text'] = df['text'].fillna('')

@app.route('/api/v1/recommendBlog', methods=['POST'])
def recommend():
    data = request.get_json()
    if 'blog_id' not in data:
        return jsonify({'error': 'Blog ID not provided'}), 400

    blog_id = data['blog_id']
    if blog_id not in df['blog_id'].values:
        return jsonify({'error': 'Invalid Blog ID'}), 404

    # Function to get recommendations for a given blog ID
    def get_recommendations(blog_id, cosine_sim=cosine_sim):
        sim_scores = list(enumerate(cosine_sim[blog_id]))
        # Convert the 'date' column to datetime and handle NaN values
        df['date'] = pd.to_datetime(df['date'], errors='coerce')
        sim_scores = sorted(sim_scores, key=lambda x: (df['date'].iloc[x[0]], x[1]), reverse=True)
        blog_indices = [i[0] for i in sim_scores]
        return df['blog_id'].iloc[blog_indices].tolist()

    recommendations = get_recommendations(blog_id)
    return jsonify({'recommendations': recommendations})

@app.route('/',methods=['GET'])
def check():
    return jsonify({'Success':'True'})    

if __name__ == '__main__':
    app.run(debug=True)
