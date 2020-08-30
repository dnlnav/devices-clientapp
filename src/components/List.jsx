import React, { useContext } from 'react';
import Device from './Device';
import { deviceStore } from '../store/device/store';
import { openAddModal } from '../store/device/actions';
import { useDeviceList } from '../hooks/deviceList';
import Filters from './Filters';

function List() {
  // eslint-disable-next-line
  const [_, dispatch] = useContext(deviceStore);
  const [isLoading, error, deviceList] = useDeviceList();

  const onAddDevice = () => dispatch(openAddModal());

  if (isLoading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <div>
      <Filters />
      <button onClick={onAddDevice}>Add</button>
      {deviceList?.map((device) => (
        <Device {...device} key={device.id} />
      ))}
    </div>
  );
}

export default List;
