from fastapi import FastAPI
from model import Patient
import pickle
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(redirect_slashes=False)

app.add_middleware(
    CORSMiddleware,
     allow_origins=[
        "https://sheen-prediction-bbcb.onrender.com/"
        "https://sheen-prediction-bbcb.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# load trained pipeline (scaler + model)
model = pickle.load(open("heart_disease_model.pkl", "rb"))


@app.post("/predict")
def predict(patient: Patient):
    data = np.array([[
        patient.Age,
        patient.ChestPainType,
        patient.RestingBP,
        patient.Cholesterol,
        patient.FBS_over_120,
        patient.RestingECG,
        patient.MaxHR,
        patient.ExerciseAngina,
        patient.STDepression,
        patient.SlopeST,
        patient.NumVessels,
        patient.Thallium
    ]])

    prediction = model.predict(data)
    probability = model.predict_proba(data)[0][1]

    return {
        "prediction": int(prediction[0]),
        "probability": round(probability, 3)
    }




