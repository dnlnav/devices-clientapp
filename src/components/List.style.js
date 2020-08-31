import styled from 'styled-components';
import { rem } from 'polished';
import { boxShadow } from '../utils/styles';

export const StyledList = styled.div`
  max-width: ${rem(960)};
  margin: 4rem auto;

  .list-wrapper {
    box-shadow: ${boxShadow[0]};
  }
`;
