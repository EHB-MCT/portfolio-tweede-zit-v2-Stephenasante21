# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), 
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Integration tests for car API, including tests for adding, updating, and deleting cars.
- Unit tests for carModel with comprehensive coverage, including handling of duplicate entries.
- Validation logic in carController to ensure POST requests with invalid data are rejected.

### Changed
- Refactored the `carModel.update` method to correctly return the updated car record.
- Updated the `carModel.add` method in tests to properly handle and simulate different ID generation on duplicate data.
- Increased Jest test timeouts to prevent false negatives in long-running integration tests.

### Fixed
- Fixed integration test failures related to PUT requests not returning the correct data.
- Addressed issues with database state consistency in tests, ensuring the correct number of cars are returned and manipulated.

## [Unreleased]
### Added
- Added test cases for handling the addition of cars with duplicate data.
- Enhanced mock implementations to simulate scenarios with duplicates.
- Revised test logic to ensure coverage of expected behaviors in both duplicate handling scenarios.

### Changed
- Updated the structure of test files for better readability and maintainability.
- Renamed `example.test.js` to `carModel.test.js` for clarity.

### Fixed
- Fixed issues related to improper handling of car model tests when dealing with invalid data inputs.

## [1.0.0] - 2024-08-15
### Added
- Initial release of the Car API.
- Basic CRUD operations for car entities.
- Database migrations and seeds for cars table.
- Unit and integration tests for car model.
- Docker setup with `docker-compose` for local development.
    