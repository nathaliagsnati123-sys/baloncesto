import { BenefitItem, BonusItem, CarouselSlide, FaqItem, TestimonialItem } from '../types';

export const CHECKOUT_URL = 'https://pay.hotmart.com/O107175812D?off=apssd549';
export const PRICE_TEXT = 'US$7';

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 1,
    title: 'MÁS VARIEDAD',
    description: 'Encuentra nuevas ideas para hacer tus entrenamientos más variados y dinámicos.',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    title: 'AHORRA TIEMPO',
    description: 'Deja de perder horas buscando ejercicios diferentes para cada entrenamiento.',
    iconName: 'Clock',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    title: 'ENTRENA CON MÁS ORGANIZACIÓN',
    description: 'Ten una gran colección de ejercicios disponible para consultar cuando la necesites.',
    iconName: 'Layers',
    image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 4,
    title: 'IDEAL PARA JUGADORES Y ENTRENADORES',
    description: 'Úsala para tus propios entrenamientos o para preparar sesiones de entrenamiento.',
    iconName: 'Users',
    image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    title: 'ENTRENA DONDE QUIERAS',
    description: 'Accede al material desde tus dispositivos compatibles y consulta los ejercicios cuando quieras.',
    iconName: 'Smartphone',
    image: 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?auto=format&fit=crop&w=800&q=80',
  },
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 1,
    number: 1,
    title: '120 EJERCICIOS DE ATAQUE EN EL BALONCESTO',
    description: 'Amplía tus opciones de entrenamiento con 120 ejercicios enfocados en situaciones ofensivas.',
    tag: 'Tácticas & Ataque',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80',
    valueTag: 'Valor: US$19 (Gratis)',
  },
  {
    id: 2,
    number: 2,
    title: '264 EJERCICIOS DE TIRO EN EL BALONCESTO',
    description: 'Una colección adicional de ejercicios para trabajar diferentes situaciones de tiro.',
    tag: 'Precisión & Mecánica',
    image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=600&q=80',
    valueTag: 'Valor: US$24 (Gratis)',
  },
  {
    id: 3,
    number: 3,
    title: 'EJERCICIOS DE MANEJO DE BALÓN EN EL BALONCESTO',
    description: 'Material adicional dedicado al manejo y control del balón.',
    tag: 'Dribbling & Control',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=600&q=80',
    valueTag: 'Valor: US$17 (Gratis)',
  },
  {
    id: 4,
    number: 4,
    title: 'EJERCICIOS DE TÉCNICA INDIVIDUAL Y TÁCTICA DE BALONCESTO',
    description: 'Material para trabajar diferentes aspectos técnicos y tácticos del juego.',
    tag: 'Técnica & Visión',
    image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&w=600&q=80',
    valueTag: 'Valor: US$22 (Gratis)',
  },
  {
    id: 5,
    number: 5,
    title: 'EJERCICIOS PARA EL ENTRENAMIENTO DEL BOTE, EL REBOTE Y EL PASE EN EL BALONCESTO',
    description: 'Una colección adicional de ejercicios para trabajar estas diferentes situaciones del juego.',
    tag: 'Fundamentos Clave',
    image: 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?auto=format&fit=crop&w=600&q=80',
    valueTag: 'Valor: US$19 (Gratis)',
  },
  {
    id: 6,
    number: 6,
    title: 'GUÍA PARA ENTRENADORES',
    description: 'Material adicional pensado para ayudar a organizar y preparar entrenamientos.',
    tag: 'Metodología & Planificación',
    image: 'https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?auto=format&fit=crop&w=600&q=80',
    valueTag: 'Valor: US$25 (Gratis)',
  },
  {
    id: 7,
    number: 7,
    title: 'LECCIONES EN VIDEO',
    description: 'Accede a lecciones en video relacionadas con el entrenamiento de baloncesto.',
    tag: 'Formato Audiovisual',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80',
    valueTag: 'Valor: US$29 (Gratis)',
  },
];

export const PREVIEW_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    title: 'Entrenamientos en Cancha Completa',
    category: 'Dinámica de Juego',
    description: 'Ejercicios de transición rápida, finalizaciones en contraataque y toma de decisiones bajo presión defensiva.',
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Mecánica de Tiro y Salidas Rápidas',
    category: 'Tiro & Efectividad',
    description: 'Rutinas progresivas de tiro tras bloqueo, catch and shoot, tiros libres y tiros tras finta en carrera.',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Control y Manejo de Balón Progresivo',
    category: 'Dribbling & Habilidad',
    description: 'Circuitos de manejo con dos balones, cambios de ritmo, crossover explosivo y protección frente a defensores agresivos.',
    image: 'https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Táctica Ofensiva y Lectura de Espacios',
    category: 'Estrategia de Equipo',
    description: 'Esquemas de pase y corte, juego sin balón, pick and roll y distribución en pista para jugadores exteriores e interiores.',
    image: 'https://images.unsplash.com/photo-1515523110800-9415d13b84a8?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Desplazamientos Defensivos y Rebote Activo',
    category: 'Intensidad & Defensa',
    description: 'Ejercicios de posición básica, defensa del 1 contra 1, ayudas tácticas, bloqueo de rebote y salida rápida.',
    image: 'https://images.unsplash.com/photo-1505666287802-931dc83948e9?auto=format&fit=crop&w=1200&q=80',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    name: 'Carlos M.',
    role: 'Jugador & Entrenador Base',
    text: '“Me encantó tener tantos ejercicios reunidos en un solo lugar. Ahora tengo muchas más ideas para variar mis entrenamientos.”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300&q=80',
    highlight: 'Variedad de ejercicios',
  },
  {
    id: 2,
    name: 'Andrés R.',
    role: 'Entrenador de Club',
    text: '“La variedad de ejercicios me ayudó a organizar mejor mis sesiones y dejar de repetir siempre las mismas rutinas.”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80',
    highlight: 'Organización de sesiones',
  },
  {
    id: 3,
    name: 'Diego P.',
    role: 'Jugador Amateur',
    text: '“Es muy práctico para consultar cuando necesito nuevas ideas para entrenar.”',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&h=200&q=80',
    highlight: 'Práctico y directo',
  },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: 1,
    question: '¿Qué recibiré al realizar la compra?',
    answer: 'Recibirás acceso a la colección completa de + 1.000 ejercicios de baloncesto y a todos los 7 bonos incluidos en la oferta.',
  },
  {
    id: 2,
    question: '¿Para quién está recomendado?',
    answer: 'Está pensado para jugadores, entrenadores y personas que buscan nuevas ideas para sus entrenamientos de baloncesto.',
  },
  {
    id: 3,
    question: '¿Es un producto físico?',
    answer: 'No. Se trata de un producto digital al que tendrás acceso después de realizar la compra.',
  },
  {
    id: 4,
    question: '¿Puedo consultarlo desde mi celular?',
    answer: 'Sí. Podrás acceder al material desde dispositivos compatibles.',
  },
  {
    id: 5,
    question: '¿Cuánto cuesta?',
    answer: 'La oferta especial tiene un precio de US$7 e incluye los + 1.000 ejercicios y todos los bonos indicados en esta página.',
  },
];
