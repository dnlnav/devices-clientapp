import {
  OPEN_ADD_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_MODALS,
  OPEN_EDIT_MODAL,
  UPDATE_FILTERS,
} from './actions';
import { SORT_OPTIONS } from '../../utils/labels';

export const initialState = {
  openModal: null,
  selectedDeviceData: {},
  filters: [],
  sortBy: SORT_OPTIONS.NONE,
};

const openModal = (state, { openModal, selectedDeviceData = {} }) => ({
  ...state,
  openModal,
  selectedDeviceData,
});

const updateFilters = (state, { filters }) => ({
  ...state,
  filters,
});

export const reducer = (state, { type, ...payload }) => {
  const actions = {
    [OPEN_ADD_MODAL]: openModal,
    [OPEN_EDIT_MODAL]: openModal,
    [OPEN_DELETE_MODAL]: openModal,
    [CLOSE_MODALS]: openModal,
    [UPDATE_FILTERS]: updateFilters,
    default: (state) => state,
  };
  return (actions[type] || actions['default'])(state, payload);
};
