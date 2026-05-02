# 🌾 Crop Yield Prediction Using Machine Learning

## 📌 Overview
This project predicts crop yield using machine learning techniques based on agricultural data such as state, district, crop type, season, and year. A Random Forest model is used to provide accurate yield predictions, and a web-based interface allows users to interact with the system easily.

---

## 🚀 Features
- Predict crop yield based on location and crop details  
- Uses Random Forest Regression for accurate predictions  
- Web interface for easy user interaction  
- Dropdown-based input system to avoid errors  
- Displays predicted yield in tons per hectare  

---

## 🛠️ Technologies Used
- Python  
- Pandas, NumPy  
- Scikit-learn  
- Flask  
- HTML, JavaScript  

---

## 📂 Project Structure
CROP_YIELD_APP/
│
├── backend/
│   ├── app.py
│   ├── model/
│   │   └── model.pkl       # Trained ML model
│   ├── utils/
│   │   └── helper.py       # Helper functions
│   └── training.py
│
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── requirements.txt        # Python dependencies
├── .gitignore
├── README.md