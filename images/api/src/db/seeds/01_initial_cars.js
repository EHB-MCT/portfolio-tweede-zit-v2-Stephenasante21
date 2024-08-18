exports.seed = async function(knex) {  
    await knex('cars').insert([
      { make: 'Toyota', model: 'Corolla', year: 2020 },
      { make: 'Honda', model: 'Civic', year: 2018 },
      { make: 'Ford', model: 'Mustang', year: 2015 },
      { make: 'Tesla', model: 'Model S', year: 2021 },
      { make: 'Mazda', model: '3', year: 2016 },
      { make: 'Subaru', model: 'Impreza', year: 2019 },
      { make: 'Chevrolet', model: 'Malibu', year: 2017 }
    ]);
  
};