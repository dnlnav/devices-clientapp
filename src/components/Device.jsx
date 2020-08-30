import React, { useContext } from 'react';
import styled from '@emotion/styled';
import { TYPE_OPTIONS } from '../utils/labels';
import { deviceStore } from '../store/device/store';
import { openEditModal, openDeleteModal } from '../store/device/actions';

const StyledDevice = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
`;

function Device({ id, name, type, capacity }) {
  // eslint-disable-next-line
  const [_, dispatch] = useContext(deviceStore);

  const handleUpdate = () =>
    dispatch(openEditModal({ id, name, type, capacity }));
  const handleDelete = () => dispatch(openDeleteModal({ id, name }));

  return (
    <StyledDevice>
      <p>{name}</p>
      <p>{TYPE_OPTIONS[type] || ''}</p>
      <p>{capacity} GB</p>
      <button onClick={handleUpdate}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </StyledDevice>
  );
}

export default Device;
