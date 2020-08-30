import React, { useContext } from 'react';
import { deviceStore } from '../../store/device/store';
import { MODALS } from '../../utils/labels';
import AddUpdateDeviceModal from './AddUpdateDevice';
import DeleteDeviceModal from './DeleteDevice';
import styled from '@emotion/styled';

const StyledModal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.85);
  align-items: center;
  justify-content: center;

  .content-wrapper {
    background-color: white;
    border-radius: 5px;
  }
`;

const availableModals = {
  [MODALS.ADD_UPDATE_DEVICE]: AddUpdateDeviceModal,
  [MODALS.DELETE_DEVICE]: DeleteDeviceModal,
};

function Modal() {
  const [state] = useContext(deviceStore);
  const ModalContent = availableModals[state.openModal];
  return ModalContent ? (
    <StyledModal>
      <div className="content-wrapper">
        <ModalContent data={state.selectedDeviceData} />
      </div>
    </StyledModal>
  ) : null;
}

export default Modal;
