"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/context/I18nContext";
import { Bot, X } from "lucide-react";
import { useState } from "react";
import { AIAssistant } from "./AIAssistant";

export default function AssistantButton() {
    const { t } = useI18n();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Button
                size="icon"
                className="fixed bottom-6 right-[calc(3.5rem+1.5rem)] rounded-full shadow-lg z-50 h-14 w-14"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={t('toggleAssistant')}
            >
                {isOpen ? <X className="h-7 w-7" /> : <Bot className="h-7 w-7" />}
            </Button>
            <AIAssistant isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
