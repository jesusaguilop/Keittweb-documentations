import * as React from "react"
import { cn } from "@/lib/utils"

interface ContentWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}

export function ContentWrapper({ title, children, className, ...props }: ContentWrapperProps) {
  return (
    <div className={cn("w-full max-w-4xl mx-auto", className)} {...props}>
      <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground border-b border-border/80 pb-4 mb-6 md:mb-8">
        {title}
      </h1>
      <div className="text-foreground/90 space-y-6 font-body text-base md:text-lg leading-relaxed">
        {children}
      </div>
    </div>
  )
}

export function ContentSection({ title, id, children, className, ...props }: { title: string, id: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section id={id} className={cn("py-4 md:py-6 space-y-4 scroll-mt-20", className)} {...props}>
      <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground border-b border-border/50 pb-2">
        {title}
      </h2>
      {children}
    </section>
  )
}

export function ContentSubSection({ title, id, children, className, ...props }: { title: string, id: string } & React.HTMLAttributes<HTMLDivElement>) {
    return (
      <section id={id} className={cn("py-3 md:py-4 space-y-3 scroll-mt-20", className)} {...props}>
        <h3 className="font-headline text-xl md:text-2xl font-bold text-foreground">
          {title}
        </h3>
        {children}
      </section>
    )
  }