export interface BonusItem {
  id: number;
  number: number;
  title: string;
  description: string;
  tag: string;
  image: string;
  valueTag: string;
  originalPrice: string;
}

export interface BenefitItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
  image: string;
}

export interface CarouselSlide {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
  avatar: string;
  highlight: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}
