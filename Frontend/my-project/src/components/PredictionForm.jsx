import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { usePredictMutation } from "../redux/api/heartApi";

export default function PredictionForm() {
  const [form, setForm] = useState({
    Age: "",
    ChestPainType: "",
    RestingBP: "",
    Cholesterol: "",
    FBS_over_120: "",
    RestingECG: "",
    MaxHR: "",
    ExerciseAngina: "",
    STDepression: "",
    SlopeST: "",
    NumVessels: "",
    Thallium: "",
  });

  const [predict, { data, isLoading, error }] = usePredictMutation();

  // 🔹 block alphabets while typing
  function handleChange(e) {
    const { name, value } = e.target;

    // allow empty, numbers, decimal
    if (!/^\d*\.?\d*$/.test(value)) {
      toast.error("Only numbers are allowed");
      return;
    }

    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = Object.fromEntries(
      Object.entries(form).map(([key, value]) => [key, Number(value)])
    );

    try {
      await predict(payload).unwrap();
    } catch (err) {
      // handled in useEffect
    }
  }

  // 🔹 backend error toast
  useEffect(() => {
    if (error) {
      toast.error("Invalid input. Please check values.");
    }
  }, [error]);

  // 🔹 success toast
  useEffect(() => {
    if (data) {
      toast.success("Prediction completed successfully!");
    }
  }, [data]);

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-3xl">
      <h1 className="text-2xl font-bold text-center mb-6">
        Heart Disease Prediction
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        {Object.keys(form).map((key) => (
          <input
            key={key}
            name={key}
            placeholder={key}
            value={form[key]}
            onChange={handleChange}
            className="border p-2 rounded focus:ring-2 focus:ring-blue-500"
            required
          />
        ))}

        <button
          type="submit"
          disabled={isLoading}
          className={`col-span-2 py-2 rounded text-white ${
            isLoading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {isLoading ? "Predicting..." : "Predict"}
        </button>
      </form>

      {data && (
        <div
          className={`mt-6 p-4 rounded text-center font-semibold ${
            data.prediction === 1
              ? "bg-red-100 text-red-700"
              : "bg-green-100 text-green-700"
          }`}
        >
          {data.prediction === 1
            ? "⚠️ Heart Disease Detected"
            : "✅ No Heart Disease"}

          <p className="mt-2">
            Risk Probability: {(data.probability * 100).toFixed(1)}%
          </p>
        </div>
      )}
    </div>
  );
}
