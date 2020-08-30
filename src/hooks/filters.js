import { useContext } from 'react';
import { deviceStore } from '../store/device/store';

export function useFilters(list) {
  const [{ filters, sortBy }, dispatch] = useContext(deviceStore);

  const filterTypes = (device) =>
    !filters.length || filters.includes(device.type);
  // const sortBy = (device) => filters.contains(device.type);

  return list.filter(filterTypes).sort();
}
