import { createGlobalStyle } from 'styled-components';
import { colorPalette } from './utils/styles';

export const AppStyles = createGlobalStyle`
  body{
    background-color: ${colorPalette.gray.light};
  }

  input[type="text"], input[type="number"], select {
    appearance: none;
  }
`;
