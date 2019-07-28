import { emptyFieldErrorMessage } from "../constants";

export const isEmpty = (value) => {
    return  value === undefined || (!isNaN(value) && (value === '' || value === null));
};

export const isNotEmpty = (value) => {
    return  !isEmpty(value);
};

const messages = {
    isNotEmpty : emptyFieldErrorMessage,
    isEmpty : emptyFieldErrorMessage
}

/**
 * 
 * @param {*} state 
 * @param {*} fields : list of { key: state keys , validations:  [list of functions]} 
 */
export const checkStateIsValid = (state, fields) => {
    let valid = [];
    if (state && fields && Array.isArray(fields)) {
        //@todo: can be improved by running parallely
        fields.forEach(element => {
            if(Array.isArray(element.validations)) {
                element.validations.forEach(fn => {
                    if(typeof fn === 'function') {
                        if (!fn(state[element.key])) {
                            valid.push({key: element.key, validation: messages[fn.name]});
                            return;
                        }
                    }
                }); 
            }
        });
    }
    return valid;
};