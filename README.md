# GrowSmart AI - Agricultural Assistant 

A comprehensive AI-powered agricultural platform designed to empower farmers worldwide with intelligent farming solutions, crop management, and expert guidance.

## 🌱 Features

- **AI Chat Assistant**: Get personalized farming advice and crop recommendations
- **Plant Identification**: Instant plant species recognition using advanced AI
- **Disease Detection**: Early disease identification with treatment recommendations
- **Weather Integration**: Real-time weather data and forecasts
- **Market Prices**: Live crop market pricing information
- **Voice Commands**: Hands-free operation with multilingual voice support
- **Multilingual Support**: Available in 14+ languages including Hindi, Tamil, Telugu, and more
- **Offline Capability**: Essential features work without internet connection
- **Expert Network**: Connect with agricultural experts for consultations

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd growsmart-ai

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

Create a `.env.local` file with your API keys. Do not commit this file.

Required environment variables:

Frontend (Vite):

```bash
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Supabase Edge Functions (set via Supabase secrets):

```bash
OPENROUTER_API_KEY=your_openrouter_api_key
GROQ_API_KEY=your_groq_api_key
ELEVENLABS_API_KEY=your_elevenlabs_api_key
PLANT_ID_API_KEY=your_plant_id_api_key
MANDI_API_KEY=your_india_gov_data_api_key
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

Never hardcode secrets in source code. Use `Deno.env.get()` in functions and Supabase Secrets to store them.

## 🛠️ Technology Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Radix UI, shadcn/ui
- **Backend**: Supabase (Database, Auth, Edge Functions)
- **AI Integration**: OpenRouter, Hugging Face, Google Gemini
- **Build Tool**: Vite
- **Deployment**: Vercel/Netlify compatible

## 📱 Supported Platforms

- Web browsers (Chrome, Firefox, Safari, Edge)
- Progressive Web App (PWA) for mobile devices
- Responsive design for tablets and smartphones

## 🌍 Language Support

Available in 14 languages:
- English, Hindi, Tamil, Telugu, Kannada
- Marathi, Gujarati, Bengali, Punjabi, Malayalam
- Spanish, Portuguese, Japanese, Indonesian

## 🔧 Development

### Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Application pages
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── integrations/       # Third-party integrations
└── contexts/           # React contexts

supabase/
├── functions/          # Edge functions
└── migrations/         # Database migrations
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

We welcome contributions! Please read our contributing guidelines before submitting pull requests.

Security best practices:
- Never commit API keys or secrets
- Use `.env.example` to document required variables
- Report vulnerabilities privately

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 About

GrowSmart AI was built with the mission to democratize agricultural knowledge and empower farmers with cutting-edge technology. Our team is dedicated to creating sustainable farming solutions for a better tomorrow.

---

**Built with ❤️ for farmers worldwide**
