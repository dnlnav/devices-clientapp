import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TYPE_OPTIONS } from '../../utils/labels';
import { deviceStore } from '../../store/device/store';
import { closeModals } from '../../store/device/actions';
import { useMutation, queryCache } from 'react-query';
import { addDeviceQuery, updateDeviceQuery } from '../../queries/device';
import { StyledPrimaryButton, StyledOutlinedButton } from '../ui/Buttons.style';
import { StyledInput, StyledForm } from '../ui/Form.style';
import Select from '../ui/Select';

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
    console.log({ data });
    const operationType = isUpdate ? updateDevice : addDevice;
    operationType(data);
    dispatch(closeModals());
  };
  const onCancel = () => dispatch(closeModals());

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      {isUpdate && (
        <input
          type="hidden"
          name="id"
          value={id}
          ref={register({ required: true })}
        />
      )}
      <h3 className="heading">{isUpdate ? 'Edit' : 'Add'} Device</h3>
      <label htmlFor="add-device-name">System Name*</label>
      <StyledInput
        className={`${errors.name ? 'error' : ''}`}
        type="text"
        id="add-device-name"
        name="name"
        defaultValue={name}
        ref={register({ required: true })}
      />
      <label htmlFor="add-device-type">Type*</label>
      <Select
        className={`${errors.type ? 'error' : ''}`}
        name="type"
        id="add-device-type"
        defaultValue={type}
        register={register({ require: true })}
      >
        {Object.entries(TYPE_OPTIONS).map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </Select>
      <label htmlFor="add-device-capacity">HDD Capacity (GB)*</label>
      <StyledInput
        className={`${errors.capacity ? 'error' : ''}`}
        type="number"
        name="capacity"
        id="add-device-capacity"
        defaultValue={capacity}
        ref={register({ required: true })}
      />
      <div className="button-group">
        <StyledOutlinedButton onClick={onCancel}>Cancel</StyledOutlinedButton>
        <StyledPrimaryButton type="submit">Continue</StyledPrimaryButton>
      </div>
    </StyledForm>
  );
}

export default AddUpdateDeviceModal;
