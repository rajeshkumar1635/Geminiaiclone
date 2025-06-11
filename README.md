# 🌟 Gemini AI Clone

A React-based AI chat platform using the **Google Gemini API**.

---

## 🚀 Features

- 🧠 Chat interface with real-time AI responses  
- 🕘 Recent prompts displayed in a sidebar  
- 🔄 Loading indicator during AI response generation  
- 🔗 Social profile links (GitHub, LinkedIn)  
- 📱 Responsive UI design for all devices  

---

## 🛠️ Getting Started

### ✅ Prerequisites

- Node.js (v20 or higher recommended)
- npm (Node package manager)

### 📦 Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/geminiclone.git
    cd geminiclone
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up your API key:**  
   Edit `src/config/gemini.js` and add your API key:

    ```javascript
    const Apikey = "YOUR_GEMINI_API_KEY";
    ```

    > 🔒 **Note:** For better security, use environment variables (see below).

4. **Start the development server:**

    ```bash
    npm start
    ```

    Visit the app at [http://localhost:3000](http://localhost:3000)

---

## 🧪 Usage

- Type your prompt into the input box and hit the send icon.
- Browse recent prompts from the sidebar.
- Use social icons to visit GitHub, LinkedIn, or Instagram profiles.

---

## 📁 Project Structure
src/
├── assets/ # Icons and images
├── components/
│ ├── Main/ # Main chat UI
│ └── Sidebar/ # Sidebar with recent prompts
├── config/
│ └── gemini.js # Gemini API integration
├── context/
│ └── context.js # React context for state management
├── App.js
└── index.js

---

## 🎨 Customization

- **Profile Links:**  
  Update your social URLs and icons in `Main.js` and `assets/assets.js`.

- **Styling:**  
  Customize styles in:
  - `src/components/Main/Main.css`
  - `src/components/Sidebar/Sidebar.css`

---

## 🧩 Optional: Environment Variable Setup (Recommended)

1. Create a `.env` file in the root:

    ```
    REACT_APP_GEMINI_API_KEY=your_actual_key_here
    ```

2. Update `gemini.js`:

    ```javascript
    const Apikey = process.env.REACT_APP_GEMINI_API_KEY;
    ```

---

## 📦 Build for Production

```bash
npm run build

📝 Notes
🔐 API Key Security:
Never expose your Gemini API key in public repositories or frontend code in production. Use a backend proxy.

🧱 Node Version:
Ensure you're running Node.js v20 or higher, as required by the Gemini SDK.
