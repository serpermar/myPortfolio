/**
 * Única fuente de verdad para los datos personales del sitio.
 * Editar aquí afecta a la home, al CV y al pie de página.
 *
 * Fuente: CV actualizado (noviembre 2026).
 * PENDIENTE: `web3formsKey` — sin clave, el formulario no se muestra y solo queda
 * el email. Consigue una gratis en https://web3forms.com (30 s, sin tarjeta).
 */

export const site = {
  name: 'Sergi Pérez Marí',
  role: 'Desarrollador full stack',
  location: 'Badalona, Barcelona',
  email: 'sergi061202@gmail.com',
  github: 'https://github.com/serpermar',
  linkedin: 'https://www.linkedin.com/in/sergi-p%C3%A9rez-mar%C3%AD/',
  cvPdf: '/Sergi-Perez-Mari-CV.pdf',
  available: true,
  availabilityNote: 'Abierto a oportunidades',
  period: {
    from: 'Oct 2025',
    to: 'Actualidad',
    title: 'Búsqueda activa',
    summary:
      'Formación continua y proyectos propios mientras busco el siguiente equipo donde seguir creciendo.',
  },
  /** Deja esto vacío para ocultar el formulario y dejar solo el email directo. */
  web3formsKey: '',

  intro:
    'Desarrollador full stack con experiencia en React, .NET Core y SQL. He construido APIs, integrado sistemas industriales y desplegado servicios con Docker sobre Linux. Me interesa entender el problema antes de elegir la herramienta.',

  about: [
    'Soy desarrollador full stack en Badalona, con formación en DAM y DAW y experiencia real construyendo aplicaciones web y APIs. Mi stack principal es React en el cliente, .NET Core y Java en el servidor, y SQL Server o MySQL como persistencia.',
    'Lo que más he hecho no es solo web: en Roomdimensions integré Active Directory, VuWall, AVCIT y Raspberry Pi con la aplicación, y desplegué los servicios con Docker sobre Linux. Ese tipo de trabajo —donde el software tiene que hablar con hardware y con sistemas heredados— es el que más me ha enseñado.',
    'Me gusta el trabajo que no se ve: modelar bien los datos, dejar una API coherente y que la parte visual no sea una capa pegada encima. Ahora busco un equipo donde seguir creciendo y aportar desde el primer día.',
  ],

  stack: [
    { label: 'Frontend', items: ['React', 'JavaScript', 'HTML', 'CSS', 'Kotlin'] },
    { label: 'Backend', items: ['.NET Core', 'C#', 'Java', 'Node.js', 'PHP'] },
    { label: 'Datos', items: ['SQL Server', 'MySQL'] },
    { label: 'Infra', items: ['Docker', 'Linux', 'Git', 'Jira'] },
  ],

  /** Ordenados del más reciente al más antiguo. */
  experience: [
    {
      from: 'May 2025',
      to: 'Oct 2025',
      role: 'Desarrollador Fullstack',
      company: 'Roomdimensions Ibérica',
      location: 'Montmeló, Barcelona',
      summary:
        'Aplicaciones web y APIs con React y .NET Core, integrando sistemas industriales y desplegando con Docker sobre Linux.',
      bullets: [
        'Desarrollo de aplicaciones web y APIs con React.js y .NET Core.',
        'Integración de sistemas: Active Directory, VuWall, AVCIT y Raspberry Pi.',
        'Diseño y mantenimiento de bases de datos SQL Server.',
        'Despliegue de servicios mediante Docker en entornos Linux.',
        'Mejora de la arquitectura y de la comunicación entre sistemas.',
      ],
    },
    {
      from: 'Dic 2022',
      to: 'May 2023',
      role: 'Desarrollador Frontend',
      company: 'abnorm media GmbH',
      location: 'Barcelona',
      summary:
        'Interfaces responsivas multi-dispositivo y mejoras de rendimiento y UX sobre bases de datos SQL.',
      bullets: [
        'Desarrollo de interfaces responsivas adaptadas a múltiples dispositivos.',
        'Integración con bases de datos relacionales SQL.',
        'Mejora de rendimiento y experiencia de usuario en aplicaciones web.',
      ],
    },
    {
      from: 'Feb 2022',
      to: 'May 2022',
      role: 'Desarrollador Backend',
      company: 'Sycai Medical',
      location: 'Barcelona',
      summary: 'APIs en Java, pruebas con Postman y mantenimiento de bases de datos SQL.',
      bullets: [
        'Desarrollo de APIs con Java y pruebas mediante Postman.',
        'Gestión y mantenimiento de bases de datos SQL.',
        'Documentación técnica y uso de herramientas como GitHub y Jira.',
      ],
    },
    {
      from: 'Sep 2019',
      to: 'Feb 2020',
      role: 'HelpDesk Nivel 1/2',
      company: 'Indra',
      location: 'Barcelona',
      summary: 'Soporte técnico nivel 1 y 2, gestión de tickets y escalado.',
      bullets: [
        'Resolución de incidencias técnicas nivel 1 y 2.',
        'Soporte remoto a usuarios.',
        'Gestión de tickets y escalado técnico.',
      ],
    },
  ],

  education: [
    {
      from: 'Sep 2022',
      to: 'Jul 2023',
      title: 'Grado Superior en Desarrollo de Aplicaciones Web (DAW)',
      center: 'Monlau Centre d’Estudis',
      location: 'Barcelona',
    },
    {
      from: 'Sep 2020',
      to: 'Jul 2022',
      title: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
      center: 'Monlau Centre d’Estudis',
      location: 'Barcelona',
    },
    {
      from: 'Sep 2018',
      to: 'Jun 2020',
      title: 'Grado Medio en Sistemas Microinformáticos y Redes (SMR)',
      center: 'Monlau Centre d’Estudis',
      location: 'Barcelona',
    },
  ],

  /** Formación complementaria y en curso. */
  continuous: [
    {
      from: 'Sep 2026',
      to: 'Dic 2026',
      title: 'Fullstack Developer con JavaScript',
      center: 'CIFO La Violeta',
      location: 'Barcelona',
      current: true,
    },
    {
      from: 'Mar 2024',
      to: 'Jul 2024',
      title: 'Desarrollo de Aplicaciones Móviles',
      center: 'Instituto Tecnológico de Barcelona',
      location: 'Barcelona',
      hours: 487,
      current: false,
    },
  ],

  languages: [
    { name: 'Castellano', level: 'Nativo' },
    { name: 'Catalán', level: 'Nativo' },
    { name: 'Inglés', level: 'B2' },
  ],

  interests: ['Videojuegos', 'Cine', 'Lectura', 'Música', 'Caminar'],
} as const;
