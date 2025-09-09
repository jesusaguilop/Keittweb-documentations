"use client";

import { getAssistantResponse } from '@/ai/flows/assistantFlow';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useI18n } from '@/context/I18nContext';
import { cn } from '@/lib/utils';
import { Bot, Loader2, Send, User, X } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

interface Message {
    id: string;
    text: string;
    from: 'user' | 'bot';
}

interface AIAssistantProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
    const { t } = useI18n();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollAreaRef = useRef<HTMLDivElement>(null);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { id: Date.now().toString(), text: input, from: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await getAssistantResponse({ query: input });
            const botMessage: Message = { id: (Date.now() + 1).toString(), text: response.answer, from: 'bot' };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            const errorMessage: Message = { 
                id: (Date.now() + 1).toString(), 
                text: t('assistantError'), 
                from: 'bot' 
            };
            setMessages(prev => [...prev, errorMessage]);
            console.error("Error getting assistant response:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (scrollAreaRef.current) {
            scrollAreaRef.current.scrollTo({ top: scrollAreaRef.current.scrollHeight, behavior: 'smooth' });
        }
    }, [messages]);

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-20 right-6 w-full max-w-sm h-[60vh] bg-card border rounded-lg shadow-xl z-50 flex flex-col animate-in slide-in-from-bottom-5 fade-in-50 duration-300">
            <header className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                    <Bot className="h-6 w-6 text-primary" />
                    <h3 className="font-headline text-lg">{t('assistantTitle')}</h3>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose}>
                    <X className="h-5 w-5" />
                    <span className="sr-only">{t('close')}</span>
                </Button>
            </header>

            <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                <div className="space-y-4">
                    {messages.map(msg => (
                        <div key={msg.id} className={cn("flex items-start gap-3", msg.from === 'user' ? "justify-end" : "justify-start")}>
                            {msg.from === 'bot' && <Avatar_ from="bot" />}
                            <div className={cn("p-3 rounded-lg max-w-xs break-words text-sm", msg.from === 'user' ? "bg-primary text-primary-foreground" : "bg-muted")}>
                                <p>{msg.text}</p>
                            </div>
                            {msg.from === 'user' && <Avatar_ from="user" />}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="flex items-start gap-3 justify-start">
                            <Avatar_ from="bot" />
                            <div className="p-3 rounded-lg bg-muted">
                                <Loader2 className="h-5 w-5 animate-spin" />
                            </div>
                        </div>
                    )}
                </div>
            </ScrollArea>
            
            <footer className="p-4 border-t">
                <div className="flex items-center gap-2">
                    <Input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && !isLoading && handleSend()}
                        placeholder={t('assistantPlaceholder')}
                        disabled={isLoading}
                        aria-label={t('assistantPlaceholder')}
                    />
                    <Button onClick={handleSend} disabled={isLoading} size="icon">
                        <Send className="h-5 w-5" />
                        <span className="sr-only">{t('send')}</span>
                    </Button>
                </div>
            </footer>
        </div>
    );
}

const Avatar_ = ({ from }: { from: 'user' | 'bot' }) => (
    <div className={cn("h-8 w-8 rounded-full flex items-center justify-center shrink-0", from === 'user' ? 'bg-secondary text-secondary-foreground' : 'bg-primary text-primary-foreground')}>
        {from === 'user' ? <User className="h-5 w-5" /> : <Bot className="h-5 w-5" />}
    </div>
)
