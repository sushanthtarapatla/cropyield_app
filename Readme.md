# 🌾 Crop Yield Prediction Using Machine Learning

A web-based application that predicts crop yield based on agricultural and environmental parameters using Machine Learning. This project integrates a **Flask backend** with a **simple frontend interface** to provide real-time predictions.

---

## 🚀 Features

* 📊 Predict crop yield using trained ML model
* 🌐 User-friendly web interface
* ⚡ Fast API responses using Flask
* 🔁 Real-time data input and prediction
* 🧠 Model trained using Scikit-learn

---

## 🛠️ Technologies Used

* **Programming Language:** Python
* **Libraries:** Pandas, NumPy, Scikit-learn
* **Backend:** Flask
* **Frontend:** HTML, CSS, JavaScript

---

## 📁 Project Structure

```
CROP_YIELD_APP/
│
├── backend/
│   ├── app.py              # Flask API for prediction
│   ├── training.py         # Model training script
│   └── model.pkl           # Trained ML model
│
├── frontend/
│   ├── index.html          # User interface
│   ├── script.js           # Handles API calls
│   └── style.css           # Styling (optional)
│
├── requirements.txt        # Python dependencies
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/crop_yield_app.git
cd crop_yield_app
```

### 2️⃣ Create virtual environment (recommended)

```bash
python -m venv venv
source venv/bin/activate     # For Linux/Mac
venv\Scripts\activate        # For Windows
```

### 3️⃣ Install dependencies

```bash
pip install -r requirements.txt
```

---

## ▶️ Running the Project

### Start Backend (Flask Server)

```bash
cd backend
python app.py
```

👉 Server will run at: `http://127.0.0.1:5000/`

---

### Run Frontend

* Open `frontend/index.html` in your browser
  **OR**
* Use Live Server extension in VS Code

---

## 🔄 How It Works

1. User enters input data in the web interface
2. Frontend sends request to Flask API
3. Backend processes input using trained ML model
4. Prediction result is returned and displayed

---

## 📌 Example Input Parameters

* Temperature
* Rainfall
* Soil Type
* Humidity
* Crop Type

---

## 📈 Future Enhancements

* 📱 Convert to mobile app using Flutter
* ☁️ Deploy on cloud (Render / AWS / Azure)
* 🤖 Improve model accuracy with more datasets
* 📊 Add data visualization dashboard
* 🔔 Real-time alerts and recommendations

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

---

## 📄 License

This project is open-source and available under the MIT License.

---

## 👨‍💻 Author

**Sushanth Tarapatla**

* 📧 Email: [sushanthtarapatla01@gmail.com](mailto:sushanthtarapatla01@gmail.com)
* 🔗 LinkedIn: https://www.linkedin.com/in/tarapatla-sushanth-259168293/

---

## ⭐ Support

If you like this project, please ⭐ the repository and share it!
