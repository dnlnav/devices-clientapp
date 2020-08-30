import React from 'react';
import List from './components/List';
import { ReactQueryConfigProvider } from 'react-query';
import Modal from './components/modals/Modal';
import { DeviceContextProvider } from './store/device/store';

const queryConfig = { queries: { refetchOnWindowFocus: false } };

function App() {
  return (
    <ReactQueryConfigProvider config={queryConfig}>
      <DeviceContextProvider>
        <Modal />
        <List />
      </DeviceContextProvider>
    </ReactQueryConfigProvider>
  );
}

export default App;
