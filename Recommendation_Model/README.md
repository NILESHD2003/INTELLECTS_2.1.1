
# StartupSphere

A entrepreneurial website which has different pages starting with login page then home page so on.It is majorly embedded with js.The website uses Machine Learning models for recommending blogs to certain people based on their interests,time spent on particular blog likewise. 


## Acknowledgements

 - Nilesh Deshpande(Team Lead): Contributed with his backend work using MongoDB and JS backend maintaining safe and secure environment for data.
 - Zaid Shaikh: Frontend of the Web Application and the designing pages contribution.
 - Paras Munoli: ML models for a better experience of user with some good algorithms.
 - Sanket Jamadar: ML models contribution and their API's for connection establishment between Application and algos.


## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | 
| :-------- | :------- | 
| `http://localhost:5000/api/v1/auth/title/recommendations` | `Used for title based recommendation` |

#### Get item


| Parameter | Type     | 
| :-------- | :------- | 
| `http://localhost:5000/api/v1/auth/category/recommendations` | `Used for title based recommendation` |



## Documentation

1] Required libraries installment:

  'pip install scikit-learn'

  'pip install flask'

  'pip install numpy'

  'pip install pandas'

  'pip install pymongo'

2]steps for creating API:

  a)  import pickle

  b) load your model

  c) write your routes which are reqired 

  d) return output just like in the provided code 

  e) Expose API endpoints


## Features of ML Models

- Recommends blogs by his upvoted blog hisotry.
- Recommends blogs if a blog is hovered for more than 3 seconds.
- Recommends blogs by the the title,author factor.



## Tech Stack

**Language:**  PYTHON

**Framework:** Flask

**Libraries:** Pandas,NumPy,Scikit-learn,pymongo

