import { Button } from "@/components/ui/button"
import { useI18n } from "@/context/I18nContext"
import { Download, Presentation, Video } from "lucide-react"

interface AdditionalResourcesProps {
  pdfUrl: string;
  videoUrl?: string;
  canvaUrl?: string;
}

export function AdditionalResources({ pdfUrl, videoUrl, canvaUrl }: AdditionalResourcesProps) {
  const { t } = useI18n();

  return (
    <section className="mt-12 p-6 bg-muted/50 rounded-lg border border-primary/20">
      <h3 className="font-headline text-2xl mb-4">{t('additionalResourcesTitle')}</h3>
      <div className="flex flex-col sm:flex-row gap-3">
        {canvaUrl && (
            <Button variant="secondary" asChild>
            <a href={canvaUrl} target="_blank" rel="noopener noreferrer">
                <Presentation className="mr-2 h-4 w-4" /> {t('modalViewCanva')}
            </a>
            </Button>
        )}
        {videoUrl && (
            <Button variant="secondary" asChild>
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
                <Video className="mr-2 h-4 w-4" /> {t('modalViewVideo')}
            </a>
            </Button>
        )}
        <Button variant="outline" asChild>
        <a href={pdfUrl} download>
            <Download className="mr-2 h-4 w-4" /> {t('modalDownloadPDF')}
        </a>
        </Button>
      </div>
    </section>
  )
}
