export type Lang = "en" | "es";

export type ProjectMedia =
  | {
      kind: "video";
      provider: "youtube" | "loom";
      id: string;
      title: string;
      /** Optional poster image in /public. YouTube uses its own thumbnail by default. */
      poster?: string;
      /** "landscape" (default, 16:9) or "portrait" (9:16) for mobile demos. */
      aspect?: "landscape" | "portrait";
      /** Shown under the player. Important for silent screen recordings. */
      caption?: string;
    }
  | { kind: "image"; src: string; alt: string; caption?: string };

export type Project = {
  index: string;
  title: string;
  meta: string;
  points: string[];
  tags: string[];
  href?: string;
  media?: ProjectMedia;
};

export type Dict = {
  lang: Lang;
  skip: string;
  status: string;
  role: string;
  location: string;
  headline: string;
  lede: string;
  actions: { email: string; cv: string; github: string };
  cvHref: string;
  railLabel: string;
  sections: { work: string; toolkit: string; about: string; contact: string };
  viewProject: string;
  viewCode: string;
  playVideo: string;
  skillGroups: { label: string; items: string }[];
  about: string[];
  contact: { lede: string; github: string };
  langSwitchLabel: string;
  sectionNav: { label: string; items: { id: string; label: string }[] };
  projects: Project[];
};

export const shared = {
  name: "Daniel Cruz Paredes",
  email: "danielcparedes@hotmail.com",
  github: "https://github.com/dcruzparedes",
  githubLabel: "github.com/dcruzparedes",
  linkedin: "https://www.linkedin.com/in/daniel-cruz-paredes",
};

export const dict: Record<Lang, Dict> = {
  en: {
    lang: "en",
    skip: "Skip to work",
    status: "Available for work",
    role: "Full-stack Developer",
    location: "San Pedro Sula, Honduras",
    headline: "I build web apps - and the pipelines that ship them.",
    lede: "I work in Next.js, NestJS, PostgreSQL and Supabase on the application side, and Docker, GitHub Actions and CI/CD on the deployment side. Available for small, well-scoped projects.",
    actions: {
      email: "Email me",
      cv: "Download CV",
      github: "View GitHub",
    },
    cvHref: "/daniel-cruz-paredes-cv-en.pdf",
    railLabel:
      "Delivery pipeline: commit, build, test, push, deploy — running",
    sections: {
      work: "Selected work",
      toolkit: "Toolkit",
      about: "About",
      contact: "Contact",
    },
    viewProject: "View project",
    viewCode: "View on GitHub",
    playVideo: "Play video",
    skillGroups: [
      {
        label: "Applications",
        items: "React · Next.js · TypeScript · JavaScript · Tailwind CSS",
      },
      {
        label: "Backend",
        items:
          "NestJS · Node.js · Prisma · PostgreSQL · Supabase · SQL · Python",
      },
      {
        label: "Deployment",
        items:
          "Docker · Docker Compose · GitHub Actions · CI/CD · Portainer · Nginx",
      },
      {
        label: "Mobile",
        items: "Kotlin · Android Studio · Room",
      },
      {
        label: "Also worked with",
        items: "Java · C++ · C# · Frappe",
      },
      {
        label: "Languages",
        items: "Spanish (native) · English (fluent)",
      },
    ],
    about: [
      "I'm a Computer Systems Engineering student at UNITEC in San Pedro Sula, Honduras, graduating in December 2027. I like the part of the job most people skip: making software actually run — containers, environments, deployments, pipelines.",
      "I've set up automated deployments for a community project at Corporación MIDAS, built a full-stack platform for a solar energy company, and led a 4-person team as Product Owner and Scrum Master. I also maintain and build web applications for my university department.",
      "My favorite work is what a small business runs on every day. For a tailoring workshop I shipped a catalog site and admin panel where the owner publishes her own services and photos, prices read «Consultar» until she decides otherwise, and every order closes on WhatsApp — no cart, no payment commissions, and she can add a product without calling me.",
      "I work in English and Spanish. If you have a small, well-scoped project — a site, an MVP, a deployment, a stubborn bug — I'd like to hear about it.",
    ],
    contact: {
      lede: "Tell me what you're building and what's in the way. I reply in English or Spanish.",
      github: "GitHub",
    },
    langSwitchLabel: "Language",
    sectionNav: {
      label: "Sections",
      items: [
        { id: "top", label: "Intro" },
        { id: "work", label: "Work" },
        { id: "skills", label: "Toolkit" },
        { id: "about", label: "About" },
        { id: "contact", label: "Contact" },
      ],
    },
    projects: [
      {
        index: "01",
        title: "Catalog site and admin panel for a tailoring workshop",
        meta: "Liliana's Taller de Costura · Full-stack · 2026",
        points: [
          "Built a Spanish-language catalog site for a tailoring workshop - services and products with photos, price shown on request, and a detail page per item.",
          "Gave the owner an admin panel on Supabase Auth and row-level security, so she manages products, services, categories and photos herself.",
          "Images are resized to 1600px and converted to WebP in the browser before upload.",
          "Orders close over WhatsApp with a prefilled message instead of a cart, which keeps payment commissions out of the business model. Deployed to Cloudflare Workers via OpenNext. In-page payment is planned for a future release.",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "PostgreSQL",
          "Cloudflare Workers",
        ],
        href: "https://lilianas-taller-de-costura.lilianastallerdecostura.workers.dev/",
        media: {
          kind: "video",
          provider: "youtube",
          id: "gvd6xPNgGqE",
          title: "Liliana's Taller de Costura walkthrough",
          caption:
            "Walkthrough of the public site and the admin panel — catalog, product detail, and the WhatsApp order flow.",
        },
      },
      {
        index: "02",
        title: "Zero-touch deployments for an 8-service stack",
        meta: "Corporación MIDAS · DevOps / CI-CD · 2026",
        points: [
          "Built a GitHub Actions pipeline on a self-hosted ARM64 runner that builds a two-stage Docker image and publishes it to Docker Hub on every push to main.",
          "Wired Portainer webhooks for automatic production updates, so releases ship with no manual steps.",
          "Orchestrated Frappe, MariaDB, Redis, Nginx and background workers with Docker Compose, handling startup order and data persistence through volumes.",
          "Kept credentials in GitHub Secrets and Portainer environment variables, out of the repository.",
        ],
        tags: ["Docker", "GitHub Actions", "CI/CD", "Portainer", "Nginx"],
        href: "https://github.com/dcruzparedes/midas_app",
        // Demo media. Works on any project, in either language:
        //
        // Video — upload to YouTube as "Unlisted" and use the id from the
        // URL (youtube.com/watch?v=THIS_PART). The poster is optional;
        // YouTube's own thumbnail is used by default.
        // media: {
        //   kind: "video",
        //   provider: "youtube",
        //   id: "abc123XYZ",
        //   title: "CI/CD pipeline walkthrough",
        // },
        //
        // Or a screenshot stored in /public/projects/:
        // media: {
        //   kind: "image",
        //   src: "/projects/midas-pipeline.png",
        //   alt: "Pipeline run in GitHub Actions",
        // },
      },
      {
        index: "03",
        title: "Corporate website and admin CMS for a solar energy company",
        meta: "Full-stack · Product Owner · Scrum Master · 2026",
        points: [
          "Built a solar quotation calculator that generates client budgets automatically.",
          "Decoupled the content layer behind an admin panel, so the team updates the site without touching code.",
          "Led a 4-person team as Product Owner and Scrum Master, running sprint planning on a Kanban board.",
        ],
        tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Supabase"],
        media: {
          kind: "video",
          provider: "youtube",
          id: "u2chr93R158",
          title: "Corporate website walkthrough",
          caption:
            "Walkthrough of the public site — built with Next.js and NestJS on a PostgreSQL database.",
        },
      },
      {
        index: "04",
        title: "ExTra — an Android expense tracker",
        meta: "Personal project · 2026 — present",
        points: [
          "Modeled a many-to-many relationship between expenses and categories in a local Room database.",
          "Built a Quick Settings Tile that opens a floating dialog for logging an expense without leaving the current screen.",
          "Localized the app in English and Spanish.",
        ],
        tags: ["Kotlin", "Room", "Android"],
        href: "https://github.com/dcruzparedes/ExTra-Expenses-Tracker",
        media: {
          kind: "video",
          provider: "youtube",
          id: "f6k-YyeI4Xs",
          title: "ExTra — expense tracker app demo",
          aspect: "portrait",
          caption:
            "Built solo in Kotlin. Local storage with Room, and a many-to-many model between expenses and categories.",
        },
      },
      {
        index: "05",
        title: "Patient and logistics platform for a nonprofit",
        meta: "Casa David · React · 2024",
        points: [
          "Continued and completed a web platform for a nonprofit that provides lodging and support to low-income patients and families.",
          "Worked on patient lodging, bed assignment and the foundation's day-to-day operational logistics.",
        ],
        tags: ["React", "Team project"],
      },
    ],
  },

  es: {
    lang: "es",
    skip: "Saltar al trabajo",
    status: "Disponible para trabajar",
    role: "Desarrollador full-stack",
    location: "San Pedro Sula, Honduras",
    headline: "Construyo aplicaciones web - y los pipelines que las despliegan.",
    lede: "Trabajo con Next.js, NestJS, PostgreSQL y Supabase en el lado de la aplicación, y con Docker, GitHub Actions y CI/CD en el lado del despliegue. Disponible para proyectos pequeños y bien definidos.",
    actions: {
      email: "Escríbeme",
      cv: "Descargar CV",
      github: "Ver GitHub",
    },
    cvHref: "/daniel-cruz-paredes-cv-es.pdf",
    railLabel:
      "Pipeline de entrega: commit, build, test, push, deploy — en ejecución",
    sections: {
      work: "Trabajo seleccionado",
      toolkit: "Herramientas",
      about: "Sobre mí",
      contact: "Contacto",
    },
    viewProject: "Ver proyecto",
    viewCode: "Ver en GitHub",
    playVideo: "Reproducir video",
    skillGroups: [
      {
        label: "Aplicaciones",
        items: "React · Next.js · TypeScript · JavaScript · Tailwind CSS",
      },
      {
        label: "Backend",
        items:
          "NestJS · Node.js · Prisma · PostgreSQL · Supabase · SQL · Python",
      },
      {
        label: "Despliegue",
        items:
          "Docker · Docker Compose · GitHub Actions · CI/CD · Portainer · Nginx",
      },
      {
        label: "Móvil",
        items: "Kotlin · Android Studio · Room",
      },
      {
        label: "También he trabajado con",
        items: "Java · C++ · C# · Frappe",
      },
      {
        label: "Idiomas",
        items: "Español (nativo) · Inglés (fluido)",
      },
    ],
    about: [
      "Soy estudiante de Ingeniería en Sistemas en UNITEC, en San Pedro Sula, Honduras, con graduación prevista para diciembre de 2027. Me gusta la parte que muchos evitan: hacer que el software realmente funcione - contenedores, entornos, despliegues, pipelines.",
      "Configuré despliegues automáticos para un proyecto comunitario en Corporación MIDAS, construí una plataforma full-stack para una empresa de energía solar, y lideré un equipo de 4 personas como Product Owner y Scrum Master. También mantengo y desarrollo aplicaciones web para el departamento de mi universidad.",
      "Mi trabajo favorito es el que una pyme usa todos los días. Para un taller de costura entregué un sitio de catálogo con panel de administración donde la dueña publica sus propios servicios y fotos, los precios dicen «Consultar» hasta que ella decida otra cosa, y cada pedido se cierra por WhatsApp — sin carrito, sin comisiones de pago, y sin llamarme para agregar un producto.",
      "Trabajo en español e inglés. Si tienes un proyecto pequeño y bien definido — un sitio, un MVP, un despliegue, un bug terco — me gustaría escucharlo.",
    ],
    contact: {
      lede: "Cuéntame qué estás construyendo y qué te está estorbando. Respondo en español o inglés.",
      github: "GitHub",
    },
    langSwitchLabel: "Idioma",
    sectionNav: {
      label: "Secciones",
      items: [
        { id: "top", label: "Inicio" },
        { id: "work", label: "Trabajo" },
        { id: "skills", label: "Stack" },
        { id: "about", label: "Sobre mí" },
        { id: "contact", label: "Contacto" },
      ],
    },
    projects: [
      {
        index: "01",
        title: "Sitio de catálogo y panel de administración para un taller de costura",
        meta: "Liliana's Taller de Costura · Full-stack · 2026",
        points: [
          "Construí un sitio de catálogo en español para un taller de costura: servicios y productos con fotos, precio, y una página de detalle por cada elemento.",
          "Le entregué a la dueña un panel de administración sobre Supabase Auth y políticas RLS, para que gestione ella misma los productos, servicios, categorías y fotos.",
          "Las imágenes se redimensionan a 1600 px y se convierten a WebP en el navegador antes de subirlas.",
          "Los pedidos se cierran por WhatsApp con un mensaje prellenado en vez de un carrito, así el negocio no paga comisiones. Desplegado en Cloudflare Workers con OpenNext. El pago dentro de la página está planeado para una futura versión.",
        ],
        tags: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
          "Supabase",
          "PostgreSQL",
          "Cloudflare Workers",
        ],
        href: "https://lilianas-taller-de-costura.lilianastallerdecostura.workers.dev/",
        media: {
          kind: "video",
          provider: "youtube",
          id: "gvd6xPNgGqE",
          title: "Recorrido por Liliana's Taller de Costura",
          caption:
            "Recorrido por el sitio público y el panel de administración — catálogo, detalle de producto y el flujo de pedido por WhatsApp.",
        },
      },
      {
        index: "02",
        title: "Despliegues sin intervención para un stack de 8 servicios",
        meta: "Corporación MIDAS · DevOps / CI-CD · 2026",
        points: [
          "Construí un pipeline de GitHub Actions sobre un runner ARM64 self-hosted que arma una imagen Docker de dos etapas y la publica en Docker Hub en cada push a main.",
          "Configuré webhooks de Portainer para actualizar producción automáticamente, sin pasos manuales.",
          "Orquesté Frappe, MariaDB, Redis, Nginx y workers con Docker Compose, gestionando el orden de arranque y la persistencia de datos con volúmenes.",
          "Mantuve las credenciales en GitHub Secrets y variables de entorno de Portainer, fuera del repositorio.",
        ],
        tags: ["Docker", "GitHub Actions", "CI/CD", "Portainer", "Nginx"],
        href: "https://github.com/dcruzparedes/midas_app",
      },
      {
        index: "03",
        title:
          "Sitio corporativo y panel de administración para una empresa de energía solar",
        meta: "Full-stack · Product Owner · Scrum Master · 2026",
        points: [
          "Construí una calculadora de cotización solar que genera presupuestos automáticos para clientes.",
          "Separé la capa de contenido detrás de un panel de administración, para que el equipo actualice el sitio sin tocar código.",
          "Lideré un equipo de 4 personas como Product Owner y Scrum Master, con planificación de sprints en un tablero Kanban.",
        ],
        tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL", "Supabase"],
        media: {
          kind: "video",
          provider: "youtube",
          id: "u2chr93R158",
          title: "Recorrido del sitio corporativo",
          caption:
            "Recorrido por el sitio público — construido con Next.js y NestJS sobre PostgreSQL.",
        },
      },
      {
        index: "04",
        title: "ExTra — una app Android para controlar gastos",
        meta: "Proyecto personal · 2026 — presente",
        points: [
          "Modelé una relación muchos-a-muchos entre gastos y categorías en una base de datos local con Room.",
          "Construí un Quick Settings Tile que abre un diálogo flotante para registrar un gasto sin salir de la pantalla actual.",
          "Localicé la app en inglés y español.",
        ],
        tags: ["Kotlin", "Room", "Android"],
        href: "https://github.com/dcruzparedes/ExTra-Expenses-Tracker",
        media: {
          kind: "video",
          provider: "youtube",
          id: "f6k-YyeI4Xs",
          title: "ExTra — demo de la app de gastos",
          aspect: "portrait",
          caption:
            "Hecho en solitario con Kotlin. Almacenamiento local con Room y una relación muchos-a-muchos entre gastos y categorías.",
        },
      },
      {
        index: "05",
        title: "Plataforma de pacientes y logística para una ONG",
        meta: "Casa David · React · 2024",
        points: [
          "Continué y completé una plataforma web para una ONG que brinda alojamiento y apoyo a pacientes y familias de bajos recursos.",
          "Trabajé en alojamiento de pacientes, asignación de camas y la logística operativa diaria de la fundación.",
        ],
        tags: ["React", "Proyecto en equipo"],
      },
    ],
  },
};
