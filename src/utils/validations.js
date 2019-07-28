export const isEmpty = (value) => {
    return  value === undefined || (!isNaN(value) && (value === '' || value === null));
};

export const isNotEmpty = (value) => {
    return  !isEmpty(value);
};

/**
 * 
 * @param {*} state 
 * @param {*} fields : list of { key: state keys , validations:  [list of functions]} 
 */
export const checkStateIsValid = (state, fields) => {
    let valid = [];
    if (state && fields && Array.isArray(fields)) {
        //@todo: can be improved by running parallely
        console.log('fields', fields);
        fields.forEach(element => {
            if (valid.length > 0) {
                return;
            }
            console.log('e: ', element);
            if(Array.isArray(element.validations)) {
                console.log('e1', element.validations);
                element.validations.forEach(fn => {
                    console.log('fn', fn);
                    if(typeof fn === 'function') {
                        console.log('is a function', fn(state[element.key]));
                        if (!fn(state[element.key])) {
                            console.log('falsyyyy');
                            valid.push({key: element.key, validation: fn.name});
                            return;
                        }
                    }
                }); 
            }
        });
    }
    console.log('valid:', valid);
    return valid.length === 0;
};