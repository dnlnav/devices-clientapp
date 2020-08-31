export const colorPalette = {
  primary: {
    light: '#2196f3',
    normal: '#1976d2',
    dark: '#0d47a1',
  },
  alert: {
    light: '#ef5350',
    normal: '#d32f2f',
    dark: '#b71c1c',
  },
  gray: {
    light: '#f5f5f5',
    normal: '#bdbdbd',
    dark: '#424242',
  },
};

export const boxShadow = [
  'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
  'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
];

const minQuery = (breakpoint) => `@media(min-width: ${breakpoint}px)`;
const maxQuery = (breakpoint) => `@media(max-width: ${breakpoint - 0.01}px)`;

export const mq = {
  sm: minQuery(600),
  md: minQuery(960),
  lg: minQuery(1280),
  xl: minQuery(1920),
  max: {
    xs: maxQuery(600),
    sm: maxQuery(960),
    md: maxQuery(1280),
    lg: maxQuery(1920),
  },
};
