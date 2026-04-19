"""
server.py  –  Flask backend for AI Skill Gap Analyzer
Proxies resume parsing requests to the Anthropic API server-side
to avoid browser CORS restrictions.

Usage:
  pip install flask flask-cors anthropic pypdf2
  set ANTHROPIC_API_KEY=your_key_here   (Windows)
  export ANTHROPIC_API_KEY=your_key_here  (Mac/Linux)
  python server.py
"""

import os
import json
import base64
import io
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import anthropic

app = Flask(__name__, static_folder=".", static_url_path="")
CORS(app)

# ── Anthropic client ──────────────────────────────────
client = anthropic.Anthropic(api_key=os.environ.get("ANTHROPIC_API_KEY"))

# ── Serve frontend files ──────────────────────────────
@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/<path:path>")
def static_files(path):
    return send_from_directory(".", path)

# ── Resume parse endpoint ─────────────────────────────
@app.route("/api/parse-resume", methods=["POST"])
def parse_resume():
    try:
        data = request.get_json()
        role_skills = data.get("roleSkills", [])
        skills_list = ", ".join(role_skills)

        file_type = data.get("fileType", "text")   # "pdf" or "text"
        file_content = data.get("content", "")     # base64 for pdf, plain text for txt

        prompt = f"""You are a resume parser. Extract all technical skills, tools, technologies, and frameworks mentioned in this resume.

Then compare them against this list of role-required skills: {skills_list}

Return ONLY a valid JSON object (no markdown, no explanation) in this exact format:
{{
  "matched": ["skill1", "skill2"],
  "other": ["skill3", "skill4"]
}}

"matched" = skills from the resume that appear in the role-required list (use EXACT names from the role list).
"other" = additional technical skills found in the resume not in the role list (up to 8 max)."""

        # Build message content based on file type
        if file_type == "pdf":
            message_content = [
                {
                    "type": "document",
                    "source": {
                        "type": "base64",
                        "media_type": "application/pdf",
                        "data": file_content,
                    },
                },
                {"type": "text", "text": prompt},
            ]
        else:
            # Plain text — truncate to avoid token limits
            truncated = file_content[:8000]
            message_content = f"""You are a resume parser. Extract all technical skills, tools, technologies, and frameworks mentioned in this resume text.

Resume:
---
{truncated}
---

Then compare them against this list of role-required skills: {skills_list}

Return ONLY a valid JSON object (no markdown, no explanation) in this exact format:
{{
  "matched": ["skill1", "skill2"],
  "other": ["skill3", "skill4"]
}}

"matched" = skills from the resume that appear in the role-required list (use EXACT names from the role list).
"other" = additional technical skills found in the resume not in the role list (up to 8 max)."""

        # Call Claude
        if file_type == "pdf":
            response = client.messages.create(
                model="claude-sonnet-4-20250514",
                max_tokens=1000,
                messages=[{"role": "user", "content": message_content}],
            )
        else:
            response = client.messages.create(
                model="claude-sonnet-4-20250514",
                max_tokens=1000,
                messages=[{"role": "user", "content": message_content}],
            )

        raw = "".join(
            block.text for block in response.content if block.type == "text"
        )

        # Strip markdown fences if present
        clean = raw.strip()
        if clean.startswith("```"):
            clean = clean.split("```")[1]
            if clean.startswith("json"):
                clean = clean[4:]
            clean = clean.strip()

        parsed = json.loads(clean)
        return jsonify({
            "matched": parsed.get("matched", []),
            "other": parsed.get("other", []),
        })

    except json.JSONDecodeError as e:
        return jsonify({"error": f"Failed to parse AI response as JSON: {str(e)}"}), 500
    except anthropic.AuthenticationError:
        return jsonify({"error": "Invalid API key. Please check your ANTHROPIC_API_KEY."}), 401
    except anthropic.APIConnectionError:
        return jsonify({"error": "Could not connect to Anthropic API. Check your internet."}), 503
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("\n⚠️  WARNING: ANTHROPIC_API_KEY environment variable not set!")
        print("   Set it before running:  export ANTHROPIC_API_KEY=sk-ant-...\n")
    else:
        print(f"\n✅ API key loaded ({api_key[:12]}...)\n")

    print("🚀 Starting AI Skill Gap Analyzer...")
    print("   Open in browser: http://127.0.0.1:5500\n")
    app.run(host="127.0.0.1", port=5500, debug=True)
