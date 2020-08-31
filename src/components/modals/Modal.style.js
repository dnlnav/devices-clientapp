import styled from 'styled-components';
import { boxShadow } from '../../utils/styles';
import { rem } from 'polished';

export const StyledModal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  align-items: center;
  justify-content: center;

  .content-wrapper {
    background-color: white;
    box-shadow: ${boxShadow[2]};
    border-radius: ${rem(4)};
    padding: 2rem;
    width: 90%;

    max-width: ${rem(600)};
  }
`;
