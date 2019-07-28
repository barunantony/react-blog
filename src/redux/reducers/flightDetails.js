import { CHANGE_FLIGHT_NUMBER, UPDATE_VALIDATION_ERROR_FLIGHT_NUMBER } from '../actionTypes';

const initialState = {
    data: {
        flightNumber: { value: '', errors: null}
    }
};

export default function(state=initialState, action) {
    switch(action.type) {
        case CHANGE_FLIGHT_NUMBER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    flightNumber: {
                        ...state.data.flightNumber,
                        value: action.payload,
                        errors: null
                    }
                }
            }
        }
        case UPDATE_VALIDATION_ERROR_FLIGHT_NUMBER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    flightNumber: {
                        ...state.data.flightNumber,
                        errors: action.payload
                    }
                }
            }
        }
        default:
            return state;
    }
}