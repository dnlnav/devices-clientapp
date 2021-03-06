import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { TYPE_OPTIONS, GET_DEVICES_QUERY_KEY } from '../../../utils/labels';
import { deviceStore } from '../../../store/device/store';
import { closeModals } from '../../../store/device/actions';
import { useMutation, queryCache } from 'react-query';
import { addDeviceQuery, updateDeviceQuery } from '../../../queries/device';
import {
  StyledPrimaryButton,
  LabelButton,
} from '../../../styles/Buttons.style';
import { StyledInput, StyledForm } from '../../../styles/Form.style';
import Select from '../../ui/Select';

function AddUpdateDeviceModal({ data = {} }) {
  const { id, name, type, capacity } = data;
  const isUpdate = !!id;

  // eslint-disable-next-line
  const [_, dispatch] = useContext(deviceStore);
  const { register, handleSubmit, errors, setValue, getValues } = useForm();
  const [addDevice] = useMutation(addDeviceQuery, {
    onSuccess: () => queryCache.invalidateQueries(GET_DEVICES_QUERY_KEY),
  });
  const [updateDevice] = useMutation(updateDeviceQuery, {
    onSuccess: () => queryCache.invalidateQueries(GET_DEVICES_QUERY_KEY),
  });

  const onSubmit = (data) => {
    const operationType = isUpdate ? updateDevice : addDevice;
    operationType(data);
    dispatch(closeModals());
  };
  const onCancel = () => dispatch(closeModals());

  const onNameChange = () => setValue('name', getValues('name').toUpperCase());

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
        onChange={onNameChange}
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
        ref={register({ required: true, min: 0 })}
      />
      <div className="button-group">
        <LabelButton onClick={onCancel}>Cancel</LabelButton>
        <StyledPrimaryButton type="submit">Continue</StyledPrimaryButton>
      </div>
    </StyledForm>
  );
}

export default AddUpdateDeviceModal;
