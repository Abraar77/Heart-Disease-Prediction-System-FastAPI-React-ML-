from pydantic import BaseModel, field_validator

class Patient(BaseModel):
    Age: float
    ChestPainType: int
    RestingBP: float
    Cholesterol: float
    FBS_over_120: int
    RestingECG: int
    MaxHR: float
    ExerciseAngina: int
    STDepression: float
    SlopeST: int
    NumVessels: int
    Thallium: int

    # 🔹 force float fields
    @field_validator(
        "Age", "RestingBP", "Cholesterol", "MaxHR", "STDepression",
        mode="before"
    )
    @classmethod
    def to_float(cls, v):
        if isinstance(v, str):
            if not v.replace(".", "", 1).isdigit():
                raise ValueError("Must be a number")
        return float(v)

    # 🔹 force int fields (float → int)
    @field_validator(
        "ChestPainType", "FBS_over_120", "RestingECG",
        "ExerciseAngina", "SlopeST", "NumVessels", "Thallium",
        mode="before"
    )
    @classmethod
    def to_int(cls, v):
        if isinstance(v, str):
            if not v.replace(".", "", 1).isdigit():
                raise ValueError("Must be an integer")
        return int(float(v))
