import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import storage from 'redux-persist/es/storage';
import { persistStore, persistCombineReducers } from 'redux-persist';
import { campsites } from './campsites';
import { comments } from './comments';
import { promotions } from './promotions';
import { partners } from './partners';
import { favorites } from './favorites';

// In this exercise, you learned to persist the Redux store using the redux-persist library and rehydrate the store upon reloading the application.

// persistStore, persistCombineReducers persistant support to automatically update when there is a change to the state
// storage access to local storage on device

// first properties are requiried, debug will console log
const config = {
    key: 'root',
    storage,
    debug: true
}

export const ConfigureStore = () => {
    const store = createStore(
        persistCombineReducers(config, {
            campsites,
            comments,
            partners,
            promotions,
            favorites
        }),
        applyMiddleware(thunk, logger)
    );


    const persistor = persistStore(store);

    return { persistor, store };

}