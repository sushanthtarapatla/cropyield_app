from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)   # enable CORS

model = joblib.load("random_forest_model.pkl")
encoders = joblib.load("label_encoders.pkl")

categorical_cols = ['State', 'District', 'Crop', 'Season']


@app.route("/predict", methods=["POST"])
def predict():

    data = request.json
    df = pd.DataFrame([data])

    for col in categorical_cols:
        df[col] = encoders[col].transform(df[col])

    prediction = model.predict(df)[0]

    return jsonify({
        "predicted_yield": float(prediction)
    })


if __name__ == "__main__":
    app.run(debug=True)