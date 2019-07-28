import { CHANGE_FLIGHT_NUMBER, UPDATE_VALIDATION_ERROR_FLIGHT_NUMBER } from '../actionTypes';

export const changeFightNumber = (flightNumber) => ({
    type: CHANGE_FLIGHT_NUMBER,
    payload: flightNumber
});

export const updateFlightNumberValidationError = (errors) => ({
    type: UPDATE_VALIDATION_ERROR_FLIGHT_NUMBER,
    payload: errors
});