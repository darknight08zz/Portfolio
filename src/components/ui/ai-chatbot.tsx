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
    'experience': "Currently a final-year B.Tech CSE student at XIM University with hands-on software development and frontend engineering experience. Skilled in React, Next.js, TypeScript, building scalable web applications, and algorithmic problem solving.",
    'contact': "You can reach Ujjwal at: Email: prajapatiu0802@gmail.com. GitHub: github.com/darknight08zz. LinkedIn: linkedin.com/in/ujjwal-prajapati-34b44b285. He's always open to new grad opportunities, software engineering roles, and collaborations!",
    'ai': "Ujjwal is very interested in AI and has worked with TensorFlow, PyTorch, OpenCV, and built projects like CrowdShield (real-time crowd safety platform) and NetSentinel (deep learning NIDS).",
    'education': "Ujjwal is a final-year B.Tech CSE student at XIM University. He's a Merit Scholar with a 9.16 CGPA, has solved 900+ LeetCode problems with an 800+ days active streak, and is CS50x certified.",
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
        className="fixed bottom-6 right-6 z-[9999] w-13 h-13 rounded-full bg-[var(--accent-primary)] text-[#0B0D0E] flex items-center justify-center shadow-xl hover:scale-105 transition-all duration-200 cursor-pointer group"
        aria-label="Open AI assistant"
      >
        <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-[var(--accent-warm)] rounded-full ring-2 ring-[var(--bg-primary)]"></div>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] w-[90vw] md:w-96 bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-2xl shadow-2xl flex flex-col h-[500px] overflow-hidden">
      {/* Header */}
      <div className="bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)] p-4 flex justify-between items-center text-[var(--text-highlight)]">
        <div>
          <h3 className="font-display font-semibold text-base">Engineering Assistant</h3>
          <p className="text-[11px] font-mono text-[var(--text-muted)]">Portfolio Knowledge Base</p>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1.5 rounded-lg hover:bg-[var(--bg-card)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
        >
          <X className="h-4 w-4" />
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
              className={`max-w-[80%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-[var(--accent-primary)] text-[#0B0D0E] font-medium rounded-br-none'
                  : 'bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-subtle)] rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] px-4 py-3 rounded-xl rounded-bl-none">
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
      <div className="p-3 border-t border-[var(--border-subtle)] bg-[var(--bg-card)]">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask about projects, stack, background..."
            className="flex-1 px-3.5 py-2 border border-[var(--border-subtle)] rounded-lg bg-[var(--bg-secondary)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm focus:outline-none focus:border-[var(--accent-primary)] transition-all"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="p-2 bg-[var(--accent-primary)] text-[#0B0D0E] rounded-lg hover:bg-[var(--accent-secondary)] transition-all disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <Loader className="h-4 w-4 animate-spin" />
            ) : (
              <Send className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}