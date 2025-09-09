# Test-Project

This project contains end-to-end (E2E) tests for a API Gateway setup using Cypress.

## Project Structure

- `cypress/` - Cypress E2E tests, selectors, fixtures, and support files
- `docker-compose.yml` - Docker Compose file to spin up Gateway and Postgres
- `.github/workflows/tests.yml` - GitHub Actions workflow for running E2E tests
- `package.json` - Project dependencies and scripts

## Cypress Directory Overview

- [e2e](https://github.com/kp721995/Test-Project/tree/main/cypress/e2e) : Contains Cypress test specifications for validating API Gateway functionality.

- [fixtures](https://github.com/kp721995/Test-Project/tree/main/cypress/fixtures) : Holds static test data (JSON) used to provide input for tests.

- [selectors](https://github.com/kp721995/Test-Project/tree/main/cypress/selectors) : Centralizes CSS selectors and element locators, making tests easier to maintain and update when UI changes.

- [support](https://github.com/kp721995/Test-Project/tree/main/cypress/support) : Includes reusable utilities and page object models to streamline test writing and organization.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/)

### Setup

1. Install dependencies:

    ```sh
    npm install
    ```

2. Start Gateway and Postgres using Docker Compose:

    ```sh
    docker compose up -d
    ```

3. Run Cypress tests:

    - Open Cypress UI:

        ```sh
        npm run cy:open
        ```

    - Run tests in headless mode (Github Actions [Job Example](https://github.com/kp721995/Test-Project/actions/runs/17570372483)):

        ```sh
        npm run cy:run
        ```

    - Run tests in Chrome:

        ```sh
        npm run cy:run:chrome
        ```

## Test Reports

- Mochawesome HTML reports are generated in [cypress-mochawesome-reporter](https://github.com/LironEr/cypress-mochawesome-reporter) after running tests.

## Continuous Integration

- [tests.yml](https://github.com/kp721995/Test-Project/blob/main/.github/workflows/tests.yml) : E2E tests are automatically run via GitHub Actions 

