import styled from 'styled-components';
import { colorPalette } from '../utils/styles';
import { rem } from 'polished';

const primaryButton = (color) => `
  background-color: ${colorPalette[color].normal};
  border: 1px solid ${colorPalette[color].normal};
  border-radius: ${rem(4)};
  padding: 0.5rem 1.5rem;
  color: white;

  &:hover {
    background-color: ${colorPalette[color].dark};
  }
`;

export const StyledPrimaryButton = styled.button`
  ${primaryButton('primary')}
`;

export const StyledAlertButton = styled.button`
  ${primaryButton('alert')}
`;

export const StyledOutlinedButton = styled.button`
  border: 1px solid ${colorPalette.primary.light};
  background-color: transparent;
  border-radius: ${rem(4)};
  padding: 0.5rem 1.5rem;
  color: ${colorPalette.primary.normal};

  &:hover {
    border-color: ${colorPalette.primary.dark};
    color: ${colorPalette.primary.dark};
    font-weight: bold;
  }
`;

export const StyledOutlinedAlertButton = styled.button`
  border: 1px solid ${colorPalette.alert.normal};
  background-color: transparent;
  border-radius: ${rem(4)};
  padding: 0.5rem 1.5rem;
  color: ${colorPalette.alert.normal};

  &:hover {
    border-color: ${colorPalette.alert.dark};
    color: ${colorPalette.alert.dark};
    font-weight: bold;
  }
`;
export const LabelButton = styled.button`
  border: 0;
  background-color: transparent;
  border-radius: ${rem(4)};
  margin: 0.5rem 1.5rem;
  color: ${colorPalette.gray.dark};

  &:hover {
    font-weight: bold;
  }
`;
