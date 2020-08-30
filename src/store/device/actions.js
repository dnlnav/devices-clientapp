import { MODALS } from '../../utils/labels';

export const OPEN_ADD_MODAL = 'OPEN_ADD_MODAL';
export const openAddModal = () => ({
  type: OPEN_ADD_MODAL,
  openModal: MODALS.ADD_UPDATE_DEVICE,
});

export const OPEN_EDIT_MODAL = 'OPEN_EDIT_MODAL';
export const openEditModal = (selectedDeviceData) => ({
  type: OPEN_EDIT_MODAL,
  openModal: MODALS.ADD_UPDATE_DEVICE,
  selectedDeviceData,
});

export const OPEN_DELETE_MODAL = 'OPEN_ADD_MODAL';
export const openDeleteModal = (selectedDeviceData) => ({
  type: OPEN_DELETE_MODAL,
  openModal: MODALS.DELETE_DEVICE,
  selectedDeviceData,
});

export const CLOSE_MODALS = 'CLOSE_MODALS';
export const closeModals = () => ({
  type: CLOSE_MODALS,
  openModal: null,
});

export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const updateFilters = (filters) => ({
  type: UPDATE_FILTERS,
  filters,
});
