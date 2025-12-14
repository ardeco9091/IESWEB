import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Send } from "lucide-react";

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validación básica
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos requeridos.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Por favor ingresa un email válido.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Simular envío (aquí se integraría con el servicio de email)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    // Limpiar formulario
    setFormData({
      name: "",
      email: "",
      organization: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Card className="p-8 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            Nombre completo <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Tu nombre"
            data-testid="input-name"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="tu@email.com"
            data-testid="input-email"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="organization">Organización</Label>
          <Input
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Nombre de tu institución o empresa"
            data-testid="input-organization"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">
            Mensaje <span className="text-destructive">*</span>
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Cuéntanos sobre tu proyecto o consulta..."
            className="min-h-[150px]"
            data-testid="textarea-message"
            required
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary text-primary-foreground font-bold"
          disabled={isSubmitting}
          data-testid="button-submit-contact"
        >
          {isSubmitting ? (
            "Enviando..."
          ) : (
            <>
              Enviar mensaje
              <Send className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </Card>
  );
}
