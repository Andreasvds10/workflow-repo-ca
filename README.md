Workflow Repo

A front-end web application with testing and development tools configured for code quality and automation.

Features

User authentication (Login/Register)

Venue listing and details

Responsive design with Tailwind CSS

End-to-end testing with Playwright

Unit testing with Vitest

Code linting and formatting with ESLint & Prettier

Technologies

JavaScript (ES Modules)

Tailwind CSS

Playwright for E2E testing

Vitest for unit testing

ESLint & Prettier for code quality

Husky for pre-commit hooks

Prerequisites

Node.js (latest LTS version)

npm

Installation

Clone the repository:

git clone [your-repo-url]

Install dependencies:

npm install

Create a .env file in the root directory (see .env.example for required variables).

Running the Project

Start a local server:

npm start

Watch for CSS changes:

npm run dev

Testing

Run unit tests:

npm test

Run end-to-end tests:

npm run test:e2e

Environment Variables

Required environment variables:

USERNAME=your-username
PASSWORD=your-password

Code Quality

ESLint configuration for maintaining code quality

Prettier for consistent formatting

Husky pre-commit hooks to enforce:

Linting

Code formatting

Running tests

