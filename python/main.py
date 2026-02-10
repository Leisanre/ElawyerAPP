"""
E-Lawyer Bot - Python Backend Server
FastAPI server for document processing and ML predictions
"""

import sys
import logging
from pathlib import Path
from fastapi import FastAPI, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional, Dict, Any
import uvicorn

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# Initialize FastAPI app
app = FastAPI(
    title="E-Lawyer Bot API",
    description="API for Philippine Labor Law case prediction",
    version="1.0.0"
)

# Configure CORS for Electron
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Pydantic models
class ExtractRequest(BaseModel):
    file_paths: List[str]


class ExtractResponse(BaseModel):
    success: bool
    data: Optional[Dict[str, Any]] = None
    error: Optional[str] = None


class PredictRequest(BaseModel):
    features: Dict[str, Any]
    user_goal: List[str]


class PredictResponse(BaseModel):
    success: bool
    prediction: Optional[Dict[str, Any]] = None
    error: Optional[str] = None


class SimilarCaseRequest(BaseModel):
    case_type: str
    features: Dict[str, Any]


class SimilarCaseResponse(BaseModel):
    success: bool
    cases: Optional[List[Dict[str, Any]]] = None
    error: Optional[str] = None


class SaveCaseRequest(BaseModel):
    case_data: Dict[str, Any]
    file_path: str


class SaveCaseResponse(BaseModel):
    success: bool
    path: Optional[str] = None
    error: Optional[str] = None


# Health check endpoint
@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {
        "status": "healthy",
        "service": "elawyer-backend",
        "version": "1.0.0"
    }


# Document extraction endpoint (placeholder for MVP)
@app.post("/api/extract", response_model=ExtractResponse)
async def extract_documents(request: ExtractRequest):
    """
    Extract information from uploaded documents.
    For MVP, this returns mock data.
    """
    try:
        logger.info(f"Extracting from {len(request.file_paths)} documents")

        # Mock extracted data - in production, this would:
        # 1. Parse PDF/DOCX files
        # 2. Extract text using OCR if needed
        # 3. Use NLP to identify key information
        # 4. Structure the data

        extracted_data = {
            "case_type": "Illegal Dismissal",
            "employment_status": "Regular",
            "tenure": "3 years",
            "salary": "25000",
            "cause_of_dismissal": "Absenteeism",
            "notices_given": False,
            "confidence": 0.85
        }

        return ExtractResponse(success=True, data=extracted_data)

    except Exception as e:
        logger.error(f"Extraction error: {str(e)}")
        return ExtractResponse(success=False, error=str(e))


# Prediction endpoint (placeholder for MVP)
@app.post("/api/predict", response_model=PredictResponse)
async def predict_case(request: PredictRequest):
    """
    Generate case prediction based on extracted features.
    For MVP, this returns mock prediction data.
    """
    try:
        logger.info("Generating case prediction")

        # Mock prediction - in production, this would:
        # 1. Load the trained XGBoost model
        # 2. Prepare features from the input
        # 3. Generate probability scores
        # 4. Identify key factors

        prediction = {
            "employee_win_probability": 72,
            "employer_win_probability": 28,
            "confidence": "HIGH",
            "factors": [
                {
                    "description": "No written notice to explain was given",
                    "impact": "positive",
                    "weight": 25
                },
                {
                    "description": "No written notice of dismissal was provided",
                    "impact": "positive",
                    "weight": 20
                },
                {
                    "description": "Regular employment status",
                    "impact": "positive",
                    "weight": 15
                },
                {
                    "description": "Previous disciplinary record exists",
                    "impact": "negative",
                    "weight": -8
                }
            ],
            "monetary_breakdown": {
                "total_amount": 185000,
                "breakdown": [
                    {
                        "category": "Back Wages (3 months)",
                        "amount": 75000,
                        "description": "₱25,000/month x 3 months"
                    },
                    {
                        "category": "Separation Pay",
                        "amount": 50000,
                        "description": "One month salary per year of service"
                    },
                    {
                        "category": "13th Month Pay",
                        "amount": 20833,
                        "description": "Prorated 13th month pay"
                    },
                    {
                        "category": "Moral Damages",
                        "amount": 25000,
                        "description": "Awarded at court discretion"
                    },
                    {
                        "category": "Attorney's Fees",
                        "amount": 14167,
                        "description": "10% of total award"
                    }
                ]
            },
            "laws_violated": [
                {
                    "law": "Article 297, Labor Code",
                    "description": "No just cause for dismissal established",
                    "severity": "high"
                },
                {
                    "law": "Article 297, Labor Code",
                    "description": "Due process requirements not met (twin notice rule)",
                    "severity": "high"
                }
            ],
            "next_steps": [
                "Document all evidence of the dismissal, including dates and conversations",
                "File a complaint with the National Labor Relations Commission (NLRC) within 4 years",
                "Consider seeking assistance from DOLE Single Entry Approach (SEnA) for amicable settlement",
                "Gather witnesses who can attest to your work performance and the dismissal process",
                "Prepare a position paper detailing your arguments against the dismissal"
            ]
        }

        return PredictResponse(success=True, prediction=prediction)

    except Exception as e:
        logger.error(f"Prediction error: {str(e)}")
        return PredictResponse(success=False, error=str(e))


# Similar cases endpoint (placeholder for MVP)
@app.get("/api/similar-cases", response_model=SimilarCaseResponse)
async def get_similar_cases(case_type: str, features: Optional[str] = None):
    """
    Get similar cases from the database.
    For MVP, this returns mock data.
    """
    try:
        logger.info(f"Fetching similar cases for type: {case_type}")

        # Mock similar cases - in production, this would query the database
        similar_cases = [
            {
                "case_name": "Doe v. ABC Corporation",
                "case_type": case_type,
                "outcome": "Employee Favorable",
                "year": 2023,
                "similarity": 0.92,
                "summary": "Employee was dismissed without proper notice. Court ruled in favor of employee."
            },
            {
                "case_name": "Smith v. XYZ Inc.",
                "case_type": case_type,
                "outcome": "Employee Favorable",
                "year": 2022,
                "similarity": 0.88,
                "summary": "Lack of just cause established. Employee awarded separation pay."
            }
        ]

        return SimilarCaseResponse(success=True, cases=similar_cases)

    except Exception as e:
        logger.error(f"Similar cases error: {str(e)}")
        return SimilarCaseResponse(success=False, error=str(e))


# Save case endpoint (placeholder for MVP)
@app.post("/api/save-case", response_model=SaveCaseResponse)
async def save_case(request: SaveCaseRequest):
    """
    Save case data to .elb file.
    For MVP, this is handled by Electron main process.
    """
    try:
        logger.info(f"Saving case to {request.file_path}")

        # This endpoint is a placeholder - the actual file saving
        # is handled by the Electron main process for security reasons

        return SaveCaseResponse(success=True, path=request.file_path)

    except Exception as e:
        logger.error(f"Save case error: {str(e)}")
        return SaveCaseResponse(success=False, error=str(e))


# Main entry point
def main():
    """Start the FastAPI server"""
    logger.info("Starting E-Lawyer Bot backend server...")
    uvicorn.run(
        "main:app",
        host="127.0.0.1",
        port=5000,
        reload=False,
        log_level="info"
    )


if __name__ == "__main__":
    main()
