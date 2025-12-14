import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ContactForm } from "@/components/contact-form";
import {
  ArrowRight,
  Brain,
  Users,
  Shield,
  Lightbulb,
  TrendingUp,
  BookOpen,
} from "lucide-react";
import { useLocation } from "wouter";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [, setLocation] = useLocation();
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set(),
  );
  const observerRef = useRef<IntersectionObserver | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // REEMPLAZA TU USEEFFECT COMPLETO POR ESTE
  useEffect(() => {
    // ---- INICIO: Lógica para el ancla (#contacto) ----
    let temporizador; // Variable para guardar el timer

    if (window.location.hash) {
      const id = window.location.hash.substring(1); // Obtiene "contacto"

      // Damos un pequeño respiro (100ms)
      temporizador = setTimeout(() => {
        const elemento = document.getElementById(id);
        if (elemento) {
          elemento.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    // ---- FIN: Lógica para el ancla ----

    // ---- INICIO: Tu lógica original (IntersectionObserver) ----
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 },
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => {
      if (observerRef.current) {
        observerRef.current.observe(section);
      }
    });
    // ---- FIN: Tu lógica original ----

    // ---- INICIO: Función de LIMPIEZA COMBINADA ----
    return () => {
      // Limpieza del timer (para el ancla)
      if (temporizador) {
        clearTimeout(temporizador);
      }

      // Limpieza de tu observer (para las animaciones)
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
    // ---- FIN: Función de LIMPIEZA ----
  }, []); // El array vacío se mantiene, para que se ejecute 1 sola vez

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#001F3F]/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-3">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollToSection("inicio")}
              className="font-heading text-base md:text-xl font-bold text-white hover-elevate px-2 md:px-3 py-2 rounded-lg transition-all"
              data-testid="link-home"
            >
              IES Nº 9
            </button>
            <div className="flex flex-wrap items-center justify-end gap-0.5 md:gap-2">
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white text-[10px] md:text-sm px-2 md:px-3"
                onClick={() => scrollToSection("metricas")}
                data-testid="link-metrics"
              >
                Métricas
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white text-[10px] md:text-sm px-2 md:px-3"
                onClick={() => scrollToSection("tecnologia")}
                data-testid="link-technology"
              >
                Tecnología
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white text-[10px] md:text-sm px-2 md:px-3"
                onClick={() => scrollToSection("portafolio")}
                data-testid="link-portfolio"
              >
                Portafolio
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white text-[10px] md:text-sm px-2 md:px-3"
                onClick={() => scrollToSection("contacto")}
                data-testid="link-contact"
              >
                Contacto
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-white hover:text-white text-[10px] md:text-sm px-2 md:px-3"
                onClick={() => setLocation("/acerca")}
                data-testid="link-about"
              >
                Acerca
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        id="inicio"
        className="relative bg-gradient-to-br from-[#001F3F] via-[#002855] to-[#001F3F] text-white pt-24 scroll-mt-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 lg:py-32">
          {/* Logo */}
          <div className="mb-12">
            <h1 className="font-heading text-2xl md:text-3xl font-bold tracking-tight">
              IES Nº 9 Juana Azurduy
            </h1>
            <div className="h-1 w-24 bg-primary mt-2 rounded-full"></div>
          </div>

          {/* Hero Content */}
          <div className="max-w-4xl">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Tecnología, educación e innovación para el futuro del trabajo
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl leading-relaxed">
              Acompañamos a instituciones y equipos a integrar inteligencia
              artificial y herramientas digitales con enfoque humano, ético y
              medible.
            </p>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground font-bold text-base px-8 py-6 rounded-xl"
              onClick={() => scrollToSection("contacto")}
              data-testid="button-schedule-consultation"
            >
              Agendar consulta
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      {/* KPIs Section */}
      <section
        id="metricas"
        className={`py-16 md:py-24 bg-background scroll-mt-20 transition-all duration-700 ${
          visibleSections.has("metricas")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card
              className="p-8 hover-elevate transition-all duration-300"
              data-testid="card-kpi-1"
            >
              <div className="space-y-4">
                <div
                  className="font-heading text-5xl md:text-6xl font-extrabold text-primary"
                  data-testid="text-kpi-value-1"
                >
                  37%
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  de tareas administrativas pueden automatizarse en educación.
                </p>
              </div>
            </Card>

            <Card
              className="p-8 hover-elevate transition-all duration-300"
              data-testid="card-kpi-2"
            >
              <div className="space-y-4">
                <div
                  className="font-heading text-5xl md:text-6xl font-extrabold text-primary"
                  data-testid="text-kpi-value-2"
                >
                  60%
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  de empleos incorporarán IA como apoyo en la próxima década.
                </p>
              </div>
            </Card>

            <Card
              className="p-8 hover-elevate transition-all duration-300"
              data-testid="card-kpi-3"
            >
              <div className="space-y-4">
                <div
                  className="font-heading text-5xl md:text-6xl font-extrabold text-primary"
                  data-testid="text-kpi-value-3"
                >
                  3x
                </div>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  mejora en tiempos de diseño curricular con flujos asistidos.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section
        id="tecnologia"
        className={`py-16 md:py-24 bg-card/30 scroll-mt-20 transition-all duration-700 ${
          visibleSections.has("tecnologia")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Tecnología
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div
              className="space-y-4"
              data-testid="section-technology-learning"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                Aprendizaje automatizado
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Recomendación y evaluación adaptativa.
              </p>
            </div>

            <div className="space-y-4" data-testid="section-technology-tools">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                Herramientas en el aula
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Flujos de trabajo prácticos y accesibles.
              </p>
            </div>

            <div className="space-y-4" data-testid="section-technology-ethics">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                Ética y transformación
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Privacidad, sesgos y políticas de uso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portafolio"
        className={`py-16 md:py-24 bg-background scroll-mt-20 transition-all duration-700 ${
          visibleSections.has("portafolio")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
            Portafolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <Card
              className="p-8 hover-elevate transition-all duration-300"
              data-testid="card-portfolio-1"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Lightbulb className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  IA en el aula
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Pilotaje de herramientas de apoyo docente.
                </p>
              </div>
            </Card>

            <Card
              className="p-8 hover-elevate transition-all duration-300"
              data-testid="card-portfolio-2"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Aprendizaje adaptativo
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Rutas personalizadas por desempeño.
                </p>
              </div>
            </Card>

            <Card
              className="p-8 hover-elevate transition-all duration-300"
              data-testid="card-portfolio-3"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  Simulación cognitiva
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Talleres de razonamiento asistido.
                </p>
              </div>
            </Card>
          </div>
        </div>

        <h3 className="font-heading text-xl font-bold text-foreground"></h3>
      </section>

      {/* Video Section */}
      <section className="py-16 md:py-24 flex justify-center">
        <video width="640" height="360" controls>
          <source src="/mi_video.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
      </section>

      {/* Contact Section */}
      <section
        id="contacto"
        className={`py-16 md:py-24 bg-card/30 scroll-mt-20 transition-all duration-700 ${
          visibleSections.has("contacto")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Contacto
            </h2>
            <p className="text-lg md:text-xl text-foreground mb-6 leading-relaxed">
              Escríbenos y conversemos cómo te podes inscribir a la carrera de
              Big Data asegurando tu Futuro Laboral con enfoque humano, ético y
              responsable.
            </p>
            <p
              className="text-xl md:text-2xl font-heading font-semibold text-primary italic mb-8"
              data-testid="text-quote"
            >
              El futuro se diseña, no se espera.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer
        id="footer"
        className="bg-[#0f172a] text-gray-300 py-12 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center">
            <p className="text-base" data-testid="text-copyright">
              © IES Nº 9 Juana Azurduy – Tecnología y Futuro Laboral
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
