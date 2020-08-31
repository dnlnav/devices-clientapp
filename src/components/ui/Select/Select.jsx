import React from 'react';
import { StyledSelect } from '../../../styles/Form.style';
import { ReactComponent as ExpandMore } from '../../../svg/expand-more.svg';

function Select({ children, register, ...props }) {
  return (
    <StyledSelect>
      <select ref={register} {...props}>
        {children}
      </select>
      <ExpandMore />
    </StyledSelect>
  );
}

export default Select;
