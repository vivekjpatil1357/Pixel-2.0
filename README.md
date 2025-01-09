# **Pixel 2.0**

**Pixel 2.0** is an AI-powered coding assistant designed to enhance programming efficiency with real-time code suggestions, debugging assistance, and chat-based interaction.

---

## **Features**
- **Code Suggestions**: Context-aware, real-time code completions for various languages.
- **Debugging Assistance**: Easily identify and resolve issues in your code.
- **Chat-Based Interaction**: Ask for advice, best practices, and assistance with complex problems.
- **Easy Integration**: Compatible with modern code editors.

---

## **Prerequisites**
- **Node.js**: v14+
- **Python**: v3.8+
- **Electron.js**: v24+
- **Flask**: v2.2+
- **Gemini API Key**: A valid Gemini API key is required for full functionality.

---

## **Installation**

1. **Clone the repository**:
    ```bash
    git clone https://github.com/vivekjpatil1357/Pixel-2.0.git
    cd Pixel-2.0
    ```

2. **Install backend dependencies**:
    ```bash
    cd backend
    pip install -r requirements.txt
    ```

3. **Install frontend dependencies**:
    ```bash
    cd frontend
    npm install
    ```

4. **Set up environment variables**:
    - Create a `.env` file in the root directory and add necessary API keys and configurations.
    - Add your **Gemini API Key** (available from [Gemini API Documentation](https://gemini.com)).

5. **Run the application**:
    - For backend (Flask):
      ```bash
      python app.py
      ```
    - For frontend (Electron.js):
      ```bash
      npx electron main.js
      ```

---

## **Usage**
1. After running applicatin, Open any file in vscode
2. Ask in chat window for code
3. Use the integrated chat for coding advice and debugging help.

---
