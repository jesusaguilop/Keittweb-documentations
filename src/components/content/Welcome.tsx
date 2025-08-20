import { FileText, BookOpen, Wrench, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ContentWrapper } from "./ContentWrapper";

export default function Welcome() {
  return (
    <ContentWrapper title="Bienvenido a la Documentación de KeittWeb">
      <p>
        Este es el centro de documentación oficial para el proyecto KeittWeb. Aquí encontrará toda la información necesaria para instalar, desarrollar y utilizar la aplicación de manera efectiva.
      </p>
      <p>
        Utilice el menú de navegación a la izquierda para explorar los diferentes manuales. Cada manual está diseñado para un público específico:
      </p>

      <div className="grid md:grid-cols-3 gap-6 pt-8">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <BookOpen className="w-8 h-8 text-primary" />
            <CardTitle className="font-headline text-2xl">Instalación</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Guías paso a paso para desplegar KeittWeb en un servidor y configurarlo para producción.</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Wrench className="w-8 h-8 text-primary" />
            <CardTitle className="font-headline text-2xl">Técnico</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Explicaciones detalladas sobre la arquitectura, estructura del código y procesos internos.</p>
          </CardContent>
        </Card>
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex flex-row items-center gap-4">
            <Users className="w-8 h-8 text-primary" />
            <CardTitle className="font-headline text-2xl">Usuario</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Instrucciones claras sobre cómo usar cada módulo y funcionalidad de la aplicación.</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 p-6 bg-muted/50 rounded-lg border border-primary/20">
        <h3 className="font-headline text-2xl mb-2 flex items-center gap-3"><FileText className="w-6 h-6"/>¡Comience a explorar!</h3>
        <p className="text-foreground/80">
          Seleccione una sección del menú lateral para comenzar. Si es nuevo en el proyecto, le recomendamos empezar por el <strong>Manual de Instalación</strong>.
        </p>
      </div>
    </ContentWrapper>
  );
}
