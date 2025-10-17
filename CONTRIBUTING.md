# Contributing to Hackmentees
Thank you for wanting to contribute! A beginner-friendly hub for **ML models + frontend integration**. This guide complements the README and focuses on **workflow, testing, and PR guidelines**.

## 1️⃣ How to Start
1. Fork the repository
2. Create a new branch for your feature or model:

```bash
git checkout -b feature/my-new-model
```
3. Implement your changes (frontend/UI or ML model)
4. Test locally (see Testing section)
5. Submit a Pull Request (PR)

___

## 2️⃣ Testing
### Frontend
```bash
cd frontend
npm install
npm run dev
```
- Open browser at http://localhost:5173. Verify UI - changes, responsiveness, and card integration.

### ML Models
```bash
cd ml_models/<YOUR_MODEL_NAME>
pip install -r requirements.txt
uvicorn app:app --reload
```
- Test `/predict` endpoint using Postman, curl, or frontend integration. 
>[!WARNING]
>⚠️ Keep models lightweight. For large models, host externally and download them in `app.py`.

## 3️⃣ Pull Request Guidelines
- Branch name: `feature/<your-feature-name>` or `fix/<bug-name>`
- Include only one feature per PR
- Ensure folder/files follow repository structure
- Test changes locally before submitting
- Add or update README/metadata if necessary
- Provide a clear PR description

## 4️⃣ Hacktoberfest Tips
- Pick issues labeled beginner or enhancement
- Follow folder structure strictly
- Keep contributions focused and test thoroughly
- Use issue templates when opening new issues or feature requests

## 5️⃣ Resources
- [Readme Guide](README.md)  
- [Issue Template](.github/ISSUE_TEMPLATE/add-new-model-or-frontend-feature.md)
