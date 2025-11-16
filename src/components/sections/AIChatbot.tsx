'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X } from 'lucide-react';

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);

  const responses = [
    "Hi! I'm Ujjwal's AI assistant. Ask me about his projects!",
    "He built an AI-powered OMR scanner using OpenCV!",
    "His DSA Visualizer helps students learn algorithms interactively.",
    "He uses React, Node.js, and Python for full-stack development.",
    "You can contact him at prajapatiujjwal0802@gmail.com!",
  ];

  const [messages, setMessages] = useState([
    { text: "Hello! How can I help you?", sender: "ai" },
  ]);

  const handleSend = () => {
    const randomMsg = responses[Math.floor(Math.random() * responses.length)];
    setMessages([...messages, { text: randomMsg, sender: "ai" }]);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        aria-label="Open AI assistant"
      >
        <MessageCircle className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-20 right-6 w-80 bg-background border rounded-lg shadow-xl flex flex-col h-96">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-semibold">Ujjwal's AI Assistant</h3>
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
          <X className="h-4 w-4" />
        </Button>
      </div>
      <div className="flex-1 p-4 overflow-y-auto space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`text-sm p-2 rounded-lg max-w-[80%] ${
              msg.sender === 'ai'
                ? 'bg-muted ml-auto'
                : 'bg-primary text-primary-foreground mr-auto'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <Button className="w-full" onClick={handleSend}>
          Ask Something
        </Button>
      </div>
    </div>
  );
}