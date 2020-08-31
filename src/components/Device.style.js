import styled from 'styled-components';
import { colorPalette } from '../utils/styles';

export const StyledDevice = styled.div`
  border: 1px solid ${colorPalette.gray.normal};
  background-color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:first-child) {
    margin-top: -1px;
  }

  .actions {
    display: flex;
    column-gap: 1rem;
  }
`;
