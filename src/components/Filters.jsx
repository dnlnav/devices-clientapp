import React, { useContext } from 'react';
import { deviceStore } from '../store/device/store';
import { TYPE_OPTIONS, SORT_OPTIONS } from '../utils/labels';
import {
  updateFilters,
  updateSortBy,
  openAddModal,
} from '../store/device/actions';
import { useForm } from 'react-hook-form';
import { StyledFilters } from './Filters.style';
import { StyledPrimaryButton } from './ui/Buttons.style';
import Select from './ui/Select';

function Filters() {
  const [{ filters, sortBy }, dispatch] = useContext(deviceStore);
  const { getValues, register } = useForm();

  const onFilterChange = () => {
    const updatedfilters = getValues('filters');
    dispatch(updateFilters(updatedfilters));
  };

  const onSortByChange = () => {
    const newSortBy = getValues('sortBy');
    dispatch(updateSortBy(newSortBy));
  };

  const onAddDevice = () => dispatch(openAddModal());

  const getFiltersText = () => {
    if (filters.length === Object.keys(TYPE_OPTIONS).length) return 'All';
    if (filters.length > 0)
      return filters.map((f) => TYPE_OPTIONS[f]).join(', ');
    return 'None';
  };

  return (
    <StyledFilters>
      <p>Device Type: {getFiltersText()}</p>
      <div>
        {Object.entries(TYPE_OPTIONS).map(([value, label]) => (
          <label htmlFor={value} key={value}>
            <input
              type="checkbox"
              name="filters"
              value={value}
              id={value}
              ref={register}
              defaultChecked={filters.includes(value)}
              onChange={onFilterChange}
            />
            {label}
          </label>
        ))}
      </div>
      <label htmlFor="sortBy">Sort By:</label>
      <Select
        name="sortBy"
        id="sortBy"
        defaultValue={sortBy}
        register={register}
        onChange={onSortByChange}
      >
        {Object.values(SORT_OPTIONS).map(({ key, value }) => (
          <option value={key} key={key}>
            {value}
          </option>
        ))}
      </Select>
      <StyledPrimaryButton onClick={onAddDevice}>Add</StyledPrimaryButton>
    </StyledFilters>
  );
}

export default Filters;
