import * as ActionTypes from './actionTypes';

export const Restaurants = (state = {
    isLoading: true,
    errMess: null,
    restaurants: []
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_RESTAURANTS:
            return{...state, isLoading: false, errMess: null, restaurants: action.payload}

        case ActionTypes.RESTAURANTS_LOADING:
            return{...state, isLoading: true, errMess: null, restaurants: []}
        
        case ActionTypes.RESTAURANTS_FAILED:
            return{...state, isLoading: false, errMess: action.payload, restaurants: []}
        
        default:
            return state;
    }
}