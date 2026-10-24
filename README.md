# POLARIS AI

**An AI-powered conversational application built with React.js and Google's Gemini API.**

POLARIS AI is a web-based AI chatbot that allows users to interact with Google's Gemini model through a dynamic conversational interface. It focuses on providing a smooth chat experience with prompt history, responsive interactions, loading states, and dynamically rendered AI-generated responses.

## Features

- **AI-Powered Conversations:** Generate responses using Google's Gemini API.
- **Interactive Chat Interface:** Send prompts and view AI-generated responses dynamically.
- **Prompt History:** Access previous prompts within the conversation interface.
- **Dynamic Response Rendering:** Display responses as they are received from the API.
- **Typing Effects:** Provide visual feedback while AI responses are being displayed.
- **Loading States:** Indicate when requests are being processed.
- **Reusable Components:** Organize the interface into maintainable React components.
- **State Management:** Manage chat interactions and application state using React.

## Tech Stack

| Technology | Purpose |
|---|---|
| React.js | Building the user interface |
| JavaScript (ES6+) | Application logic and asynchronous operations |
| Google Gemini API | AI-powered text generation |
| CSS3 | Styling and interface design |
| Vite | Frontend development tooling |

## How It Works

1. The user enters a prompt in the chat interface.
2. The application sends the prompt to the Gemini API.
3. The API processes the request and generates a response.
4. The application handles the asynchronous response and renders it in the conversation.
5. Loading and typing effects provide feedback during response generation.
6. Previous prompts remain accessible through the conversation interface.

## Getting Started

### Prerequisites

- Node.js and npm installed.
- A Google Gemini API key.
- Git installed (optional, for cloning the repository).

### Installation

**1. Clone the repository**

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file in the project root and configure the Gemini API key according to your application's existing API integration.

```env
VITE_GEMINI_API_KEY=your_gemini_api_key
```

> **Security note:** Vite exposes variables prefixed with `VITE_` to client-side code. This configuration is suitable only for a prototype where you understand the exposure risk. For a publicly deployed application, keep the API key on a backend server and have the frontend call that server instead.

**4. Start the development server**

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application.

*Note: The commands and environment variable above assume a standard Vite setup. Adjust them to match your actual project configuration.*

## Project Structure

The following is an illustrative structure for a React application; the actual folders may differ.

```text
POLARIS-AI/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Learning Outcomes

Building POLARIS AI provided practical experience with:

- Integrating a third-party AI API into a React application.
- Handling asynchronous JavaScript operations.
- Managing UI state across conversational interactions.
- Rendering dynamically generated content.
- Implementing loading indicators and typing effects.
- Structuring reusable React components.
- Connecting frontend interactions with an external API.

## Future Improvements

- Add conversation persistence across page reloads.
- Support multiple conversations and conversation management.
- Improve error handling for failed requests and API rate limits.
- Add Markdown rendering and code syntax highlighting.
- Introduce a backend proxy to secure API credentials.
- Add authentication and user-specific conversation history.
- Deploy the application with production-ready environment configuration.

## Author

**Madesh**

- GitHub: [Your GitHub Profile](https://github.com/)
- LinkedIn: [Your LinkedIn Profile](https://www.linkedin.com/)

---

*POLARIS AI — Explore ideas through intelligent conversations.*