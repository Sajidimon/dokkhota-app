import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    "on-tertiary-container": "#636262",
    "surface-container-high": "#e0e3e4",
    "tertiary": "#5c5b5b",
    "on-secondary-fixed": "#3c3053",
    "on-tertiary-fixed-variant": "#6e6d6d",
    "surface-container": "#e6e8ea",
    "on-primary-fixed": "#384b00",
    "error-dim": "#b92902",
    "primary-container": "#c5fe00",
    "inverse-surface": "#0c0f10",
    "primary-fixed": "#c5fe00",
    "on-tertiary-fixed": "#515050",
    "secondary": "#62557b",
    "surface-container-highest": "#dadddf",
    "surface-dim": "#d1d5d7",
    "surface-tint": "#4c6400",
    "outline": "#757778",
    "on-error-container": "#520c00",
    "error-container": "#f95630",
    "on-error": "#ffefec",
    "error": "#b02500",
    "primary-dim": "#425700",
    "on-secondary-container": "#4f4368",
    "on-primary-container": "#485e00",
    "outline-variant": "#abadae",
    "on-primary": "#dfff8f",
    "surface-container-low": "#eff1f2",
    "primary": "#4c6400",
    "primary-fixed-dim": "#b9ef00",
    "background": "#f5f6f7",
    "tertiary-dim": "#504f4f",
    "inverse-primary": "#c5fe00",
    "tertiary-fixed-dim": "#f3f0ef",
    "secondary-fixed": "#decdfa",
    "surface-bright": "#f5f6f7",
    "surface-container-lowest": "#ffffff",
    "secondary-dim": "#56496f",
    "inverse-on-surface": "#9b9d9e",
    "on-primary-fixed-variant": "#506900",
    "secondary-fixed-dim": "#d0bfeb",
    "on-surface": "#2c2f30",
    "on-surface-variant": "#595c5d",
    "tertiary-container": "#ffffff",
    "surface": "#f5f6f7",
    "on-secondary-fixed-variant": "#594c72",
    "on-tertiary": "#f5f2f1",
    "tertiary-fixed": "#ffffff",
    "on-secondary": "#f8efff",
    "secondary-container": "#decdfa",
    "surface-variant": "#dadddf",
    "on-background": "#2c2f30"
  }
};

const fonts = {
  heading: `'Space Grotesk', sans-serif`,
  body: `'Manrope', sans-serif`,
};

export const theme = extendTheme({
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: "brand.background",
        color: "brand.on-background",
        minHeight: "max(884px, 100dvh)",
      }
    }
  }
});
