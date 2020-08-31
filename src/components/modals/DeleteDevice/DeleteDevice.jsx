import React, { useContext } from 'react';
import { deviceStore } from '../../../store/device/store';
import { closeModals } from '../../../store/device/actions';
import { deleteDeviceQuery } from '../../../queries/device';
import { queryCache, useMutation } from 'react-query';
import { StyledAlertButton, LabelButton } from '../../../styles/Buttons.style';
import { StyledForm } from '../../../styles/Form.style';
import { GET_DEVICES_QUERY_KEY } from '../../../utils/labels';

function DeleteDeviceModal({ data: { id, name } }) {
  // eslint-disable-next-line
  const [_, dispatch] = useContext(deviceStore);
  const [deleteDevice] = useMutation(deleteDeviceQuery, {
    onSuccess: () => queryCache.invalidateQueries(GET_DEVICES_QUERY_KEY),
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
        <LabelButton onClick={onCancel}>Cancel</LabelButton>
        <StyledAlertButton onClick={onDelete}>Continue</StyledAlertButton>
      </div>
    </StyledForm>
  );
}

export default DeleteDeviceModal;
