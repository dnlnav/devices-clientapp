import {
  OPEN_ADD_MODAL,
  OPEN_DELETE_MODAL,
  CLOSE_MODALS,
  OPEN_EDIT_MODAL,
  UPDATE_FILTERS,
  UPDATE_SORT_BY,
} from './actions';
import { SORT_OPTIONS, TYPE_OPTIONS } from '../../utils/labels';

export const initialState = {
  openModal: null,
  selectedDeviceData: {},
  filters: Object.keys(TYPE_OPTIONS),
  sortBy: SORT_OPTIONS.NONE.key,
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

const updateSortBy = (state, { sortBy }) => ({
  ...state,
  sortBy,
});

export const reducer = (state, { type, ...payload }) => {
  const actions = {
    [OPEN_ADD_MODAL]: openModal,
    [OPEN_EDIT_MODAL]: openModal,
    [OPEN_DELETE_MODAL]: openModal,
    [CLOSE_MODALS]: openModal,
    [UPDATE_FILTERS]: updateFilters,
    [UPDATE_SORT_BY]: updateSortBy,
    default: (state) => state,
  };
  return (actions[type] || actions['default'])(state, payload);
};
