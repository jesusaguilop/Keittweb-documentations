import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="px-6 pb-4">
      <Separator className="my-4" />
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} KeittWeb. Todos los derechos reservados.</p>
        <p>Contacto: <a href="mailto:soporte@keittweb.com" className="hover:text-primary transition-colors">soporte@keittweb.com</a></p>
      </div>
    </footer>
  );
}
