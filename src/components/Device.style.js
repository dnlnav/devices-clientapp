import styled from 'styled-components';
import { colorPalette } from '../utils/styles';

export const StyledDevice = styled.div`
  border-bottom: 1px solid ${colorPalette.gray.normal};
  background-color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-of-type {
    border-bottom: 0;
  }

  .name {
    font-weight: bold;
  }

  .type {
    color: ${colorPalette.primary.dark};
  }

  .capacity {
  }

  .actions {
    display: flex;
    column-gap: 1rem;
  }
`;
