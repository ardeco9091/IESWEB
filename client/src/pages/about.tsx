import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import { ArrowLeft, Target, Users, Lightbulb, Heart } from "lucide-react";

export default function About() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-gradient-to-br from-[#001F3F] via-[#002855] to-[#001F3F] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <Button
            variant="ghost"
            className="text-white hover:text-white mb-6"
            onClick={() => setLocation("/")}
            data-testid="button-back-home"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Button>
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Acerca de IES Nº 9
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl">
            Transformando la educación a través de la tecnología responsable
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Nuestra Misión
          </h2>
          <Card className="p-8">
            <p className="text-lg text-foreground leading-relaxed mb-4">
              En IES Nº 9 , creemos que la tecnología debe servir a las
              personas, no al revés. Nuestra misión es acompañar al alumno en la
              adopción responsable de herramientas de inteligencia artificial y
              tecnologías digitales.
            </p>
            <p className="text-lg text-foreground leading-relaxed">
              Trabajamos con un enfoque humano, ético y basado en evidencia,
              asegurando que cada implementación tecnológica genere valor real y
              medible para nuestros estudiantes.
            </p>
          </Card>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-8 hover-elevate">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Enfoque en resultados
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Cada proyecto se diseña con métricas claras y objetivos
                medibles, asegurando impacto tangible en la organización.
              </p>
            </Card>

            <Card className="p-8 hover-elevate">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Ética y responsabilidad
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Priorizamos la privacidad, equidad y transparencia en todas
                nuestras soluciones tecnológicas.
              </p>
            </Card>

            <Card className="p-8 hover-elevate">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Enfoque humano
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                La tecnología amplifica capacidades humanas sin reemplazarlas.
                Diseñamos soluciones que empoderan a las personas.
              </p>
            </Card>

            <Card className="p-8 hover-elevate">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                Innovación continua
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Nos mantenemos a la vanguardia de las tecnologías emergentes,
                evaluando críticamente su aplicabilidad y valor.
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <Card className="p-12 bg-gradient-to-br from-card to-card/50">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              ¿Estas listo para transformarte en un profesional?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Conversemos sobre cómo la tecnología puede impulsar tus objetivos
              con un enfoque responsable y medible.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground font-bold"
              onClick={() => setLocation("/#contacto")}
              data-testid="button-contact-cta"
            >
              Agenda una consulta
            </Button>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-gray-300 py-12 mt-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-base">
            © De la Villarmois – Tecnología y Futuro Laboral
          </p>
        </div>
      </footer>
    </div>
  );
}
