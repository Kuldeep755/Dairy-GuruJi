"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Loader2, Minimize2 } from "lucide-react";

const languageCopy = {
  en: {
    intro:
      "🙏 Namaste! I'm Dairy Guru Ji's AI Assistant.\n\nI can help you with:\n• Information about our products\n• Farm adoption services\n• Dealer opportunities\n• General dairy farming guidance\n• And much more!\n\nHow can I help you today?",
    placeholder: "Ask about Dairy Guru Ji...",
    typing: "Typing...",
    helper:
      "AI responses are for informational purposes. For specific advice, consult our experts.",
    minimized: "Click to continue chatting...",
    bubbleLabel: "Chat with us!",
    error:
      "Sorry, I'm having trouble responding right now. Please try again or contact us directly.",
    connection: "Connection error. Please check your internet and try again.",
  },
  hi: {
    intro:
      "🙏 नमस्ते! मैं Dairy Guru Ji का AI Assistant हूं।\n\nमैं आपकी मदद कर सकता हूं:\n• हमारे products की जानकारी\n• Farm adoption services\n• Dealer opportunities\n• सामान्य dairy farming guidance\n• और बहुत कुछ!\n\nआज मैं आपकी कैसे मदद कर सकता हूं?",
    placeholder: "Dairy Guru Ji के बारे में पूछें...",
    typing: "Typing...",
    helper:
      "AI responses केवल जानकारी के लिए हैं। किसी विशेष सलाह के लिए हमारी expert team से संपर्क करें।",
    minimized: "Chat जारी रखने के लिए क्लिक करें...",
    bubbleLabel: "हमसे chat करें!",
    error:
      "अभी जवाब देने में थोड़ी दिक्कत हो रही है। कृपया दोबारा कोशिश करें या सीधे हमसे संपर्क करें।",
    connection: "Connection error. कृपया अपना internet check करके फिर कोशिश करें.",
  },
};

const Chatbot = () => {
  const [language, setLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: languageCopy.en.intro,
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const copy = languageCopy[language];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    setMessages((prev) => {
      if (
        prev.length === 1 &&
        prev[0].role === "assistant" &&
        Object.values(languageCopy).some((item) => item.intro === prev[0].content)
      ) {
        return [{ role: "assistant", content: languageCopy[language].intro }];
      }

      return prev;
    });
  }, [language]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setIsLoading(true);

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history: messages.slice(-10), // Send last 10 messages for context
          language,
        }),
      });

      const data = await response.json();

      if (data.success && data.response) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              data.error ||
              copy.error,
          },
        ]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: copy.connection,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Chat button
  const ChatButton = () => (
    <button
      onClick={() => {
        setIsOpen(true);
        setIsMinimized(false);
      }}
      className="fixed bottom-6 right-6 z-50 bg-secondary hover:bg-secondary/90 text-black p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      aria-label="Open Chat"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-black text-sm px-3 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        {copy.bubbleLabel}
      </span>
    </button>
  );

  // Minimized view
  if (isMinimized) {
    return (
      <>
        <ChatButton />
        <div className="fixed bottom-24 right-6 z-50 bg-black/95 border border-white/10 rounded-2xl shadow-2xl p-4 w-80 backdrop-blur-xl">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-white">
              <Bot className="w-5 h-5 text-secondary" />
              <span className="font-semibold">Dairy Guru Ji Bot</span>
            </div>
            <div className="flex gap-1">
              <button
                onClick={() => setIsMinimized(false)}
                className="p-1.5 hover:bg-white/10 rounded-lg transition text-white/70 hover:text-white"
                aria-label="Maximize"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setIsMinimized(false);
                }}
                className="p-1.5 hover:bg-white/10 rounded-lg transition text-white/70 hover:text-white"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className="text-sm text-white/60">
            {copy.minimized}
          </p>
        </div>
      </>
    );
  }

  // Full chat widget
  if (!isOpen) {
    return <ChatButton />;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)]">
      {/* Header */}
      <div className="bg-gradient-to-r from-secondary to-secondary/80 text-black rounded-t-2xl p-4 flex items-center justify-between shadow-xl">
        <div className="flex items-center gap-3">
          <div className="bg-black/20 p-2 rounded-full">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-bold">Dairy Guru Ji Assistant</h3>
            <p className="text-xs text-black/70">Powered by AI</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="rounded-lg border border-black/10 bg-black/10 px-2 py-1 text-xs font-medium text-black outline-none"
            aria-label="Select language"
          >
            <option value="en">English</option>
            <option value="hi">हिंदी</option>
          </select>
          <button
            onClick={() => setIsMinimized(true)}
            className="p-2 hover:bg-black/20 rounded-lg transition"
            aria-label="Minimize"
          >
            <Minimize2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-black/20 rounded-lg transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="bg-black/95 border-x border-white/10 h-96 overflow-y-auto p-4 space-y-4 backdrop-blur-xl">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex gap-3 ${
              msg.role === "user" ? "flex-row-reverse" : "flex-row"
            }`}
          >
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                msg.role === "user"
                  ? "bg-secondary text-black"
                  : "bg-white/10 text-white"
              }`}
            >
              {msg.role === "user" ? (
                <User className="w-4 h-4" />
              ) : (
                <Bot className="w-4 h-4" />
              )}
            </div>
            <div
              className={`flex-1 rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-secondary text-black rounded-tr-sm"
                  : "bg-white/10 text-white rounded-tl-sm"
              }`}
            >
              <div className="whitespace-pre-wrap [&_br]:block [&_br]:content-[''] [&_br]:mb-2">
                {msg.content}
              </div>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-3">
            <div className="bg-white/10 text-white flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ">
              <Bot className="w-4 h-4" />
            </div>
            <div className="bg-white/10 text-white rounded-2xl rounded-tl-sm px-4 py-3">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm">{copy.typing}</span>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form
        onSubmit={handleSubmit}
        className="bg-black rounded-b-2xl p-3 backdrop-blur-5xl "
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={copy.placeholder}
            className="flex-1 bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-secondary/50"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="bg-secondary text-black p-3 rounded-xl hover:bg-secondary/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-white mt-2 text-center">
          {copy.helper}
        </p>
      </form>
    </div>
  );
};

export default Chatbot;
