import React, { useContext } from 'react';
import { deviceStore } from '../../store/device/store';
import { MODALS } from '../../utils/labels';
import AddUpdateDeviceModal from './AddUpdateDevice';
import DeleteDeviceModal from './DeleteDevice';
import { StyledModal } from './Modal.style';

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
