name: "🚀 Add New Model or Frontend Feature"
about: "Use this template to propose a new ML model or frontend improvement aligned with Hackmentees’ goal"
title: "[FEATURE] - Your Model/Feature Name"
labels: enhancement, hacktoberfest
assignees: ''

---

## Type of Contribution
- [ ] ML Model
- [ ] Frontend/UI
- [ ] Other

---

## Description
**Goal:** Ensure your contribution aligns with Hackmentees’ mission:  
> A beginner-friendly hub of **lightweight ML models** integrated via a **React + Vite frontend**.

**ML Model:**  
- Name:  
- Short description:  
- Input features / expected output:  
- Optional: external model link (if hosted)

**Frontend/UI:**  
- Feature description:  
- Page/component affected:  
- Related model (if applicable):  

---

## Folder / Files to Update
**ML Model:**  
`ml_models/<MODEL_NAME>/` → `app.py`, `metadata.json`, `requirements.txt`, README.md  

**Frontend:**  
`frontend/src/components/` or `frontend/src/pages/` → update `models.js` if adding card  

---

## Steps to Test
**ML Model:**  
1. Install dependencies: `pip install -r requirements.txt`  
2. Run API locally: `uvicorn app:app --reload`  
3. Test `/predict` endpoint  

**Frontend/UI:**  
1. Navigate to `frontend/` and install dependencies: `npm install`  
2. Run dev server: `npm run dev`  
3. Verify UI changes and model integration  

---

## Additional Notes / References
- Link to README.md for workflow and examples  
- Keep models **lightweight**, or host externally if large  
- Ensure frontend design is **responsive** and **consistent**
