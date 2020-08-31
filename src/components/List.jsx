import React, { useContext } from 'react';
import Device from './Device';
import { deviceStore } from '../store/device/store';
import { useDeviceList } from '../hooks/deviceList';
import Filters from './Filters';
import styled from 'styled-components';
import { pxToRem } from '../utils/styles';

const StyledList = styled.div`
  max-width: ${pxToRem(960)};
  margin: 4rem auto;
`;

function List() {
  // eslint-disable-next-line
  const [_, dispatch] = useContext(deviceStore);
  const [isLoading, error, deviceList] = useDeviceList();

  if (isLoading) return 'Loading...';
  if (error) return `Error: ${error.message}`;

  return (
    <StyledList>
      <Filters />
      {deviceList?.map((device) => (
        <Device {...device} key={device.id} />
      ))}
    </StyledList>
  );
}

export default List;
