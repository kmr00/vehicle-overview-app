# VehicleOverviewApp

The application includes a login page and an overview page for displaying vehicle data.
The application uses Angular's **in-memory web API** to simulate backend operations for
authentication and login functionality.

## Features
- **User Authentication**: Login with username and password, and store the username in session storage.
- **Vehicle Overview**: Display vehicle data in a table with filtering and sorting capabilities.
- **Responsive UI**: Using PrimeNG and PrimeFlex.

## Technologies Used
- **Angular** 15.0.0.
- **PrimeNg** 15.0.0.
- **PrimeFlex** 3.1.3.
- **Angular In-Memory Web API**: For mocking backend API responses.
- **RxJS**

## Application Pages
### Login Page
Login page where users can authenticate themselves using a username and password. 
Successful authentication stores the username in session storage and redirects 
the user to the vehicle overview page.

### Vehicle Overview Page
An overview page that displays vehicle data in a table with filtering and sorting capabilities.
This page is only accessible to authenticated users.

## Additional Features
### Auth Guards
Auth Guards are used to protect routes and ensure that only authenticated 
users can access certain parts of the application. If a user is not authenticated, 
they will be redirected to the login page.

### Login Guard
A Login Guard is used to prevent authenticated users from accessing the login page.
If a user is already authenticated, they will be redirected to the vehicle overview page.

## API Endpoints
The application interacts with the following API endpoints using the **in-memory web API**:

- **POST** /api/login: Authenticates a user.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
