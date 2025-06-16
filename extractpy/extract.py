import pdfplumber
import re

# Step 1: Extract text from PDF
pdf_path = "CA3.pdf"  # Replace with your actual PDF file path

full_text = ""
with pdfplumber.open(pdf_path) as pdf:
    for page in pdf.pages:
        page_text = page.extract_text()
        if page_text:
            full_text += page_text + "\n"

# Step 2: Split text using numbering pattern (e.g., 1. 2. 3.)
# It looks for a number followed by a dot and space/newline
questions = re.split(r'\n?\s*\d+\.\s+', full_text)
questions = [q.strip() for q in questions if q.strip()]  # Clean blanks

# Step 3: Print each question
for i, q in enumerate(questions, 1):
    print(f"Q{i}: {q}")

