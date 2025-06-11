# Gemini AI Clone

A React-based AI chat platform using Google Gemini API.

## Features

- Chat interface with AI responses
- Recent prompts sidebar
- Loading indicator
- Profile links (GitHub, LinkedIn, Instagram)
- Responsive UI

## Getting Started

### Prerequisites

- Node.js (v20 or higher recommended)
- npm

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/geminiclone.git
    cd geminiclone
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Add your Google Gemini API key  
   Edit `src/config/gemini.js` and set your API key:
    ```javascript
    const Apikey = "YOUR_GEMINI_API_KEY";
    ```

4. Start the development server:
    ```bash
    npm start
    ```
    The app will run at [http://localhost:3000](http://localhost:3000).

### Usage

- Enter a prompt in the input box and click the send icon to chat with Gemini AI.
- View recent prompts in the sidebar.
- Click profile icons at the bottom for GitHub, LinkedIn, and Instagram.

### Project Structure

```
src/
  assets/         # Icons and images
  components/
    Main/         # Main chat UI
    Sidebar/      # Sidebar with recent prompts
  config/
    gemini.js     # Gemini API integration
  context/
    context.js    # React context for state management
  App.js
  index.js
```

### Customization

- **Profile Links:**  
  Update your social links and icons in `Main.js` and `assets/assets.js`.
- **Styling:**  
  Modify CSS in `src/components/Main/Main.css` and `src/components/Sidebar/Sidebar.css`.

### Notes

- **API Key Security:**  
  Do NOT expose your Gemini API key in a public repo or client-side code for production. Use a backend proxy for production deployments.
- **Node Version:**  
  The Gemini SDK requires Node.js v20 or higher.


**Made  by RajeshKumar**
