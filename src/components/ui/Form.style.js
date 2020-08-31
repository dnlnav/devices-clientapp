import styled from 'styled-components';
import { rgba, rem } from 'polished';

import { colorPalette } from '../../utils/styles';

export const StyledForm = styled.form`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-row-gap: 1.5rem;
  grid-column-gap: 2rem;
  align-items: center;

  .heading,
  .text {
    margin: 0;
    grid-column: span 2;
  }

  .button-group {
    grid-column: span 2;
    display: flex;
    column-gap: 1rem;
    justify-self: end;
  }
`;

const inputStyles = `
  border: 1px solid ${colorPalette.gray.normal};
  border-radius: ${rem(4)};
  background-color: white;
  line-height: 1;
  padding: ${rem(10)} ${rem(28)} ${rem(10)} ${rem(10)};

  &.error {
    border-color: ${colorPalette.alert.light};
    background-color: ${rgba(colorPalette.alert.light, 0.15)};
  }
`;

export const StyledInput = styled.input`
  ${inputStyles}
`;

export const StyledSelect = styled.div`
  position: relative;

  svg {
    height: ${rem(18)};
    width: ${rem(18)};
    position: absolute;
    top: 50%;
    right: 0.5rem;
    transform: translateY(-50%);
  }

  select {
    ${inputStyles}
    width: 100%;
  }
`;
