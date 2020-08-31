import React, { useContext } from 'react';
import { TYPE_OPTIONS } from '../utils/labels';
import { deviceStore } from '../store/device/store';
import { openEditModal, openDeleteModal } from '../store/device/actions';
import { StyledAlertButton, StyledPrimaryButton } from './ui/Buttons.style';
import { StyledDevice } from './Device.style';

function Device({ id, name, type, capacity }) {
  // eslint-disable-next-line
  const [_, dispatch] = useContext(deviceStore);

  const handleUpdate = () =>
    dispatch(openEditModal({ id, name, type, capacity }));
  const handleDelete = () => dispatch(openDeleteModal({ id, name }));

  return (
    <StyledDevice>
      <div className="content">
        <p>{name}</p>
        <p>{TYPE_OPTIONS[type] || ''}</p>
        <p>{capacity} GB</p>
      </div>
      <div className="actions">
        <StyledPrimaryButton onClick={handleUpdate}>Edit</StyledPrimaryButton>
        <StyledAlertButton onClick={handleDelete}>Delete</StyledAlertButton>
      </div>
    </StyledDevice>
  );
}

export default Device;
