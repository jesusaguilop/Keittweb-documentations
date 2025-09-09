"use client";

import { Mail, Phone, UserCircle } from "lucide-react";
import { useI18n } from "@/context/I18nContext";

interface AuthorContactProps {
  author: string;
  email: string;
  phone: string;
}

export function AuthorContact({ author, email, phone }: AuthorContactProps) {
  const { t } = useI18n();

  return (
    <section className="mt-12 p-6 bg-muted/30 rounded-lg border border-primary/20">
      <h3 className="font-headline text-2xl mb-4">{t('authorContactTitle')}</h3>
      <div className="space-y-3 text-sm text-foreground/90">
        <div className="flex items-center gap-3">
          <UserCircle className="h-5 w-5 text-primary" />
          <span>{t('authorContactAuthor')}: {author}</span>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-primary" />
          <span>
            {t('authorContactEmail')}:{" "}
            <a href={`mailto:${email}`} className="text-primary hover:underline">
              {email}
            </a>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-primary" />
          <span>{t('authorContactPhone')}: {phone}</span>
        </div>
        <p className="pt-2 italic text-muted-foreground">{t('authorContactMessage')}</p>
      </div>
    </section>
  );
}