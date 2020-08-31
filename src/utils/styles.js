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
  },
};

export const boxShadow = [
  'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
  'rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px',
  'rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px',
];

export const pxToRem = (px) => `${px / 16}rem`;
