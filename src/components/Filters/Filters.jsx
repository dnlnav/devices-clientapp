import React, { useContext } from 'react';
import { deviceStore } from '../../store/device/store';
import { TYPE_OPTIONS, SORT_OPTIONS } from '../../utils/labels';
import {
  updateFilters,
  updateSortBy,
  openAddModal,
} from '../../store/device/actions';
import { useForm } from 'react-hook-form';
import { StyledFilters } from './Filters.style';
import { StyledPrimaryButton } from '../../styles/Buttons.style';
import Select from '../ui/Select';
import MultipleSelect from '../ui/MultipleSelect';

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

  return (
    <StyledFilters>
      <div className="filter-group">
        <p>Device Type:</p>
        <MultipleSelect
          items={TYPE_OPTIONS}
          selected={filters}
          onChange={onFilterChange}
          register={register}
        />
      </div>
      <div className="filter-group">
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
      </div>
      <StyledPrimaryButton onClick={onAddDevice}>Add</StyledPrimaryButton>
    </StyledFilters>
  );
}

export default Filters;
