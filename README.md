🫀 Heart Disease Prediction System

This is an end-to-end machine learning web application that predicts the likelihood of heart disease based on patient medical data.
The project includes a trained ML model, a FastAPI backend, and a modern React frontend with real-time validation and user feedback.

🚀 Features

🧠 Machine Learning model for heart disease prediction

⚡ FastAPI backend with strict data validation (Pydantic)

🌐 React + Vite frontend with Tailwind CSS

🧩 Redux Toolkit + RTK Query for API communication

🔔 Real-time error & success notifications using React Toastify

🔢 Automatic data cleaning (floats → ints where required)

🛡 Backend-safe input validation (rejects invalid data)

📊 Prediction probability displayed to users

🧱 Tech Stack
Backend

Python

FastAPI

Pydantic

Scikit-learn

Uvicorn

Frontend

React (Vite)

Tailwind CSS

Redux Toolkit

RTK Query

React Toastify

📁 Project Structure
Heart/
│
├── Backend/
│   ├── app.py
│   ├── model.py
│   └── heart_disease_model.pkl
│
├── Frontend/
│   └── my-project/
│       ├── src/
│       │   ├── app/
│       │   ├── redux/
│       │   ├── components/
│       │   └── App.jsx
│       ├── tailwind.config.js
│       └── vite.config.js
│
├── venv/
└── README.md

⚙️ How It Works

User enters medical parameters in the frontend form

Frontend validates and cleans input values

Data is sent to FastAPI backend

Backend validates input using Pydantic

ML model predicts heart disease risk

Prediction & probability are returned and displayed in UI

▶️ Running the Project
Backend
cd Backend
uvicorn app:app --reload

Frontend
cd Frontend/my-project
npm install
npm run dev

📌 Example Prediction Output

Prediction: Heart Disease / No Heart Disease

Probability: e.g. 23.6% risk

🧠 Learning Outcomes

This project demonstrates:

Real-world ML model deployment

Frontend–backend integration

Safe API design & validation

State management with Redux

Production-style error handling

📜 License

This project is for educational purposes.
