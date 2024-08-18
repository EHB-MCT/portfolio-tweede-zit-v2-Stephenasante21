const Car = require('../models/carModel');

exports.getAllCars = async (req, res) => {
    const cars = await Car.getAll();
    res.json(cars);
};

exports.getCarById = async (req, res) => {
    const carId = parseInt(req.params.id);
    const car = await Car.getById(carId);
    if (!car) {
        return res.status(404).json({ error: 'Car not found' });
    }
    res.json(car);
};

exports.addCar = async (req, res) => {
    const { make, model, year } = req.body;

    if (!make || !model || !year) {
        return res.status(400).json({ error: 'Make, model, and year are required' });
    }

    const car = await Car.add(req.body);
    res.status(201).json(car);
};

exports.updateCar = async (req, res) => {
    const carId = parseInt(req.params.id);
    const updates = req.body;
    const car = await Car.update(carId, updates);
    if (!car) {
        return res.status(404).json({ error: 'Car not found' });
    }
    res.json(car);
};

exports.deleteCar = async (req, res) => {
    const carId = parseInt(req.params.id);
    await Car.remove(carId);
    res.status(204).end();
};