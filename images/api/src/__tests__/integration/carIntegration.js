const request = require('supertest');
const knexfile = require('../../db/knexfile');
const app = require('../../app.js');
const db = require('knex')(knexfile.test);

beforeAll(async () => {
    await db.migrate.latest();
});

afterAll(async () => {
    await db.migrate.rollback();
    await db.destroy();
});

beforeEach(async () => {
    await db('cars').truncate();  
    await db.seed.run();  
});

describe('Car API Integration Tests', () => {

    test('POST /cars should add a car successfully', async () => {
        const newCar = { make: 'Toyota', model: 'Corolla', year: 2020 };
        const response = await request(app)
            .post('/cars')
            .send(newCar)
            .expect(201);

        expect(response.body.make).toBe('Toyota');
        expect(response.body.model).toBe('Corolla');
    }, 10000);

    test('POST /cars should not add a car without make, model, or year', async () => {
        const invalidCar = { make: '', model: '', year: 0 };
        const response = await request(app)
            .post('/cars')
            .send(invalidCar)
            .expect(400);

        expect(response.body.error).toBeDefined();
    }, 10000);

    test('GET /cars should return all cars', async () => {
        const response = await request(app)
            .get('/cars')
            .expect(200);

        expect(response.body.length).toBe(7);  
        expect(response.body[0].make).toBe('Toyota');
        expect(response.body[1].make).toBe('Honda');
    }, 10000);

    test('GET /cars/:id should return a single car by ID', async () => {
        const response = await request(app)
            .get('/cars/1')
            .expect(200);

        expect(response.body.model).toBe('Corolla');
    }, 10000);

    test('PUT /cars/:id should update a car successfully', async () => {
        const updatedCar = { make: 'Ford', model: 'Focus', year: 2017 };
    
        const response = await request(app)
            .put('/cars/1')  
            .send(updatedCar)
            .expect(200);
    
        expect(response.body.model).toBe('Focus');  
    }, 10000);
    

    test('DELETE /cars/:id should delete a car successfully', async () => {
        const response = await request(app)
            .delete('/cars/1')
            .expect(204);

        const cars = await db('cars').select('*');
        expect(cars.length).toBe(6);  
    }, 10000);
});
