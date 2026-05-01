Portafolio personal desarrollado como proyecto evaluativo para la materia **Ingeniería Web**, implementado con Next.js, TypeScript y TailwindCSS, y desplegado en Vercel.

---

## 🚀 Demo en vivo

🔗 [...](https://juanpablo-ramosvelez-portafolio-d4al4aloz.vercel.app/)

---

## 🛠️ Tecnologías utilizadas

- **Next.js 14** – Framework de React con App Router
- **TypeScript** – Tipado estático
- **TailwindCSS** – Estilos utilitarios
- **Lucide React** – Íconos
- **Vercel** – Despliegue y hosting

---

## 📂 Estructura del proyecto

```
app/
├── components/
│   ├── atoms/          # Componentes básicos reutilizables
│   │   ├── Button.tsx
│   │   ├── ProgressBar.tsx
│   │   └── SocialIcon.tsx
│   ├── molecules/      # Combinación de átomos
│   │   ├── KnowledgeCard.tsx
│   │   ├── EducationCard.tsx
│   │   ├── PortfolioCard.tsx
│   │   └── Modal.tsx
│   ├── organisms/      # Secciones completas de la página
│   │   ├── LeftSidebar.tsx
│   │   ├── RightSidebar.tsx
│   │   ├── ProfileSection.tsx
│   │   ├── KnowledgeSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── PortfolioSection.tsx
│   │   └── Footer.tsx
│   └── templates/
│       └── PageLayout.tsx
├── globals.css
├── layout.tsx
└── page.tsx
```

La estructura sigue la metodología **Atomic Design**, organizando los componentes desde los más simples (átomos) hasta las secciones completas (organismos).

---

## ▶️ Cómo ejecutar el proyecto localmente

### Prerrequisitos

- Node.js 18 o superior
- npm o yarn

### Pasos

1. Clona el repositorio:
```bash
git clone https://github.com/202601-Ingenieria-Web/juanpablo-ramosvelez-portafolio
```

2. Entra a la carpeta del proyecto:
```bash
cd juanpablo-ramosvelez-portafolio
```

3. Instala las dependencias:
```bash
npm install
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

5. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📦 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la versión de producción |
| `npm run start` | Inicia la versión de producción |
| `npm run lint` | Ejecuta el linter |

---

## 🧩 Componentes principales

- **ProgressBar** – Muestra el nivel de dominio de idiomas y lenguajes de programación. Recibe `label` y `percentage` como props.
- **Modal** – Diálogo reutilizable usado en la sección de Perfil y en cada card del Portafolio.
- **KnowledgeCard** – Card con ícono, título y descripción para la sección de conocimientos.
- **EducationCard** – Card con institución, rol, período y descripción para el historial educativo.
- **PortfolioCard** – Card con imagen, título, descripción corta y botón "Learn More" que abre un modal con detalles del proyecto.

---

## 👨‍💻 Autor

**Juan Pablo Ramos Velez**  
Estudiante de Ingeniería de Sistemas  
Universidad de Antioquia

---
