import React, { useContext } from 'react';
import { deviceStore } from '../../store/device/store';
import { closeModals } from '../../store/device/actions';
import { deleteDeviceQuery } from '../../queries/device';
import { queryCache, useMutation } from 'react-query';

function DeleteDeviceModal({ data: { id, name } }) {
  // eslint-disable-next-line
  const [_, dispatch] = useContext(deviceStore);
  const [deleteDevice] = useMutation(deleteDeviceQuery, {
    onSuccess: () => queryCache.invalidateQueries('getDevices'),
  });

  const onDelete = () => {
    deleteDevice(id);
    dispatch(closeModals());
  };
  const onCancel = () => dispatch(closeModals());

  return (
    <div>
      <h3>Delete Device</h3>
      <p>Are you sure you want to delete {name}?</p>
      <button onClick={onDelete}>Continue</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default DeleteDeviceModal;
