import axios from 'axios';

const getDevicesEndpoint = (id) => {
  const idPath = id ? `/${id}` : '';
  return [process.env.REACT_APP_DEVICES_ENDPOINT, idPath].join('');
};

export const getDevicesQuery = async () => {
  const { data } = await axios.get(getDevicesEndpoint());
  return data;
};

export const addDeviceQuery = async ({ name, type, capacity }) =>
  axios.post(getDevicesEndpoint(), {
    system_name: name,
    type: type,
    hdd_capacity: capacity,
  });

export const updateDeviceQuery = async ({ id, name, type, capacity }) =>
  axios.put(getDevicesEndpoint(id), {
    system_name: name,
    type: type,
    hdd_capacity: capacity,
  });

export const deleteDeviceQuery = async (id) => axios.delete(getDevicesEndpoint(id));
