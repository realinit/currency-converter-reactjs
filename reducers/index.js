
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import reducers from '../reducers/reducers';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const config = {
    key: 'root',
    storage: storage,
    debug: true,
    stateReconciler: autoMergeLevel2
};


const rootReducer = persistCombineReducers(config, {
    converter:reducers
});
export default rootReducer;

