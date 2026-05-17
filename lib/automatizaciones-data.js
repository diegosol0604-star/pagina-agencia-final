export const FLOW_STEPS = [
  { label: "Cliente manda un mensaje", arrow: "respuesta automática", icon: "message" },
  { label: "El sistema filtra y clasifica", arrow: "según las reglas de tu negocio", icon: "layers" },
  { label: "Agenda, registra, factura o notifica", arrow: "tú llegas y ves el resumen", icon: "calendar" },
  { label: "Ahorras tiempo y te enfocas en lo importante", arrow: null, icon: "check" },
];

export const TIPOS = [
  {
    tag: "Atención al cliente",
    title: "Chatbots para WhatsApp",
    desc: "Un asistente virtual que atiende a tus clientes en WhatsApp las 24 horas, los 7 días de la semana. Responde preguntas, da precios, filtra leads y cierra ventas — sin que estés presente.",
    featuresLabel: "Características del chatbot para WhatsApp",
    features: [
      "Respuestas automáticas instantáneas",
      "Filtrado y clasificación de leads",
      "Cierre de ventas automatizado",
      "Resumen diario de conversaciones",
    ],
    waKey: "chatbot",
    waAria: "Cotizar chatbot para WhatsApp",
    icon: "message",
  },
  {
    tag: "Redes sociales",
    title: "Instagram & TikTok Automático",
    desc: "Responde DMs y comentarios en Instagram y TikTok de forma automática. Nunca pierdas un cliente potencial por no responder a tiempo.",
    featuresLabel: "Características de automatización en redes sociales",
    features: [
      "Respuesta automática a DMs",
      "Gestión de comentarios",
      "Redirección a WhatsApp o sitio web",
      "Activo las 24 horas",
    ],
    waKey: "redes",
    waAria: "Cotizar automatización de redes sociales",
    icon: "youtube",
  },
  {
    tag: "Agenda y citas",
    title: "Agendamiento de Citas",
    desc: "Tus clientes pueden agendar citas directamente desde WhatsApp o Instagram, sin llamadas ni mensajes de ida y vuelta. El sistema registra, confirma y recuerda automáticamente.",
    featuresLabel: "Características del sistema de agendamiento",
    features: [
      "Reservas desde WhatsApp o redes",
      "Confirmación automática",
      "Recordatorios antes de la cita",
      "Sincronización con tu calendario",
    ],
    waKey: "agendamiento",
    waAria: "Cotizar sistema de agendamiento",
    icon: "calendar",
  },
  {
    tag: "Gestión de clientes",
    title: "CRM Automático",
    desc: "Registra automáticamente cada cliente, lead y venta en una base de datos organizada. Sin hojas de Excel, sin datos perdidos, con seguimiento automático.",
    featuresLabel: "Características del CRM automático",
    features: [
      "Registro automático de clientes",
      "Historial de conversaciones",
      "Seguimiento de leads",
      "Reportes y métricas",
    ],
    waKey: "crm",
    waAria: "Cotizar CRM automático",
    icon: "users",
  },
  {
    tag: "Administración",
    title: "Facturación Automática",
    desc: "Genera y envía facturas automáticamente al cerrar una venta o al completar un servicio. Sin hacerlo manualmente, sin retrasos.",
    featuresLabel: "Características de la facturación automática",
    features: [
      "Generación automática de facturas",
      "Envío inmediato al cliente",
      "Registro contable integrado",
      "Recordatorios de pago",
    ],
    waKey: "facturacion",
    waAria: "Cotizar facturación automática",
    icon: "file",
  },
  {
    tag: "Seguimiento",
    title: "Flujos de Seguimiento",
    desc: "Recordatorios automáticos para clientes que no han respondido, próximas citas, renovaciones o cualquier seguimiento que hoy haces a mano.",
    featuresLabel: "Características de los flujos de seguimiento",
    features: [
      "Recordatorios automáticos",
      "Seguimiento a leads fríos",
      "Notificaciones internas al equipo",
      "Alertas de nuevas ventas o leads",
    ],
    waKey: "seguimiento",
    waAria: "Cotizar flujos de seguimiento",
    icon: "activity",
  },
];

export const MEDIDA_EXAMPLES = [
  '"Cuando entra un lead, quiero que se registre y me mande un resumen"',
  '"Quiero que mis pacientes reciban recordatorios 24h antes de su cita"',
  '"Necesito un bot que cotice mis servicios automáticamente"',
];

export const MEDIDA_STEPS = [
  {
    num: "1",
    lead: "Nos cuentas",
    rest: " qué proceso quieres automatizar, sin tecnicismos. Una llamada o un mensaje es suficiente.",
  },
  {
    num: "2",
    lead: "Lo analizamos",
    rest: " y determinamos si es viable, qué herramientas usar y cuánto tiempo tomaría.",
  },
  {
    num: "3",
    lead: "Te damos una cotización clara",
    rest: " según el alcance. Sin sorpresas, sin letras chicas.",
  },
  {
    num: "4",
    lead: "Lo construimos y probamos",
    rest: " contigo antes de entregarlo. Tú apruebas, nosotros ajustamos.",
  },
];

export const BENEFICIOS = [
  {
    title: "Mejor atención al cliente",
    desc: "Respuesta inmediata, a cualquier hora. Tus clientes nunca quedan esperando y la experiencia de compra mejora desde el primer contacto.",
    icon: "chat",
  },
  {
    title: "Ahorro de tiempo real",
    desc: "Deja de repetir las mismas respuestas. Ese tiempo lo recuperas para enfocarte en hacer crecer tu negocio, no en apagar incendios.",
    icon: "clock",
  },
  {
    title: "Crecimiento del negocio",
    desc: "Más leads atendidos, más ventas cerradas, más clientes satisfechos — sin contratar más personal. El sistema escala contigo.",
    icon: "growth",
  },
  {
    title: "Menos errores humanos",
    desc: "Los sistemas automatizados no olvidan, no se confunden y no tienen días malos. La información siempre es precisa y consistente.",
    icon: "shield",
  },
  {
    title: "Datos e insights",
    desc: "Sabe exactamente qué preguntan tus clientes, qué servicios piden más y en qué horarios hay más actividad. Decisiones basadas en datos reales.",
    icon: "monitor",
  },
  {
    title: "Visibilidad total",
    desc: "Monitorea todo desde un solo lugar. Cuántos mensajes entraron, cuántas citas se agendaron, cuántos leads convirtió el bot. Siempre al tanto.",
    icon: "eye",
  },
];
