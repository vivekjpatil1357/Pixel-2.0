import os
import google.generativeai as genai

genai.configure(api_key=os.environ["API_KEY"])

def chat(query, chatStr, prg=False):    
    model = genai.GenerativeModel("gemini-1.5-flash")
    print("this is sending ",query)
    response = model.generate_content(query)
    response = response.text
    response = response.split("\n")
    response = response[1:-2] 
    return '\n'.join(response)