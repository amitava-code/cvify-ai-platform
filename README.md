# 🚀 CVify — AI-Powered Interview Analysis Platform

CVify is an AI-driven backend platform that analyzes resumes and generates structured interview insights. It processes PDF resumes, extracts content, and evaluates candidates using AI to produce actionable reports.

---

## 🧠 Core Idea

Upload a resume → Extract text → Analyze with AI → Get an interview-ready report

---

## ⚙️ Tech Stack

* **Backend:** Node.js, Express
* **AI Integration:** Gemini API
* **File Upload:** multer
* **PDF Parsing:** pdf-parse
* **Validation & Schema:** Zod
* **Environment Management:** dotenv

---

## 🔥 Features

* 📄 Upload resumes in PDF format
* 🧾 Automatic text extraction from PDFs
* 🤖 AI-powered candidate evaluation
* 📊 Structured interview report generation
* ✅ Schema-validated AI responses (Zod)
* ⚡ Clean REST API architecture

---

## 🏗️ Architecture Overview

```text
Client
  ↓
Upload Route (multer)
  ↓
Controller Layer
  ↓
PDF Parsing (pdf-parse)
  ↓
AI Processing (Gemini)
  ↓
Structured Response (Zod)
  ↓
JSON API Response
```



## 📡 API ENDPOINT

### Upload Resume & Generate Report

```http
POST /api/interview/analyze
```

### Request

* Content-Type: `multipart/form-data`
* Field: `resume` (PDF file)
* Optional: `selfDescription`

---

### Response (Example)

```json
{
  "matchScore": 82,
  "strengths": ["Strong problem solving", "Good JS fundamentals"],
  "weaknesses": ["Limited system design exposure"],
  "suggestions": ["Practice backend scalability concepts"]
}
```

---

## 🧪 Error Handling

* Invalid file type → rejected
* Empty or corrupted PDF → handled
* AI malformed response → schema validation fallback

---

## 📌 Future Improvements

* Frontend integration (React)
* Real-time feedback UI
* Multi-file support
* Advanced scoring metrics
* Authentication system

---

## 💡 Why This Project?

This project demonstrates:

* Real-world backend architecture
* File handling and processing
* AI integration with structured outputs
* Clean and scalable API design

---


## 🚧 Work in Progress

CVify AI is currently under active development.



## 👨‍💻 Author

Amitava Biswas

---

## ⭐ Contribute / Feedback

Feel free to fork, open issues, or suggest improvements.
