import React, { createContext, useReducer } from 'react';
import { reducer, initialState } from './reducer';

export const deviceStore = createContext();

const { Provider } = deviceStore;

export const DeviceContextProvider = ({ children }) => (
  <Provider value={useReducer(reducer, initialState)}>{children}</Provider>
);
