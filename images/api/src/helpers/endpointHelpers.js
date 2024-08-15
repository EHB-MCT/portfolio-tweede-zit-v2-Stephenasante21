const helpers = require('../helpers/endpointHelpers');

describe('Helpers Tests', () => {
    test('should return false if car data is invalid', () => {
        const invalidCar = { make: '', model: '', year: null };
        expect(helpers.validateCarData(invalidCar)).toBe(false);
    });

    test('should return true if car data is valid', () => {
        const validCar = { make: 'Toyota', model: 'Camry', year: 2021 };
        expect(helpers.validateCarData(validCar)).toBe(true);
    });
});
