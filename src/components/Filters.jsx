import React, { useContext, useState } from 'react';
import { deviceStore } from '../store/device/store';
import { TYPE_OPTIONS } from '../utils/labels';
import { updateFilters } from '../store/device/actions';

function Filters() {
  const [{ filters, sortBy }, dispatch] = useContext(deviceStore);
  const [updatedFilters] = useState(filters);

  const onFilterChange = () =>
    dispatch(updateFilters({ filters: updatedFilters }));

  return (
    <label htmlFor="filter">
      <select
        multiple={true}
        name="filter"
        id="filter"
        value={updatedFilters}
        onChange={onFilterChange}
      >
        {Object.entries(TYPE_OPTIONS).map(([value, label]) => (
          <option value={value} key={value}>
            {TYPE_OPTIONS(label)}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Filters;
