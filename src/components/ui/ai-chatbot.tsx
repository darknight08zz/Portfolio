'use client';

import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Ujjwal's AI assistant. Ask me about his projects, skills, or experience!",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: { [key: string]: string } = {
    'projects': "Ujjwal has worked on several impressive projects including: 1) Automated OMR Evaluation System using OpenCV, 2) ASL Alphabet Recognition with TensorFlow, 3) DSA Visualizer for learning algorithms, 4) Unauth Billboard - an anonymous campus platform, 5) XIMConnect - a campus networking platform, and 6) Earthquake Data Analysis using Python and Pandas.",
    'skills': "Ujjwal's main skills include: Frontend: React, TypeScript, Tailwind CSS, Framer Motion. Backend: Node.js, Express.js, MongoDB, PostgreSQL. AI & Data: TensorFlow, OpenCV, Pandas, NumPy. He has 2+ years of experience and has solved 200+ DSA problems.",
    'experience': "Currently a B.Tech CSE student at XIM University. 2+ years of frontend development experience. Strong background in AI/ML and data analysis. Skilled in building scalable web applications and solving complex problems.",
    'contact': "You can reach Ujjwal at: Email: prajapatiujjwal0802@gmail.com. GitHub: github.com/darknight08zz. He's always open to collaborations and interesting projects!",
    'ai': "Ujjwal is very interested in AI and has worked with TensorFlow, OpenCV, and built projects like ASL recognition and OMR evaluation systems. He's passionate about leveraging AI to solve real-world problems.",
    'education': "Ujjwal is a B.Tech CSE student at XIM University (Semester VI). He's a Merit Scholar with a 9.18 CGPA, actively learning and implementing new technologies in his projects.",
  };

  const getResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }

    return "That's an interesting question! I can tell you about Ujjwal's projects, skills, experience, or contact information. Feel free to ask!";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    setTimeout(() => {
      const response = getResponse(input);
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[9999] w-14 h-14 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center shadow-xl shadow-violet-500/40 hover:scale-110 transition-transform duration-200 cursor-pointer group"
        aria-label="Open AI assistant"
      >
        <MessageCircle className="h-6 w-6 text-white group-hover:scale-125 transition-transform" />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] w-[90vw] md:w-96 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl flex flex-col h-[500px] overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-violet-600 to-purple-500 p-4 flex justify-between items-center text-white">
        <div>
          <h3 className="font-semibold text-lg">AI Assistant</h3>
          <p className="text-xs opacity-90">Ujjwal's Portfolio Bot</p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 rounded-lg hover:bg-white/20 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[var(--bg-secondary)]">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-lg text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-violet-600 text-white rounded-br-none'
                  : 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-subtle)] rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] px-4 py-3 rounded-lg rounded-bl-none">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-[var(--text-muted)] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[var(--text-muted)] rounded-full animate-bounce delay-100"></div>
                <div className="w-2 h-2 bg-[var(--text-muted)] rounded-full animate-bounce delay-200"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-[var(--border-subtle)] bg-[var(--bg-card)]">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about projects, skills..."
            className="flex-1 px-4 py-2 border border-[var(--border-subtle)] rounded-lg bg-[var(--bg-elevated)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="p-2 bg-gradient-to-br from-violet-600 to-purple-500 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader className="h-5 w-5 animate-spin" />
            ) : (
              <Send className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}