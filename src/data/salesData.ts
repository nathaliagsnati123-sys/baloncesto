import { BenefitItem, BonusItem, CarouselSlide, FaqItem, TestimonialItem } from '../types';
import { IMAGES } from '../assets/images';

export const CHECKOUT_URL = 'https://pay.hotmart.com/O107175812D?off=apssd549';
export const PRICE_TEXT = 'US$7,00';

export const BENEFITS_DATA: BenefitItem[] = [
  {
    id: 1,
    title: 'MÁS VARIEDAD',
    description: 'Encuentra nuevas ideas para hacer tus entrenamientos más variados y dinámicos.',
    iconName: 'Zap',
    image: IMAGES.benefits[1].webp,
  },
  {
    id: 2,
    title: 'AHORRA TIEMPO',
    description: 'Deja de perder horas buscando ejercicios diferentes para cada entrenamiento.',
    iconName: 'Clock',
    image: IMAGES.benefits[2].webp,
  },
  {
    id: 3,
    title: 'ENTRENA CON MÁS ORGANIZACIÓN',
    description: 'Ten una gran colección de ejercicios disponible para consultar cuando la necesites.',
    iconName: 'Layers',
    image: IMAGES.benefits[3].webp,
  },
  {
    id: 4,
    title: 'IDEAL PARA JUGADORES Y ENTRENADORES',
    description: 'Úsala para tus propios entrenamientos o para preparar sesiones de entrenamiento.',
    iconName: 'Users',
    image: IMAGES.benefits[4].webp,
  },
  {
    id: 5,
    title: 'ENTRENA DONDE QUIERAS',
    description: 'Accede al material desde tus dispositivos compatibles y consulta los ejercicios cuando quieras.',
    iconName: 'Smartphone',
    image: IMAGES.benefits[5].webp,
  },
];

export const BONUSES_DATA: BonusItem[] = [
  {
    id: 1,
    number: 1,
    title: '120 EJERCICIOS DE ATAQUE EN EL BALONCESTO',
    description: 'Amplía tus opciones de entrenamiento con 120 ejercicios enfocados en situaciones ofensivas.',
    tag: 'Tácticas & Ataque',
    image: IMAGES.bonuses[1].webpSm,
    valueTag: 'Valor: US$19,00',
    originalPrice: 'US$19,00',
  },
  {
    id: 2,
    number: 2,
    title: '264 EJERCICIOS DE TIRO EN EL BALONCESTO',
    description: 'Una colección adicional de ejercicios para trabajar diferentes situaciones de tiro.',
    tag: 'Precisión & Mecánica',
    image: IMAGES.bonuses[2].webpSm,
    valueTag: 'Valor: US$24,00',
    originalPrice: 'US$24,00',
  },
  {
    id: 3,
    number: 3,
    title: 'EJERCICIOS DE MANEJO DE BALÓN EN EL BALONCESTO',
    description: 'Material adicional dedicado al manejo y control del balón.',
    tag: 'Dribbling & Control',
    image: IMAGES.bonuses[3].webpSm,
    valueTag: 'Valor: US$17,00',
    originalPrice: 'US$17,00',
  },
  {
    id: 4,
    number: 4,
    title: 'EJERCICIOS DE TÉCNICA INDIVIDUAL Y TÁCTICA DE BALONCESTO',
    description: 'Material para trabajar diferentes aspectos técnicos y tácticos del juego.',
    tag: 'Técnica & Visión',
    image: IMAGES.bonuses[4].webpSm,
    valueTag: 'Valor: US$22,00',
    originalPrice: 'US$22,00',
  },
  {
    id: 5,
    number: 5,
    title: 'EJERCICIOS PARA EL ENTRENAMIENTO DEL BOTE, EL REBOTE Y EL PASE EN EL BALONCESTO',
    description: 'Una colección adicional de ejercicios para trabajar estas diferentes situaciones del juego.',
    tag: 'Fundamentos Clave',
    image: IMAGES.bonuses[5].webpSm,
    valueTag: 'Valor: US$19,00',
    originalPrice: 'US$19,00',
  },
  {
    id: 6,
    number: 6,
    title: 'GUÍA PARA ENTRENADORES',
    description: 'Material adicional pensado para ayudar a organizar y preparar entrenamientos.',
    tag: 'Metodología & Planificación',
    image: IMAGES.bonuses[6].webpSm,
    valueTag: 'Valor: US$25,00',
    originalPrice: 'US$25,00',
  },
  {
    id: 7,
    number: 7,
    title: 'LECCIONES EN VIDEO',
    description: 'Accede a lecciones en video relacionadas con el entrenamiento de baloncesto.',
    tag: 'Formato Audiovisual',
    image: IMAGES.bonuses[7].jpg,
    valueTag: 'Valor: US$29,00',
    originalPrice: 'US$29,00',
  },
];

export const PREVIEW_CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    id: 1,
    title: 'Entrenamientos en Cancha Completa',
    category: 'Dinámica de Juego',
    description: 'Ejercicios de transición rápida, finalizaciones en contraataque y toma de decisiones bajo presión defensiva.',
    image: IMAGES.previews[1].jpg,
  },
  {
    id: 2,
    title: 'Mecánica de Tiro y Salidas Rápidas',
    category: 'Tiro & Efectividad',
    description: 'Rutinas progresivas de tiro tras bloqueo, catch and shoot, tiros libres y tiros tras finta en carrera.',
    image: IMAGES.previews[2].jpg,
  },
  {
    id: 3,
    title: 'Control y Manejo de Balón Progresivo',
    category: 'Dribbling & Habilidad',
    description: 'Circuitos de manejo con dos balones, cambios de ritmo, crossover explosivo y protección frente a defensores agresivos.',
    image: IMAGES.previews[3].jpg,
  },
  {
    id: 4,
    title: 'Táctica Ofensiva y Lectura de Espacios',
    category: 'Estrategia de Equipo',
    description: 'Esquemas de pase y corte, juego sin balón, pick and roll y distribución en pista para jugadores exteriores e interiores.',
    image: IMAGES.previews[4].jpg,
  },
  {
    id: 5,
    title: 'Desplazamientos Defensivos y Rebote Activo',
    category: 'Intensidad & Defensa',
    description: 'Ejercicios de posición básica, defensa del 1 contra 1, ayudas tácticas, bloqueo de rebote y salida rápida.',
    image: IMAGES.benefits[5].jpg,
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 1,
    name: 'Carlos M.',
    role: 'Jugador & Entrenador Base',
    text: '“Me encantó tener tantos ejercicios reunidos en un solo lugar. Ahora tengo muchas más ideas para variar mis entrenamientos.”',
    rating: 5,
    avatar: IMAGES.avatars[1].jpg,
    highlight: 'Variedad de ejercicios',
  },
  {
    id: 2,
    name: 'Andrés R.',
    role: 'Entrenador de Club',
    text: '“La variedad de ejercicios me ayudó a organizar mejor mis sesiones y dejar de repetir siempre las mismas rutinas.”',
    rating: 5,
    avatar: IMAGES.avatars[2].jpg,
    highlight: 'Organización de sesiones',
  },
  {
    id: 3,
    name: 'Diego P.',
    role: 'Jugador Amateur',
    text: '“Es muy practical para consultar cuando necesito nuevas ideas para entrenar.”',
    rating: 5,
    avatar: IMAGES.avatars[3].jpg,
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
