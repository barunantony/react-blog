import { DECREASE_SPEED, INCREASE_SPEED } from '../actionTypes';

const initialState = {
    speed: 50
};

export default function(state=initialState, action) {
    switch(action.type) {
        case DECREASE_SPEED: {
            return {
                ...state,
                speed: state.speed - 5
            }
        }
        case INCREASE_SPEED: {
            return {
                ...state,
                speed: state.speed + 5
            }
        }
        default:
            return state;
    }
}