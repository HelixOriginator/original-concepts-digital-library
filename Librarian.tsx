import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from './types';
import { SAMPLE_ARTICLES } from './data';

const LIBRARIAN_SYSTEM_INSTRUCTION = `
You are the Head Librarian of the Athena Digital Archive, a prestigious digital library.
Your tone is helpful, sophisticated, and academic but accessible. You are not a generic AI; you are a curator.
You have access to the following library catalog (summarized):
${SAMPLE_ARTICLES.map(a => `- "${a.title}" by Author ID ${a.authorId} (Category: ${a.category}): ${a.summary}`).join('\n')}

When a user asks a question:
1. If it relates to the library content, recommend specific articles from the catalog.
2. If it is a general knowledge question, answer it but try to tie it back to the themes of the library (History, Tech, Arts).
3. Keep answers concise (under 150 words) unless asked for more detail.
`;

export default function Librarian() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am the Archive Librarian. How may I assist your research today?', timestamp: new Date() }
  ]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input, timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          systemInstruction: LIBRARIAN_SYSTEM_INSTRUCTION,
        }
      });

      const text = response.text || "I apologize, I am having trouble retrieving that volume from the stacks.";
      setMessages(prev => [...prev, { role: 'model', text, timestamp: new Date() }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: 'model', text: "The archive connection seems to be unstable. Please try again later.", timestamp: new Date() }]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 h-14 w-14 bg-library-800 text-white rounded-full shadow-xl flex items-center justify-center hover:bg-library-700 transition-all hover:scale-105 z-50"
        aria-label="Open Librarian Chat"
      >
        <span className="material-symbols-outlined text-3xl">auto_stories</span>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[90vw] h-[500px] bg-white rounded-lg shadow-2xl border border-library-200 flex flex-col z-50 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-library-800 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">smart_toy</span>
              <div>
                <h3 className="font-serif font-bold text-sm">Athena Librarian</h3>
                <p className="text-xs text-library-300">AI Research Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-library-300 hover:text-white">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-library-50 space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-library-600 text-white rounded-br-none' 
                    : 'bg-white border border-library-200 text-library-800 rounded-bl-none shadow-sm'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-white border border-library-200 p-3 rounded-lg rounded-bl-none shadow-sm flex gap-1">
                  <span className="w-2 h-2 bg-library-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-library-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
                  <span className="w-2 h-2 bg-library-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-library-200 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about articles..."
              className="flex-1 border border-library-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-library-500"
            />
            <button 
              onClick={handleSend}
              disabled={isThinking || !input.trim()}
              className="bg-library-800 text-white p-2 rounded-md hover:bg-library-700 disabled:opacity-50 transition-colors"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
