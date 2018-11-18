export function minWidth(pixelValue) {
  return `@media screen and (min-width: ${pixelValue}px)`;
}

export function maxWidth(pixelValue) {
  return `@media screen and (max-width: ${pixelValue - 1}px)`;
}
