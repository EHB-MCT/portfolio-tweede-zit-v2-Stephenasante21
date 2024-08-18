const carModel = require('../../models/carModel');

// Mock the carModel methods
jest.mock('../../models/carModel', () => ({
    getAll: jest.fn(),
    getById: jest.fn(),
    add: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
}));

describe('Car Model Tests', () => {
    beforeEach(() => {
        // Clear all instances and calls to constructor and all methods:
        jest.clearAllMocks();
    });

    test('should add a car successfully', async () => {
        const newCar = { make: 'Toyota', model: 'Corolla', year: 2020 };
        carModel.add.mockResolvedValue([{ ...newCar, id: 1 }]);

        const result = await carModel.add(newCar);
        expect(result[0].make).toBe('Toyota');
        expect(carModel.add).toHaveBeenCalledWith(newCar);
    });

    test('should delete a car successfully', async () => {     
        carModel.remove.mockResolvedValue(1);

        const result = await carModel.remove(1);
        expect(result).toBe(1);
        expect(carModel.remove).toHaveBeenCalledWith(1);
    });

    test('should update a car successfully', async () => {
        const updatedCar = { make: 'Ford', model: 'Focus', year: 2017 };
        carModel.update.mockResolvedValue([{ ...updatedCar, id: 1 }]);

        const result = await carModel.update(1, updatedCar);
        expect(result[0].model).toBe('Focus');
        expect(carModel.update).toHaveBeenCalledWith(1, updatedCar);
    });

    test('should return null when updating a non-existent car', async () => {
        const nonExistentId = 9999;
        const updatedCar = { make: 'Ford', model: 'Focus', year: 2017 };
        carModel.update.mockResolvedValue([]);

        const result = await carModel.update(nonExistentId, updatedCar);
        expect(result.length).toBe(0);
        expect(carModel.update).toHaveBeenCalledWith(nonExistentId, updatedCar);
    });

    test('should not add a car without make, model, or year', async () => {
        const invalidCar = { make: '', model: '', year: null };
        carModel.add.mockRejectedValue(new Error('Invalid car data'));

        await expect(carModel.add(invalidCar)).rejects.toThrow('Invalid car data');
        expect(carModel.add).toHaveBeenCalledWith(invalidCar);
    });

    test('should handle adding a car with duplicate data', async () => {
        const car = { make: 'Toyota', model: 'Corolla', year: 2020 };
    
        // First call returns ID 1
        carModel.add.mockResolvedValueOnce([{ ...car, id: 1 }]);
    
        // Second call returns ID 2
        carModel.add.mockResolvedValueOnce([{ ...car, id: 2 }]);
    
        const result1 = await carModel.add(car);
        const result2 = await carModel.add(car);
    
        expect(result1[0].id).not.toBe(result2[0].id); // IDs should be different
        expect(carModel.add).toHaveBeenCalledTimes(2);
    });
    

    /*test('should throw an error when adding a car with duplicate data', async () => {
        const car = { make: 'Toyota', model: 'Corolla', year: 2020 };
    
        // First call returns successfully
        carModel.add.mockResolvedValue([{ ...car, id: 1 }]);
    
        // Second call throws an error, simulating duplicate rejection
        carModel.add.mockRejectedValue(new Error('Duplicate entry'));
    
        await carModel.add(car); // First add should succeed
        await expect(carModel.add(car)).rejects.toThrow('Duplicate entry'); // Second should fail
        expect(carModel.add).toHaveBeenCalledTimes(2);
    });*/
    
    test('should return 0 when deleting a non-existent car', async () => {
        const nonExistentId = 9999;
        carModel.remove.mockResolvedValue(0);

        const result = await carModel.remove(nonExistentId);
        expect(result).toBe(0);
        expect(carModel.remove).toHaveBeenCalledWith(nonExistentId);
    });

    test('should return an empty array when there are no cars', async () => {
        carModel.getAll.mockResolvedValue([]);

        const cars = await carModel.getAll();
        expect(cars).toEqual([]);
        expect(carModel.getAll).toHaveBeenCalledTimes(1);
    });

    test('should get all cars', async () => {
        const cars = [
            { make: 'Mazda', model: '3', year: 2016 },
            { make: 'Subaru', model: 'Impreza', year: 2019 },
        ];
        carModel.getAll.mockResolvedValue(cars);

        const result = await carModel.getAll();
        expect(result.length).toBe(2);
        expect(carModel.getAll).toHaveBeenCalledTimes(1);
    });

    test('should get a car by ID', async () => {
        const car = { id: 1, make: 'Tesla', model: 'Model S', year: 2021 };
        carModel.getById.mockResolvedValue(car);

        const result = await carModel.getById(1);
        expect(result.model).toBe('Model S');
        expect(carModel.getById).toHaveBeenCalledWith(1);
    });

    test('should return null when getting a car by an invalid ID', async () => {
        const invalidId = 'abc'; // Non-numeric ID
        carModel.getById.mockResolvedValue(null);

        const result = await carModel.getById(invalidId);
        expect(result).toBeNull();
        expect(carModel.getById).toHaveBeenCalledWith(invalidId);
    });
});
