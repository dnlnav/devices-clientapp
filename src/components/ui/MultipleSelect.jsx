import React, { useState, useEffect, useRef } from 'react';
import { StyledSelect } from './Form.style';
import { ReactComponent as ExpandMore } from '../../svg/expand-more.svg';
import { handleOutsideClick } from '../../utils/handleClick';

function MultipleSelect({ items, selected, onChange, register }) {
  const [active, setActive] = useState(false);
  const dropdownRef = useRef();

  const getSelectedText = () => {
    if (selected.length === Object.keys(items).length) return 'All';
    if (selected.length > 0)
      return selected.map((key) => items[key]).join(', ');
    return 'None';
  };

  useEffect(() => {
    if (!active) return;
    const removeListener = handleOutsideClick(dropdownRef.current, () =>
      setActive(false)
    );
    return removeListener;
  }, [active]);

  const onClick = () => setActive(!active);

  return (
    <StyledSelect as="div">
      <button className="select" onClick={onClick}>
        {getSelectedText()}
        <ExpandMore />
      </button>
      <div ref={dropdownRef} className={`dropdown ${active ? 'active' : ''}`}>
        {Object.entries(items).map(([value, label]) => (
          <label
            htmlFor={value}
            key={value}
            className={`dropdown-option ${
              selected.includes(value) ? 'selected' : ''
            }`}
          >
            <input
              type="checkbox"
              name="filters"
              value={value}
              id={value}
              ref={register}
              defaultChecked={selected.includes(value)}
              onChange={onChange}
            />
            {label}
          </label>
        ))}
      </div>
    </StyledSelect>
  );
}

export default MultipleSelect;
