import { DECREASE_SPEED, INCREASE_SPEED } from '../actionTypes';

export const increaseSpeed = () => ({
    type: INCREASE_SPEED
});

export const decreaseSpeed = () => ({
    type: DECREASE_SPEED
});