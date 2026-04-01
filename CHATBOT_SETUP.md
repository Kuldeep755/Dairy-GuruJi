# 🐄 Dairy Guru Ji AI Chatbot Setup Guide

## Overview

I've built a free AI chatbot for Dairy Guru Ji using **Groq API** that can answer questions about:
- Products (MLD, Mineral Mixture, Bypass Fat, etc.)
- Farm adoption services
- Dealer opportunities
- Team information
- Social impact programs
- General dairy farming guidance

## 🚀 Quick Setup

### Step 1: Get Free API Key

1. Visit: **https://console.groq.com/keys**
2. Sign in to your Groq account
3. Click **"Create API Key"**
4. Copy the generated API key

### Step 2: Add API Key

**For Local Development:**

Create a file named `.env.local` in the project root:

```bash
GROQ_API_KEY=gsk_...  # Your API key here
GROQ_MODEL=llama-3.1-8b-instant
```

**For Vercel Deployment:**

1. Go to your Vercel project dashboard
2. Navigate to **Settings → Environment Variables**
3. Add variable:
   - Name: `GROQ_API_KEY`
   - Value: `your_api_key_here`
   - Name: `GROQ_MODEL`
   - Value: `llama-3.1-8b-instant`
4. Redeploy your project

## 💰 Pricing

**Groq Free Tier:**
- ✅ Free developer access available
- ✅ Fast responses for chatbots
- ✅ Good fit for small business website assistants
- ℹ️ Limits can change by account and model, so check your Groq console

## 🧪 Testing

```bash
npm run dev
```

Then visit your website and click the chat button in the bottom-right corner.

## 📝 Example Questions to Try

- "What products does Dairy Guru Ji offer?"
- "Tell me about farm adoption"
- "How can I become a dealer?"
- "Who is the founder?"
- "What is MLD product?"
- "How can I start my own cattle feed brand?"

## 🛠️ Features

- **Bilingual**: Responds in Hindi or English based on user query
- **Context Aware**: Remembers conversation history
- **Branded**: Custom Dairy Guru Ji styling
- **Mobile Friendly**: Responsive design
- **Minimizable**: Can minimize when not in use

## 🔒 Security Notes

- API key is stored server-side only
- Never exposed to the client browser
- Rate limiting depends on your Groq account plan

## 📞 Need Help?

If you have questions about the chatbot or Dairy Guru Ji services, feel free to ask!
