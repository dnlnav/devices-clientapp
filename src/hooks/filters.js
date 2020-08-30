import { useContext } from 'react';
import { deviceStore } from '../store/device/store';
import { SORT_OPTIONS } from '../utils/labels';

const sortFunctions = {
  [SORT_OPTIONS.NONE.key]: () => 0,
  [SORT_OPTIONS.NAME.key]: (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  },
  [SORT_OPTIONS.CAPACITY.key]: (a, b) => a.capacity - b.capacity,
};

export function useFilters(list) {
  const [{ filters, sortBy }] = useContext(deviceStore);

  const filterTypes = (device) => filters.includes(device.type);
  const sortByFunc =
    sortFunctions[sortBy] || sortFunctions[SORT_OPTIONS.NONE.key];

  return list.filter(filterTypes).sort(sortByFunc);
}
