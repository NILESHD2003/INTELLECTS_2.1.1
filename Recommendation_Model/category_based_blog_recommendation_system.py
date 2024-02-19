import pickle
import pymongo
import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import MultiLabelBinarizer

# Connect to MongoDB
client = pymongo.MongoClient("your_mongodb_connection_string")
db = client["your_database_name"]
blogs_collection = db["your_collection_name"]

# Load data from MongoDB
blogs = list(blogs_collection.find({}, {"_id": 1, "category": 1, "author": 1, "title": 1, "createdAt": 1}))
blog_ids = [blog["_id"] for blog in blogs]

# Prepare data for category-based recommendation
mlb = MultiLabelBinarizer()
category_matrix = mlb.fit_transform([blog["category"] for blog in blogs])
category_similarities = cosine_similarity(category_matrix, category_matrix)

def recommend_blogs(blog_id, similarity_matrix, k=10):
    index = blog_ids.index(blog_id)
    similarities = similarity_matrix[index]
    similar_indices = np.argsort(similarities)[::-1][1:k+1]  # Exclude the blog itself
    recommended_blogs = [{"blog_id": blogs[i]["_id"], "createdAt": blogs[i]["createdAt"]} for i in similar_indices]
    return sorted(recommended_blogs, key=lambda x: x["createdAt"], reverse=True)

# Example usage for category-based recommendation
blog_id_for_category_recommendation = 123  # Replace with the actual blog_id
category_recommendations = recommend_blogs(blog_id_for_category_recommendation, category_similarities)
# print("Category-based Recommendations:", category_recommendations)

# Pickle the model
with open('category_blog_recomm.pkl', 'wb') as model_file:
    pickle.dump(category_similarities, model_file)

# print("Category-based recommendation model has been pickled.")
