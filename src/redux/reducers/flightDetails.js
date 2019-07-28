import { CHANGE_FLIGHT_NUMBER } from '../actionTypes';

const initialState = {
    data: {
        flightNumber: ''
    }
};

export default function(state=initialState, action) {
    switch(action.type) {
        case CHANGE_FLIGHT_NUMBER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    flightNumber: action.payload
                }
            }
        }
        default:
            return state;
    }
}