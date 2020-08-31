import styled from 'styled-components';
import { mq } from '../../utils/styles';

export const StyledFilters = styled.div`
  display: flex;
  column-gap: 1rem;
  padding: 0.75rem 0;
  align-items: flex-end;

  ${mq.max.md} {
    padding: 0.75rem 0.5rem;
  }

  .filter-group {
    display: flex;
    flex-direction: column;

    ${mq.sm} {
      column-gap: 0.5rem;
      align-items: center;
      flex-direction: row;
      width: fit-content;
    }
  }

  p {
    margin: 0;
  }

  button {
    margin-left: auto;
  }
`;
