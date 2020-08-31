import React, { useContext } from 'react';
import { deviceStore } from '../../store/device/store';
import { closeModals } from '../../store/device/actions';
import { deleteDeviceQuery } from '../../queries/device';
import { queryCache, useMutation } from 'react-query';
import { StyledOutlinedButton, StyledAlertButton } from '../ui/Buttons.style';
import { StyledForm } from '../ui/Form.style';

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
    <StyledForm>
      <h3 className="heading">Delete Device</h3>
      <p className="text">Are you sure you want to delete {name}?</p>
      <div className="button-group">
        <StyledOutlinedButton onClick={onCancel}>Cancel</StyledOutlinedButton>
        <StyledAlertButton onClick={onDelete}>Continue</StyledAlertButton>
      </div>
    </StyledForm>
  );
}

export default DeleteDeviceModal;
