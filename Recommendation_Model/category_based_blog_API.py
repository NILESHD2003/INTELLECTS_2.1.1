from flask import Flask, request, jsonify
import pickle
import pymongo
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MultiLabelBinarizer

app = Flask(__name__)

# Connect to MongoDB
client = pymongo.MongoClient("mongodb://localhost:27017/startup_sphere")
db = client["mongodb://localhost:27017/startup_sphere"]
blogs_collection = db["blogs"]

# Load data from MongoDB
blogs = list(blogs_collection.find({}, {"_id": 1, "category": 1, "author": 1, "title": 1, "createdAt": 1}))
blog_ids = [blog["_id"] for blog in blogs]

# Load the model
with open('category_blog_recomm.pkl', 'rb') as model_file:
    category_similarities = pickle.load(model_file)

def recommend_blogs(blog_id, similarity_matrix, k=10):
    index = blog_ids.index(blog_id)
    similarities = similarity_matrix[index]
    similar_indices = np.argsort(similarities)[::-1][1:k+1]  # Exclude the blog itself
    recommended_blogs = [{"blog_id": blogs[i]["_id"], "createdAt": blogs[i]["createdAt"]} for i in similar_indices]
    return sorted(recommended_blogs, key=lambda x: x["createdAt"], reverse=True)

@app.route('/api/v1/auth/category/recommendations', methods=['POST'])
def get_recommendations():
    data = request.json
    blog_id = data.get('blog_id')
    if blog_id is None:
        return jsonify({"error": "Missing 'blog_id' in request body"}), 400
    recommendations = recommend_blogs(blog_id, category_similarities)
    return jsonify({"recommendations": recommendations})

if __name__ == '__main__':
    app.run(debug=True)
