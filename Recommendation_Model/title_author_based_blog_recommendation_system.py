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

# Prepare data for author/title-based recommendation
mlb = MultiLabelBinarizer()
author_title_matrix = mlb.fit_transform([(blog["author"], blog["title"]) for blog in blogs])
author_title_similarities = cosine_similarity(author_title_matrix, author_title_matrix)

def recommend_blogs(blog_id, similarity_matrix, k=10):
    index = blog_ids.index(blog_id)
    similarities = similarity_matrix[index]
    similar_indices = np.argsort(similarities)[::-1][1:k+1]  # Exclude the blog itself
    recommended_blogs = [{"blog_id": blogs[i]["_id"], "createdAt": blogs[i]["createdAt"]} for i in similar_indices]
    return sorted(recommended_blogs, key=lambda x: x["createdAt"], reverse=True)

# Example usage for author/title-based recommendation
blog_id_for_author_title_recommendation = 456  # Replace with the actual blog_id
author_title_recommendations = recommend_blogs(blog_id_for_author_title_recommendation, author_title_similarities)
# print("Author/Title-based Recommendations:", author_title_recommendations)

import pickle

# Save the model using pickle
with open('auth_title_blog_recomm.pkl', 'wb') as model_file:
    pickle.dump(author_title_similarities, model_file)
