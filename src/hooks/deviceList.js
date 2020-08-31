import { useQuery } from 'react-query';
import { getDevicesQuery } from '../queries/device';
import { useFilters } from './filters';
import { GET_DEVICES_QUERY_KEY } from '../utils/labels';

export function useDeviceList() {
  const { isLoading, error, data } = useQuery(
    [GET_DEVICES_QUERY_KEY, {}],
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
