import styled from 'styled-components';
import { rgba, rem } from 'polished';

import { colorPalette, boxShadow } from '../utils/styles';

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

  select,
  .select {
    ${inputStyles}
    width: 100%;
  }

  .select {
    cursor: pointer;
    position: relative;
    max-width: 30vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: ${rem(250)};
    z-index: 1;
  }

  .dropdown {
    display: none;
    position: absolute;
    background-color: white;
    box-shadow: ${boxShadow[1]};
    padding-top: ${rem(5)};
    margin-top: ${rem(-5)};
    width: ${rem(250)};

    &.active {
      display: block;
    }
  }

  .dropdown-option {
    display: block;
    padding: 0.75rem;
    border-bottom: 1px solid ${colorPalette.gray.normal};

    &:hover {
      background-color: ${rgba(colorPalette.primary.normal, 0.15)};
    }

    &.selected {
      color: white;
      background-color: ${colorPalette.primary.light};
    }

    input {
      display: none;
    }
  }
`;
