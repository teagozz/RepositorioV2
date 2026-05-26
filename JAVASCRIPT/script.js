import { animate, stagger, splitText } from 'https://cdn.jsdelivr.net/npm/animejs@4.4.1/dist/bundles/anime.esm.js';

const { chars } = splitText('.text-thiago', { words: false, chars: true });

animate(chars, {
  y: [
    { to: '-2.75rem', ease: 'outExpo', duration: 800 },
    { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
  ],
  rotate: {
    from: '-1turn',
    delay: 0
  },
  delay: stagger(50),
  ease: 'inOutCirc',
  loopDelay: 1000,
  loop: true
}); 
