<div align="center">

  # IES Nº 9 Juana Azurduy
  ### Tecnología y Futuro Laboral

  <p>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
    <img src="https://img.shields.io/badge/Render-46E3B7?style=for-the-badge&logo=render&logoColor=white" alt="Render" />
  </p>

  <p>
    <a href="https://iesweb.onrender.com">
      <img src="https://img.shields.io/badge/🌐_Visitar_Sitio_Web-000000?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Website" />
    </a>
  </p>

</div>
# 🌐 IESWEB

IESWEB es un **proyecto académico** que consiste en una **página web institucional para un Instituto de Educación Superior**, la cual integra un **chatbot con Inteligencia Artificial** capaz de informar a los usuarios sobre:

- 📚 Las materias y planes de estudio  
- 🎓 Las carreras ofrecidas  
- 💼 Las salidas laborales asociadas a cada formación  

El objetivo principal del proyecto es **mejorar la orientación académica** y la experiencia del usuario mediante el uso de tecnologías web modernas e IA conversacional.

🔗 **Proyecto desplegado:**  
https://iesweb.onrender.com

---

## 🎯 Objetivos del proyecto

- Desarrollar una web institucional moderna y responsiva  
- Integrar un chatbot con IA para atención informativa automatizada  
- Facilitar el acceso a información académica y vocacional  
- Aplicar buenas prácticas de desarrollo web full-stack  
- Consolidar conocimientos adquiridos en el ámbito académico

---

## 🤖 Chatbot con IA

El chatbot permite a los usuarios:
- Consultar información sobre materias
- Conocer perfiles profesionales y salidas laborales
- Obtener orientación rápida sin navegar manualmente por el sitio

Este componente simula un **asistente virtual institucional**, enfocado en la comunicación clara y accesible.

---

## 🧠 Tecnologías utilizadas

### Frontend
- **TypeScript**
- **Vite**
- **TailwindCSS**
- HTML5
- CSS3

### Backend
- **Node.js**
- JavaScript / TypeScript
- API para gestión de lógica y comunicación con el chatbot

### Base de datos
- Configuración mediante **Drizzle ORM**

### Herramientas adicionales
- Git & GitHub
- npm
- Render (despliegue)
- ESLint / configuración TypeScript

---

## 🗂️ Estructura del proyecto

```

IESWEB/
├── attached_assets/          → Recursos gráficos y archivos estáticos
├── client/                   → Frontend de la aplicación
├── server/                   → Backend y lógica del servidor
├── shared/                   → Código y tipos compartidos
├── design_guidelines.md      → Lineamientos de diseño UI/UX
├── drizzle.config.ts         → Configuración de base de datos
├── tailwind.config.ts        → Configuración de TailwindCSS
├── tsconfig.json             → Configuración de TypeScript
├── vite.config.ts            → Configuración de Vite
├── package.json              → Dependencias y scripts
└── README.md                 → Documentación del proyecto

````

---

## ⚙️ Instalación y ejecución local

> ⚠️ **Nota:** Este proyecto fue desarrollado con fines académicos.  
> Si no estás familiarizado con la ejecución de proyectos full-stack, los pasos siguientes son orientativos.

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/ardeco9091/IESWEB.git
cd IESWEB
````

### 2️⃣ Instalar dependencias

Desde la raíz del proyecto:

```bash
npm install
```

Si el frontend y backend se ejecutan por separado:

```bash
cd client
npm install

cd ../server
npm install
```

### 3️⃣ Ejecutar el proyecto en modo desarrollo

```bash
npm run dev
```

O bien, en forma separada:

```bash
# Frontend
cd client
npm run dev

# Backend
cd server
npm start
```

---

## 🧪 Pruebas

Actualmente el proyecto **no incluye pruebas automatizadas**, aunque está preparado para incorporar frameworks como:

* Jest
* Vitest
* Testing Library

---

## 📦 Despliegue

El proyecto se encuentra desplegado en **Render**, utilizando un flujo estándar de build y start.

🔗 URL pública:
[https://iesweb.onrender.com](https://iesweb.onrender.com)

---

## 📚 Contexto académico

* Tipo de proyecto: **Académico**
* Enfoque: Desarrollo Web + Inteligencia Artificial
* Área: Sistemas / Programación / Tecnología Educativa
* Nivel: Formación técnica o universitaria

---

## 🛡️ Buenas prácticas aplicadas

* Arquitectura cliente / servidor
* Código tipado con TypeScript
* Separación de responsabilidades
* Diseño responsivo
* Uso de herramientas modernas del ecosistema web

---

## 🚧 Mejoras futuras (Roadmap)

* [ ] Persistencia de conversaciones del chatbot
* [ ] Panel administrativo para editar materias
* [ ] Mejora del modelo de IA conversacional
* [ ] Autenticación de usuarios
* [ ] Implementación de tests automatizados

---

## 📄 Licencia

Este proyecto se distribuye bajo la **Licencia MIT**.
Consulta el archivo `LICENSE` para más información.

---

## 👤 Autor

**ardeco9091**
Proyecto académico – Desarrollo Web
GitHub: [https://github.com/ardeco9091](https://github.com/ardeco9091)

---

## 🤝 Contribuciones

Este proyecto fue realizado con fines educativos.
Las sugerencias, mejoras o aportes son bienvenidos mediante **Issues** o **Pull Requests**.



