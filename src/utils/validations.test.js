import { checkStateIsValid, isEmpty, isNotEmpty } from './validations';

describe('Validations', () => {
    describe('isEmpty', () => {
        it('should return true if value passed is empty string', () => {
            const val = isEmpty('');
            expect(val).toBeTruthy();
        });
        it('should return true if value passed is null', () => {
            const val = isEmpty(null);
            expect(val).toBeTruthy();
        });
        it('should return true if value passed is undefined', () => {
            const val = isEmpty(undefined);
            expect(val).toBeTruthy();
        });
        it('should return false if value passed zero', () => {
            const val = isEmpty(0);
            expect(val).toBeFalsy();
        });
        it('should return false if value passed negative value', () => {
            const val = isEmpty(-1);
            expect(val).toBeFalsy();
        });
        it('should return false if value passed is not empty', () => {
            const val = isEmpty('ss');
            expect(val).toBeFalsy();
        });
    });

    describe('checkStateIsValid', () => {
        it('should return array with fields failed if a state with field isNotEmpty is not having value', () => {
            const val = checkStateIsValid(
                {'flightName': '', date: '11/11/2009'},
                [
                    {key: 'flightName', validations: [isNotEmpty]},
                    {key: 'date', validations: [isEmpty]},
                ]
            );
            expect(val.length).toBe(2);
            expect(val).toEqual([
                { key: 'flightName', validation: 'isNotEmpty' },
                { key: 'date', validation: 'isEmpty' }
            ]);
        });

        it('should return empty array if a state with field isEmpty is not having value', () => {
            const val = checkStateIsValid(
                {'flightName': '', date: '11/11/2009'},
                [
                    {key: 'flightName', validations: [isEmpty]},
                    {key: 'date', validations: [isNotEmpty]},
                ]
            );

            expect(val.length).toBe(0);
        });
    });
});