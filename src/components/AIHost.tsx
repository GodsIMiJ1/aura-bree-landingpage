import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Mic, MicOff, MessageCircle, X, Volume2, VolumeX } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

// Web Speech API types
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

const AIHost: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  
  const { toast } = useToast();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    // Initialize speech recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputText(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
        toast({
          title: "Voice Recognition Error",
          description: "Please try speaking again or use text input.",
          variant: "destructive",
        });
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    // Welcome message when opened
    if (isOpen && messages.length === 0) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Hello, I'm Dr. AURA, your clinical AI host for AURA-BREE Sovereign Healthcare Systems. How may I assist you in understanding our revolutionary healthcare sovereignty platform?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages([welcomeMessage]);
      
      if (voiceEnabled) {
        speakText(welcomeMessage.text);
      }
    }
  }, [isOpen, messages.length, voiceEnabled, toast]);

  const getCurrentContext = () => {
    const path = window.location.pathname;
    const section = window.location.hash;
    
    if (section) return section.replace('#', '');
    if (path === '/') return 'landing page';
    return path.replace('/', '');
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    try {
      // Call OpenAI API directly
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            {
              role: 'system',
              content: `You are Dr. AURA, the clinical AI host for AURA-BREE Sovereign Healthcare Systems. You are a professional, knowledgeable healthcare technology advisor who helps visitors understand our revolutionary sovereign healthcare platform.

Your personality:
- Clinical and professional, yet approachable
- Deeply knowledgeable about healthcare privacy, sovereignty, and technology
- Confident in AURA-BREE's capabilities
- Focused on patient data sovereignty and privacy protection
- Speaks with authority about healthcare technology trends

Your knowledge base:
- AURA-BREE is the world's first sovereign clinical companion system
- We provide healthcare that "heals without harvesting, treats without tracking, cares without collecting"
- Our system ensures complete patient data sovereignty with local-first architecture
- We're seeking $500k in funding with 12-month runway to deployment
- Pembroke Pines deployment is our flagship pilot program
- Our technology includes encrypted neural networks, federated learning, and sovereign data architecture
- We address the $42B addiction treatment market with focus on data sovereignty
- Developed by GodsIMiJ AI Solutions

Guidelines:
- Keep responses concise and professional (2-3 sentences max)
- Focus on benefits to healthcare providers and patients
- Emphasize privacy, sovereignty, and clinical excellence
- Offer to connect visitors with appropriate resources
- Use medical terminology appropriately but remain accessible
- Always maintain patient confidentiality and HIPAA awareness

Available actions you can suggest:
- Schedule a pilot discussion with our founder (james@godsimij-ai-solutions.com)
- Access our live beta system
- Request technical documentation
- Connect with our clinical team
- Learn about investment opportunities`
            },
            {
              role: 'user',
              content: `Context: User is viewing ${getCurrentContext()}. Message: ${text.trim()}`
            }
          ],
          max_tokens: 200,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error(`OpenAI API error: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = data.choices[0].message.content;

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: aiResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, aiMessage]);

      if (voiceEnabled) {
        await speakText(aiResponse);
      }
    } catch (error) {
      console.error('Error sending message:', error);

      // Fallback response if API fails
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "Hello! I'm Dr. AURA, your clinical AI host for AURA-BREE Sovereign Healthcare Systems. I'm currently experiencing connectivity issues, but I'm here to help you learn about our revolutionary patient-controlled healthcare platform. Please feel free to explore our landing page or contact james@godsimij-ai-solutions.com for a pilot discussion.",
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, fallbackMessage]);

      toast({
        title: "Dr. AURA Connection Issue",
        description: "Using offline mode. Full AI features will return shortly.",
        variant: "default",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const speakText = async (text: string) => {
    if (!voiceEnabled || isSpeaking) return;

    setIsSpeaking(true);
    try {
      const { data, error } = await supabase.functions.invoke('ai-host-voice', {
        body: { text },
      });

      if (error) throw error;

      const audioBlob = new Blob([
        Uint8Array.from(atob(data.audioContent), c => c.charCodeAt(0))
      ], { type: 'audio/mpeg' });
      
      const audioUrl = URL.createObjectURL(audioBlob);
      
      if (audioRef.current) {
        audioRef.current.src = audioUrl;
        audioRef.current.onended = () => {
          setIsSpeaking(false);
          URL.revokeObjectURL(audioUrl);
        };
        await audioRef.current.play();
      }
    } catch (error) {
      console.error('Error with text-to-speech:', error);
      setIsSpeaking(false);
    }
  };

  const startListening = () => {
    if (!recognitionRef.current) {
      toast({
        title: "Voice Recognition Unavailable",
        description: "Please use text input instead.",
        variant: "destructive",
      });
      return;
    }

    setIsListening(true);
    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputText);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[90vw]">
      <Card className="bg-background/95 backdrop-blur-sm border shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Dr. AURA</h3>
              <p className="text-xs text-muted-foreground">Clinical AI Host</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              className="p-1 h-8 w-8"
            >
              {voiceEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="p-1 h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xs rounded-lg px-3 py-2 text-sm ${
                  message.isUser
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-foreground'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg px-3 py-2 text-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-primary/60 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 border-t">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about AURA-BREE..."
              disabled={isLoading || isListening}
              className="flex-1"
            />
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={isListening ? stopListening : startListening}
              disabled={isLoading}
              className="shrink-0"
            >
              {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
            </Button>
            <Button type="submit" disabled={!inputText.trim() || isLoading} size="sm">
              Send
            </Button>
          </form>
        </div>
      </Card>

      <audio ref={audioRef} className="hidden" />
    </div>
  );
};

export default AIHost;