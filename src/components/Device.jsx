import React, { useContext } from 'react';
import { TYPE_OPTIONS } from '../utils/labels';
import { deviceStore } from '../store/device/store';
import { openEditModal, openDeleteModal } from '../store/device/actions';
import {
  StyledOutlinedButton,
  StyledOutlinedAlertButton,
} from './ui/Buttons.style';
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
        <p className="name">{name}</p>
        <p className="type">{TYPE_OPTIONS[type] || ''}</p>
        <p className="capacity">{capacity} GB</p>
      </div>
      <div className="actions">
        <StyledOutlinedButton onClick={handleUpdate}>Edit</StyledOutlinedButton>
        <StyledOutlinedAlertButton onClick={handleDelete}>
          Delete
        </StyledOutlinedAlertButton>
      </div>
    </StyledDevice>
  );
}

export default Device;
