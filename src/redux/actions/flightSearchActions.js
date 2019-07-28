import { CHANGE_FLIGHT_NUMBER } from '../actionTypes';

export const changeFightNumber = (flightNumber) => ({
    type: CHANGE_FLIGHT_NUMBER,
    payload: flightNumber
});