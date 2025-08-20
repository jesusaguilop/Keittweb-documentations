"use client"

import * as React from "react"
import { Check, Clipboard } from "lucide-react"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"

export function CodeBlock({ children }: { children: React.ReactNode }) {
  const { toast } = useToast()
  const [hasCopied, setHasCopied] = React.useState(false)

  const onCopy = () => {
    if (typeof children === "string") {
      navigator.clipboard.writeText(children)
      setHasCopied(true)
      toast({
        title: "Copiado!",
        description: "El comando se ha copiado al portapapeles.",
      })
      setTimeout(() => {
        setHasCopied(false)
      }, 2000)
    }
  }

  return (
    <div className="relative my-4">
      <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
        <code className="font-code text-muted-foreground">{children}</code>
      </pre>
      <Button
        size="icon"
        variant="ghost"
        className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:bg-muted-foreground/10 hover:text-foreground"
        onClick={onCopy}
      >
        {hasCopied ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
        <span className="sr-only">Copiar código</span>
      </Button>
    </div>
  )
}
