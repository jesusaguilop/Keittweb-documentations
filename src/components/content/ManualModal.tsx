import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/context/I18nContext"
import { Book, Download, Presentation, Video } from "lucide-react"

interface ManualModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onViewDocs: () => void;
  pdfUrl: string;
  videoUrl?: string;
  canvaUrl?: string;
}

export function ManualModal({ isOpen, onClose, title, description, onViewDocs, pdfUrl, videoUrl, canvaUrl }: ManualModalProps) {
  const { t } = useI18n();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl text-center">{title}</DialogTitle>
          <DialogDescription className="text-center pt-2">
            {description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col sm:flex-col sm:justify-center gap-2 pt-4">
          <Button onClick={onViewDocs}>
            <Book className="mr-2 h-4 w-4" /> {t('modalViewDocs')}
          </Button>
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
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
