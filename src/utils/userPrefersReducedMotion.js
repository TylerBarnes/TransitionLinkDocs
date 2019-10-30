export default () =>
  typeof window !== `undefined` &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
