# AI Chatbot Quick Reference

## How the Chatbot Works

The AI chatbot is implemented in `src/components/ui/ai-chatbot.tsx` and is automatically integrated into your portfolio layout.

### Features:

1. **Floating Button**
   - Located in bottom-right corner of the page
   - Shows online status (green dot)
   - Hovers to reveal tooltip

2. **Chat Window**
   - Opens/closes with smooth animations
   - Displays message history
   - Auto-scrolls to latest message

3. **Smart Responses**
   - Responds to keywords:
     - "projects" → Lists all your projects
     - "skills" → Describes your tech stack
     - "experience" → Shares your background
     - "contact" → Provides contact information
     - "ai" → Discusses AI/ML work
     - "education" → Details education background

4. **User Experience**
   - Typing indicators with bouncing animation
   - Message timestamps
   - Keyboard support (Enter to send)
   - Loading states
   - Smooth animations

## Customization

### Adding New Responses

Edit the `predefinedResponses` object in `ai-chatbot.tsx`:

```typescript
const predefinedResponses: { [key: string]: string } = {
  'projects': "Your response here...",
  'skills': "Your response here...",
  'your-keyword': "Your custom response here..."
};
```

### Styling the Chatbot

The chatbot uses Tailwind CSS classes:
- Header: Gradient background (`from-blue-600 to-purple-600`)
- Messages: Different styles for user (blue) and AI (light)
- Buttons: Gradient with hover effects

### Integrating with Real API

To connect to a real AI service (GPT, Claude, etc.):

```typescript
const handleSend = async () => {
  // ... existing code ...
  
  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });
    
    const data = await response.json();
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: data.response,
      sender: 'ai',
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, aiMessage]);
  } catch (error) {
    console.error('Error:', error);
  }
};
```

## API Integration Steps

1. **Create API Route** (`app/api/chat/route.ts`):
```typescript
export async function POST(request: Request) {
  const { message } = await request.json();
  
  // Call your AI service here
  const response = await callAIService(message);
  
  return Response.json({ response });
}
```

2. **Update Chatbot** to call the API instead of using predefined responses

3. **Add Environment Variables**:
```
.env.local
NEXT_PUBLIC_API_KEY=your_api_key_here
```

## Performance Tips

- The chatbot doesn't load until clicked (lazy loading)
- Messages are stored in local state
- Typing delay (500ms) creates natural feel
- Smooth animations don't block main thread

## File Structure

```
src/
├── components/
│   └── ui/
│       └── ai-chatbot.tsx  ← Main chatbot component
└── app/
    └── layout.tsx  ← Chatbot is rendered here
```

## Future Enhancements

- [ ] Message persistence (localStorage)
- [ ] Real AI integration
- [ ] Voice input/output
- [ ] Sentiment analysis
- [ ] User feedback rating
- [ ] Analytics tracking
- [ ] Typing animations
- [ ] Conversation export

## Troubleshooting

**Chatbot not showing?**
- Ensure `<AIChatbot />` is in your layout.tsx

**Responses not working?**
- Check the keyword matches in `predefinedResponses`
- Keywords are case-insensitive

**Animations choppy?**
- Check GPU acceleration in browser DevTools
- Verify Framer Motion is installed

**Messages not scrolling?**
- Check `messagesEndRef` ref is properly attached

## API Endpoint Recommendations

For production, consider:
- **OpenAI GPT-3.5/4**: Most capable, costs per token
- **Hugging Face**: Free tier available, good for prototyping
- **Anthropic Claude**: Great for conversation, via API
- **Google PaLM**: Free tier, good alternatives
- **Local LLM**: Run locally with Ollama (free)

## Security Considerations

- Never expose API keys in frontend code
- Use environment variables for sensitive data
- Rate limit API calls from backend
- Sanitize user input
- Log interactions for debugging

---

Last Updated: November 16, 2025
