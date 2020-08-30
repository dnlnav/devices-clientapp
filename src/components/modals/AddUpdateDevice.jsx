import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TYPE_OPTIONS } from '../../utils/labels';
import { deviceStore } from '../../store/device/store';
import { closeModals } from '../../store/device/actions';
import { useMutation, queryCache } from 'react-query';
import { addDeviceQuery, updateDeviceQuery } from '../../queries/device';

function AddUpdateDeviceModal({ data = {} }) {
  const { id, name, type, capacity } = data;
  const isUpdate = !!id;

  // eslint-disable-next-line
  const [_, dispatch] = useContext(deviceStore);
  const { register, handleSubmit, errors } = useForm();
  const [addDevice] = useMutation(addDeviceQuery, {
    onSuccess: () => queryCache.invalidateQueries('getDevices'),
  });
  const [updateDevice] = useMutation(updateDeviceQuery, {
    onSuccess: () => queryCache.invalidateQueries('getDevices'),
  });

  const onSubmit = (data) => {
    const operationType = isUpdate ? updateDevice : addDevice;
    operationType(data);
    dispatch(closeModals());
  };
  const onCancel = () => dispatch(closeModals());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="id" value={id} ref={register({ required: true })} />
      <h3>{isUpdate ? 'Edit' : 'Add'} Device</h3>
      <label htmlFor=""></label>
      <input
        type="text"
        name="name"
        defaultValue={name}
        ref={register({ required: true })}
      />
      <label htmlFor=""></label>
      <select
        name="type"
        id=""
        defaultValue={type}
        ref={register({ require: true })}
      >
        {Object.entries(TYPE_OPTIONS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <label htmlFor=""></label>
      <input
        type="number"
        name="capacity"
        defaultValue={capacity}
        ref={register({ required: true })}
      />
      <button type="submit">Continue</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
}

export default AddUpdateDeviceModal;
