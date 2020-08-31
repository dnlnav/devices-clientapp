import styled from 'styled-components';
import { colorPalette, pxToRem } from '../../utils/styles';

export const StyledPrimaryButton = styled.button`
  background-color: ${colorPalette.primary.normal};
  border: 1px solid ${colorPalette.primary.normal};
  border-radius: ${pxToRem(4)};
  padding: 0.5rem 1.5rem;
  color: white;

  &:hover {
    background-color: ${colorPalette.primary.dark};
  }
`;

export const StyledAlertButton = styled.button`
  background-color: ${colorPalette.alert.normal};
  border: 1px solid ${colorPalette.alert.normal};
  border-radius: ${pxToRem(4)};
  padding: 0.5rem 1.5rem;
  color: white;

  &:hover {
    background-color: ${colorPalette.alert.dark};
  }
`;

export const StyledOutlinedButton = styled.button`
  border: 1px solid ${colorPalette.primary.normal};
  background-color: transparent;
  border-radius: ${pxToRem(4)};
  padding: 0.5rem 1.5rem;
  color: ${colorPalette.primary.normal};

  &:hover {
    background-color: ${colorPalette.primary.dark};
    color: white;
  }
`;
