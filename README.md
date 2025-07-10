<div align="center">
  <h1 align="center">Practical Test</h1>
<br/>
<a align="center" href="https://practical-test-dusky.vercel.app">View Page</a>
</div>



## Table of Contents

- [Key Features](#key-features)
- [Tech Stack & Architecture](#tech-stack--architecture)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation & Setup](#installation--setup)
- [Available Scripts](#available-scripts)

## Key Features
This project is developed to fulfill the Practical Test for Frontend Developer at PT Pertamina Trans Kontinental. The key features include:
- **Login Page**: A simple login form with username and password fields. Validates credentials against data stored in localStorage.
- **Admin Account Simulation**: Automatically stores a predefined admin account (admin_test / admin1234) into localStorage on initial load.
- **Login Validation**: Compares user input with the stored admin credentials and provides feedback for success or failure.
- **Home Page with User List**: After successful login, users are redirected to the Home page which displays a list of users in card format.

## Tech Stack & Architecture

This project is built on a modern, feature-driven architecture that is both scalable and maintainable.

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: [React](https://reactjs.org/) [@radix-ui](https://www.radix-ui.com/)
- **State Management**: [TanStack Query](https://tanstack.com/query/v5)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Tooling**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/), [Husky](https://typicode.github.io/husky/#/), [Commitlint](https://commitlint.js.org/#/)
- **Package Manager**: [pnpm](https://pnpm.io/)

The data flow typically follows this pattern:

## Getting Started

### Prerequisites

- Node.js (version >=22.0.0)
- pnpm (version >=10.0.0)

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/shdiqq/practical-test.git
    cd practical-test
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Available Scripts

| Script               | Description                                                                                                                                      |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `pnpm dev:turbo`     | Starts the app in development mode using **Turbopack** (experimental).                                                                           |
| `pnpm scan`          | Runs the dev server with Turbopack and performs a security scan of the app at `localhost:3000` using [react-scan](https://github.com/raunofreiberg/react-scan). |
| `pnpm build`         | Builds the app for production.                                    |
| `pnpm start`         | Starts the production server using the output from `pnpm build`.                                                                                 |
| `pnpm lint`          | Runs **ESLint** to detect and fix co                                                                                                             |
