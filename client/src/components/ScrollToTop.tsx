import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Este componente escucha los cambios de ruta
 * y automáticamente hace scroll al inicio de la página.
 */
const ScrollToTop = () => {
  const [location] = useLocation();

  useEffect(() => {
    // Sube al inicio de la página cada vez que 'location' cambia
    window.scrollTo(0, 0);
  }, [location]); // Se ejecuta cada vez que la 'location' cambia

  return null; // No renderiza nada en la pantalla
};

export default ScrollToTop;
