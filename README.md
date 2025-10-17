# Hackmentees

Welcome to **Hackmentees**! 🎉

This is a beginner-to-intermediate friendly repository for **Hacktoberfest 2025**, where contributors can add **ML models** and **frontend enhancements**.  

---

## 🚀 Project Goal

The goal of Hackmentees is to create a **central hub of lightweight ML models** displayed via a **React + Vite frontend**, where contributors can:

- Add **ML models** (lightweight or hosted externally if large)  
- Improve the **frontend UI** (cards, sidebar, dark/light mode, animations)  
- Integrate model APIs dynamically with the frontend  

This project is ideal for beginners who want to contribute to **real-world ML + frontend integration** in a structured and guided way.

---

## 📂 Repository Structure

```text
Hackmentees/
│
├── frontend/                       # React + Vite frontend
│   ├── src/
│   │   ├── components/             # UI components (Sidebar, Card, ThemeToggle)
│   │   ├── pages/                  # Pages (Home, etc.)
│   │   └── data/
│   │       └── models.js           # Frontend metadata for models
│   ├── App.jsx
│   └── main.jsx
│
├── ml_models/                      # ML contributions
│   ├── TEMPLATE_MODEL/             # Template for new models
│   │   ├── app.py                  # API stub
│   │   ├── requirements.txt
│   │   ├── metadata.json           # Frontend integration info
│   │   └── README.md               # Explain dataset/usage
│
├── .github/ISSUE_TEMPLATE/         # Issue templates
├── README.md
└── CONTRIBUTING.md
```
___

## 💻 How to Run Frontend
1. Navigate to the frontend folder:
```bash
cd frontend
```
2. Install dependencies:
```bash
npm install
```
3. Run dev server:
```bash
npm run dev
```
4. Open browser at http://localhost:5173
___

### Example Workflow for Adding a Model

1. Copy `ml_models/TEMPLATE_MODEL` → rename folder to `house_price_prediction`
2. Replace `app.py` with your prediction logic (small dataset / lightweight model)
3. Update `metadata.json`:

```json
{
  "name": "House Price Prediction",
  "version": "v1.0",
  "description": "Predict house prices from square footage and location",
  "endpoint": "/ml_models/house_price_prediction/predict",
  "features": ["square_feet", "location"]
}
```
4. Test locally:
```bash
cd ml_models/house_price_prediction
pip install -r requirements.txt
uvicorn app:app --reload
```
5. Add a new card to `frontend/src/data/models.js`:
```js
models.push({
  id: 1,
  name: "House Price Prediction",
  description: "Predict house prices from square footage and location",
  tag: "ML",
  endpoint: "/ml_models/house_price_prediction/predict"
})
```
6. Test frontend and Submit a Pull Request (PR)
>[!WARNING]  
>⚠️ Keep models lightweight; for large models, host externally (Google Drive / Hugging Face) and download in `app.py`.

___

## 🎨 Frontend Contribution
- Add new cards or pages in `frontend/src/pages` or `components`
- Update `models.js` to include your model metadata
- UI improvements: dark/light theme toggle, sidebar animations, responsive design

___

## 📝 Contribution Flow
1. Pick an issue (frontend / ML / integration)
2. Fork repo → create branch → implement feature
3. Testlocally → submit PR
4. Maintainers review → merge
>**Note**
>This ensures contributions are structured, beginner-friendly, and review-ready.
___
## 🙌 Hacktoberfest Tips
- Look for issues labeled `beginner` or `enhancement`  
- Follow folder structure strictly  
- Keep PRs focused on **one feature at a time**
- Always test your ML models or frontend changes locally before submitting a PR
___
## 📬 Need Help?
- Open an issue and tag `question`  
- Discuss in PR comments for guidance
___
## 📚 Resources
- [Contribution Guide](CONTRIBUTING.md)  
- [Issue Template](.github/ISSUE_TEMPLATE/add-new-model-or-frontend-feature.md)
