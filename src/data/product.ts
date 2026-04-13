export const COLORS = {
  espressoBrown: '#3B2F2F',
  cremaGold: '#D4AF37',
  matteBlack: '#1A1A1A',
  warmWhite: '#FAF3E0',
  deepCharcoal: '#0D0D0D',
} as const;

export const PRODUCT = {
  name: 'Perspresso',
  tagline: 'Awaken Your Senses',
  price: '\u20AC5',
  buyPrice: '\u20AC5',
  finalTagline: 'AWAKEN YOUR SENSES. BREW NOW.',
  staticCup: '/images/cup-static.png',
  frameCount: 192,
  frameStart: 52,        // skip first 52 frames, begin display at frame 053
  frameDir: '/images/frames',
  framePrefix: 'ezgif-frame-',
  frameExtension: '.png',
};

export const SPECS = [
  { label: 'Origin', value: 'Single-Origin Arabica' },
  { label: 'Caffeine', value: '120mg Natural' },
  { label: 'Roast', value: 'Bold Dark Roast' },
  { label: 'Calories', value: 'Zero' },
  { label: 'Format', value: 'Premium Can' },
  { label: 'Serving', value: 'Ready to Drink' },
] as const;

export const STORY_OVERLAYS = [
  {
    id: 'awakening',
    title: 'The Morning Awakening',
    subtitle: 'Where every sip begins a ritual',
    description: 'Crafted from dawn-harvested beans at 1,800m altitude.',
    progress: [0.05, 0.25] as [number, number],
  },
  {
    id: 'crema',
    title: 'Rich Crema Profile',
    subtitle: 'Velvet meets intensity',
    description: 'A golden crema that speaks of precision roasting and uncompromising quality.',
    progress: [0.30, 0.55] as [number, number],
  },
  {
    id: 'focus',
    title: 'Pure Focus. Liquid Drive.',
    subtitle: 'Fuel for the relentless',
    description: '120mg of natural caffeine. Zero sugar. Absolute clarity.',
    progress: [0.60, 0.85] as [number, number],
  },
] as const;

export interface PostSection {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  stats: { value: string; label: string }[];
}

export const POST_SECTIONS: { origin: PostSection; executive: PostSection } = {
  origin: {
    id: 'roast-origin',
    badge: 'ORIGIN & CRAFT',
    title: 'Roast & Origin Specs',
    subtitle: 'From Bean to Brilliance',
    paragraphs: [
      "Our single-origin Arabica beans are sourced from the misty highlands of Colombia\u2019s Huila region, cultivated at elevations between 1,600 and 2,000 meters. This altitude produces a denser, more complex bean with pronounced sweetness and a wine-like acidity.",
      "Each batch undergoes a 14-hour slow roast process using infrared drum technology, achieving a bold dark roast profile without the bitter carbon notes of conventional roasting. The result is a liquid with extraordinary depth\u2014notes of dark chocolate, toasted walnut, and a whisper of dried cherry.",
      "We cold-brew the concentrate at 4\u00B0C for 20 hours, then flash-pressurize it into nitrogen-flushed aluminum cans within 60 seconds of extraction. This patented process locks in 97% of volatile aromatics, delivering caf\u00E9-quality espresso anywhere on earth.",
    ],
    stats: [
      { value: '1,800m', label: 'Altitude' },
      { value: '14hr', label: 'Slow Roast' },
      { value: '97%', label: 'Aromatics Retained' },
    ],
  },
  executive: {
    id: 'executive-tested',
    badge: 'PERFORMANCE',
    title: 'Executive Tested',
    subtitle: 'Engineered for Deep Work',
    paragraphs: [
      "Perspresso was born in the glass offices of Berlin\u2019s tech corridor, where founders and engineers needed more than a caffeine hit\u2014they needed sustained cognitive performance without the crash.",
      "Our 120mg natural caffeine dose is calibrated to the sweet spot identified in peer-reviewed nootropic research: enough to enhance alertness, reaction time, and creative problem-solving, without triggering the jittery cortisol spikes of over-caffeinated energy drinks.",
      "Combined with zero sugar and zero calories, Perspresso is the clean-fuel choice for board meetings, code sprints, and the long creative sessions that move the needle. No crash. No compromise. Just relentless clarity.",
    ],
    stats: [
      { value: '120mg', label: 'Natural Caffeine' },
      { value: '0g', label: 'Sugar' },
      { value: '4.6\u2605', label: 'Avg Rating' },
    ],
  },
};
