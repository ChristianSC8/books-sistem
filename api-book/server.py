from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson import json_util
from bson.objectid import ObjectId
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)

CORS(app)
app.config['MONGO_URI'] = 'mongodb://localhost/book-store'
mongo = PyMongo(app)

def get_books_from_db():
    # Obtener los libros desde la base de datos
    try:
        books = mongo.db.books.find()
        return pd.DataFrame(list(books))
    except Exception as e:
        return jsonify({"error": f"Error fetching books: {str(e)}"}), 500

def get_authors_from_db(author_ids):
    # Obtener los autores correspondientes a los author_ids
    try:
        authors = mongo.db.authors.find({"_id": {"$in": [ObjectId(id) for id in author_ids]}})
        return {str(author['_id']): author['name'] for author in authors}
    except Exception as e:
        return jsonify({"error": f"Error fetching authors: {str(e)}"}), 500

def calculate_similarity(df):
    vectorizer = TfidfVectorizer(stop_words='english')
    tfidf_matrix = vectorizer.fit_transform(df['description'])
    cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)
    return cosine_sim

@app.route('/recommendations/<id>', methods=['GET'])
def recommend_books(id):
    # Obtener los libros desde la base de datos
    df = get_books_from_db()

    # Asegurarse de que el DataFrame tiene datos
    if df.empty:
        return jsonify({"error": "No books found in the database"}), 400

    # Obtener los datos completos de los autores
    all_author_ids = df['author_ids'].apply(lambda authors: [str(author) for author in authors])
    all_authors = get_authors_from_db([author_id for sublist in all_author_ids for author_id in sublist])

    # Obtener los datos completos de las categorías
    all_category_ids = df['category_ids'].apply(lambda categories: [str(category) for category in categories])
    all_categories = {str(category['_id']): category['name'] for category in mongo.db.categories.find()}

    # Reemplazar ObjectId de los autores con sus nombres
    df['author'] = df['author_ids'].apply(lambda authors: [
        {'_id': str(author), 'name': all_authors.get(str(author), 'Unknown')}
        for author in authors
    ])

    # Reemplazar ObjectId de las categorías con sus nombres
    df['category'] = df['category_ids'].apply(lambda categories: [
        {'_id': str(category), 'name': all_categories.get(str(category), 'Unknown')}
        for category in categories
    ])

    # Obtener la similitud entre los libros
    cosine_sim = calculate_similarity(df)

    # Obtener el índice del libro solicitado
    try:
        book_idx = df[df['_id'] == ObjectId(id)].index[0]
    except IndexError:
        return jsonify({"error": "Book not found in the database"}), 404
    
    # Obtener los puntajes de similitud con respecto al libro solicitado
    sim_scores = list(enumerate(cosine_sim[book_idx]))

    # Ordenar los puntajes de similitud
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    # Obtener los índices de los libros más similares
    sim_scores = sim_scores[1:6]  # Top 5 libros similares
    book_indices = [i[0] for i in sim_scores]

    # Obtener los libros recomendados
    recommended_books = df.iloc[book_indices]

    # Formatear las recomendaciones de la misma forma que la base de datos
    recommended_books_list = recommended_books.apply(lambda row: {
        "_id": str(row['_id']),  # Convertir ObjectId a string
        "title": row['title'],
        "description": row['description'],
        "image": row['image'],
        "author_ids": row['author'],  # Incluir la estructura completa del autor
        "category_ids": row['category'],  # Incluir la estructura completa de las categorías
        "language": row['language'],
        "type": row['type'],
        "pages": row['pages'],
        "dimensions": row['dimensions'],
        "publication_date": row['publication_date'],
        "price": row['price'],
        "discount": row['discount'],
        "stock": row['stock'],
        "state": row['state'],
        "publisher": row['publisher']
    }, axis=1).to_list()

    return jsonify({
        "message": "Recommendations fetched successfully.",
        "data": recommended_books_list
    })



if __name__ == "__main__":
    app.run(debug=True, port=8000)












# from flask import Flask, jsonify, request
# from flask_pymongo import PyMongo
# from bson import json_util
# from bson.objectid import ObjectId
# from sklearn.feature_extraction.text import TfidfVectorizer
# from sklearn.metrics.pairwise import cosine_similarity
# import pandas as pd
# from flask_cors import CORS

# app = Flask(__name__)

# CORS(app)
# app.config['MONGO_URI'] = 'mongodb://localhost/book-store'
# mongo = PyMongo(app)

# def get_books_from_db():
#     # Obtener los libros desde la base de datos
#     try:
#         books = mongo.db.books.find()
#         return pd.DataFrame(list(books))
#     except Exception as e:
#         return jsonify({"error": f"Error fetching books: {str(e)}"}), 500

# def get_authors_from_db(author_ids):
#     # Obtener los autores correspondientes a los author_ids
#     try:
#         authors = mongo.db.authors.find({"_id": {"$in": [ObjectId(id) for id in author_ids]}})
#         return {str(author['_id']): author['name'] for author in authors}
#     except Exception as e:
#         return jsonify({"error": f"Error fetching authors: {str(e)}"}), 500

# def calculate_similarity(df):
#     vectorizer = TfidfVectorizer(stop_words='english')
#     tfidf_matrix = vectorizer.fit_transform(df['description'])
#     cosine_sim = cosine_similarity(tfidf_matrix, tfidf_matrix)
#     return cosine_sim

# @app.route('/recommendations/<id>', methods=['GET'])
# def recommend_books(id):
#     # Obtener los libros desde la base de datos
#     df = get_books_from_db()

#     # Asegurarse de que el DataFrame tiene datos
#     if df.empty:
#         return jsonify({"error": "No books found in the database"}), 400

#     # Obtener los datos completos de los autores
#     all_author_ids = df['author_ids'].apply(lambda authors: [str(author) for author in authors])
#     all_authors = get_authors_from_db([author_id for sublist in all_author_ids for author_id in sublist])

#     # Reemplazar ObjectId de los autores con sus nombres
#     df['author'] = df['author_ids'].apply(lambda authors: ', '.join([all_authors.get(str(author), 'Unknown') for author in authors]))

#     # Obtener la similitud entre los libros
#     cosine_sim = calculate_similarity(df)

#     # Obtener el índice del libro solicitado
#     try:
#         book_idx = df[df['_id'] == ObjectId(id)].index[0]
#     except IndexError:
#         return jsonify({"error": "Book not found in the database"}), 404
    
#     # Obtener los puntajes de similitud con respecto al libro solicitado
#     sim_scores = list(enumerate(cosine_sim[book_idx]))

#     # Ordenar los puntajes de similitud
#     sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

#     # Obtener los índices de los libros más similares
#     sim_scores = sim_scores[1:6]  # Top 5 libros similares
#     book_indices = [i[0] for i in sim_scores]

#     # Obtener los libros recomendados
#     recommended_books = df.iloc[book_indices]

#     # Formatear las recomendaciones de la misma forma que la base de datos
#     recommended_books_list = recommended_books.apply(lambda row: {
#         "_id": str(row['_id']),  # Convertir ObjectId a string
#         "title": row['title'],
#         "description": row['description'],
#         "image": row['image'],
#         "author_ids": [str(author) for author in row['author_ids']],  # Convertir los author_ids a string
#         "category_ids": [str(category) for category in row['category_ids']],  # Convertir los category_ids a string
#         "language": row['language'],
#         "type": row['type'],
#         "pages": row['pages'],
#         "dimensions": row['dimensions'],
#         "publication_date": row['publication_date'],
#         "price": row['price'],
#         "discount": row['discount'],
#         "stock": row['stock'],
#         "state": row['state'],
#         "publisher": row['publisher']
#     }, axis=1).to_list()

#     return jsonify({
#         "message": "Recommendations fetched successfully",
#         "data": recommended_books_list
#     })


# if __name__ == "__main__":
#     app.run(debug=True, port=8000)
