import { BASE64_IMAGES } from './imagesData';

const getImg = (name: string): string => {
  return BASE64_IMAGES[name] || BASE64_IMAGES[name.replace('.webp', '.jpg')] || '';
};

export const IMAGES = {
  hero: {
    webpSm: getImg('hero-sm.webp'),
    webp: getImg('hero.webp'),
    jpgSm: getImg('hero-sm.jpg'),
    jpg: getImg('hero.jpg'),
  },
  benefits: {
    1: { webpSm: getImg('benefit-1-sm.webp'), webp: getImg('benefit-1.webp'), jpgSm: getImg('benefit-1-sm.jpg'), jpg: getImg('benefit-1.jpg') },
    2: { webpSm: getImg('benefit-2-sm.webp'), webp: getImg('benefit-2.webp'), jpgSm: getImg('benefit-2-sm.jpg'), jpg: getImg('benefit-2.jpg') },
    3: { webpSm: getImg('benefit-3-sm.webp'), webp: getImg('benefit-3.webp'), jpgSm: getImg('benefit-3-sm.jpg'), jpg: getImg('benefit-3.jpg') },
    4: { webpSm: getImg('benefit-4-sm.webp'), webp: getImg('benefit-4.webp'), jpgSm: getImg('benefit-4-sm.jpg'), jpg: getImg('benefit-4.jpg') },
    5: { webpSm: getImg('benefit-5-sm.webp'), webp: getImg('benefit-5.webp'), jpgSm: getImg('benefit-5-sm.jpg'), jpg: getImg('benefit-5.jpg') },
  },
  bonuses: {
    1: { webpSm: getImg('bono-1-sm.webp'), webp: getImg('bono-1.webp'), jpgSm: getImg('bono-1-sm.jpg'), jpg: getImg('bono-1.jpg') },
    2: { webpSm: getImg('bono-2-sm.webp'), webp: getImg('bono-2.webp'), jpgSm: getImg('bono-2-sm.jpg'), jpg: getImg('bono-2.jpg') },
    3: { webpSm: getImg('bono-3-sm.webp'), webp: getImg('bono-3.webp'), jpgSm: getImg('bono-3-sm.jpg'), jpg: getImg('bono-3.jpg') },
    4: { webpSm: getImg('bono-4-sm.webp'), webp: getImg('bono-4.webp'), jpgSm: getImg('bono-4-sm.jpg'), jpg: getImg('bono-4.jpg') },
    5: { webpSm: getImg('bono-5-sm.webp'), webp: getImg('bono-5.webp'), jpgSm: getImg('bono-5-sm.jpg'), jpg: getImg('bono-5.jpg') },
    6: { webpSm: getImg('bono-6-sm.webp'), webp: getImg('bono-6.webp'), jpgSm: getImg('bono-6-sm.jpg'), jpg: getImg('bono-6.jpg') },
    7: { webpSm: getImg('bono-7-sm.webp'), webp: getImg('bono-7.webp'), jpgSm: getImg('bono-7-sm.jpg'), jpg: getImg('bono-7.jpg') },
  },
  whatYouGet: {
    groupTactics: { webpSm: getImg('group-tactics-sm.webp'), webp: getImg('group-tactics.webp'), jpgSm: getImg('group-tactics-sm.jpg'), jpg: getImg('group-tactics.jpg') },
    individualTactics: { webp: getImg('individual-tactics.webp'), jpg: getImg('individual-tactics.jpg') },
  },
  previews: {
    1: { webp: getImg('preview-1.webp'), jpg: getImg('preview-1.jpg') },
    2: { webp: getImg('preview-2.webp'), jpg: getImg('preview-2.jpg') },
    3: { webp: getImg('preview-3.webp'), jpg: getImg('preview-3.jpg') },
    4: { webp: getImg('preview-4.webp'), jpg: getImg('preview-4.jpg') },
  },
  avatars: {
    1: { webp: getImg('avatar-1.webp'), jpg: getImg('avatar-1.jpg') },
    2: { webp: getImg('avatar-2.webp'), jpg: getImg('avatar-2.jpg') },
    3: { webp: getImg('avatar-3.webp'), jpg: getImg('avatar-3.jpg') },
  },
};
