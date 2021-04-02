import { createStore, createHook } from 'react-sweet-state';
import actions from './actions';
// This is the value of the store on initialisation

const AppStore = createStore({
  initialState: {
    language: null,
    token: null,
    CharityName: 'Mersal',
    Type: 'charity',
    Address: '15th el bahr street',
    expiringToken: null,
  },
  actions,
});

export const useApp = createHook(AppStore);
