# Car API
Welcome to the Car API project! This project allows you to add, view, and delete cars through a RESTful API.

## Table of Contents
- Installation
- Usage
- Contributing
- License
  
## Installation
### Prerequisites
- Docker
- Docker Compose

### Steps 
1. Clone the repository:

```bash
git clone https://github.com/yourusername/car-api.git
cd car-api
```

2. Environment Variables:

Create a .env file in the root directory of the project and add the following variables:

```env
POSTGRES_USER=example
POSTGRES_PASSWORD=example
POSTGRES_DB=example
POSTGRES_HOST_AUTH_METHOD=trust
```
3. Build and Run the Application:

```sh
docker-compose up --build
```

## Usage 
### API Endpoints 
- Add a Car: `POST /api/cars`
- View Cars: `GET /api/cars`
- Delete a car: `DELETE /api/:id`

### Example Requests 

- Add a car:
 ```sh 
curl -X POST http://localhost:3000/api/cars -H "Content-Type: application/json" -d '{"make": "Toyota", "model": "Corolla", "year": 2020}'
```

- View Cars:
 ```sh 
curl http://localhost:3000/api/cars
```

- Delete a Car:
 ```sh 
 curl -X DELETE http://localhost:3000/api/cars/1
 ```

 ## Contributing
Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/your-feature-name
3. Make your changes.
4. Commit your changes: git commit -m 'Add some feature'
5. Push to the branch: git push origin feature/your-feature-name
6. Open a pull request.
7. Please make sure to update tests as appropriate.

## License
This project is licensed under the MIT License - see the LICENSE file for details.