import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import { persistStore,autoRehydrate } from 'redux-persist';
const middlewares = [];

middlewares.push(thunkMiddleware);

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
      let store         = createStoreWithMiddleware(rootReducer, initialState);
      let persistor     = persistStore(store);
      return {store, persistor};
}
