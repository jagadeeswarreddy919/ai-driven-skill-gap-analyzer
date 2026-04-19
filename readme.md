# AI Skill Gap Analyzer

## ▶ Quickstart (No setup needed)

1. Unzip the folder
2. Open `index.html` in your browser **or** use VS Code Live Server
3. On Step 2, upload your resume — you'll be prompted to enter your Anthropic API key
4. Get a free API key at: https://console.anthropic.com/

Your API key is stored only in your browser session (never saved to disk).

---

## Optional: Run with Python backend (no API key prompt)

If you prefer not to enter the key in the browser:

```bash
pip install -r requirements.txt
export ANTHROPIC_API_KEY=sk-ant-your-key-here   # Mac/Linux
# set ANTHROPIC_API_KEY=sk-ant-your-key-here    # Windows CMD

python server.py
```

Then open: http://127.0.0.1:5500
