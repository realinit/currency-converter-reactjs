import { combineReducers } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
import todos from '../reducers/reducers';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';


const config = {
  key: 'root',
  storage:storage,
  debug: true,
  stateReconciler: autoMergeLevel2
};


const rootReducer = persistCombineReducers(config, {
    todos
});
export default rootReducer;

