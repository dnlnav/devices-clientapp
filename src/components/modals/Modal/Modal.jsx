import React, { useContext } from 'react';
import { deviceStore } from '../../../store/device/store';
import { MODALS } from '../../../utils/labels';
import AddUpdateDeviceModal from '../AddUpdateDevice';
import DeleteDeviceModal from '../DeleteDevice';
import { StyledModal } from './Modal.style';
import { closeModals } from '../../../store/device/actions';

const availableModals = {
  [MODALS.ADD_UPDATE_DEVICE]: AddUpdateDeviceModal,
  [MODALS.DELETE_DEVICE]: DeleteDeviceModal,
};

function Modal() {
  const [state, dispatch] = useContext(deviceStore);
  const ModalContent = availableModals[state.openModal];

  const onClickOutside = () => dispatch(closeModals());

  return ModalContent ? (
    <StyledModal onClick={onClickOutside}>
      <div
        className="content-wrapper"
        onClick={(event) => event.stopPropagation()}
      >
        <ModalContent data={state.selectedDeviceData} />
      </div>
    </StyledModal>
  ) : null;
}

export default Modal;
