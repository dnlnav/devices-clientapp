import { useQuery } from 'react-query';
import { getDevicesQuery } from '../queries/device';
import { useFilters } from './filters';

export function useDeviceList() {
  const { isLoading, error, data } = useQuery(
    ['getDevices', {}],
    getDevicesQuery
  );

  const deviceList =
    data?.map(({ id, system_name: name, type, hdd_capacity: capacity }) => ({
      id,
      name,
      type,
      capacity,
    })) ?? [];
  const filteredDeviceList = useFilters(deviceList);

  return [isLoading, error, filteredDeviceList];
}
