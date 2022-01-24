import * as ActionTypes from './ActionTypes';

// In this exercise, you practiced setting up a new property as part of the state in the Redux store. You set up actions and a new reducer to update it, as well as updating the combineReducers function with the new reducer. Then you also updated the CampsiteInfo component to transfer the management of the favorite state from the local component state to the Redux store. 

export const favorites = (state = [], action) => {
    switch (action.type) {
        case ActionTypes.ADD_FAVORITE:
            if (state.includes(action.payload)) {
                return state;
            }
            return state.concat(action.payload);

        default:
            return state;
    }
};
