import React, { useContext } from 'react';
import Device from './Device';
import { deviceStore } from '../store/device/store';
import { useDeviceList } from '../hooks/deviceList';
import Filters from './Filters';
import { StyledList } from './List.style';

function List() {
  // eslint-disable-next-line
  const [_, dispatch] = useContext(deviceStore);
  const [isLoading, error, deviceList] = useDeviceList();

  if (isLoading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <StyledList>
      <Filters />
      <div className="list-wrapper">
        {deviceList?.map((device) => (
          <Device {...device} key={device.id} />
        ))}
      </div>
    </StyledList>
  );
}

export default List;
