# React Web App with Create React App and Popular Libraries

This is a sample React web application showcasing various libraries and tools for development.

## Introduction

This React web application is built using Create React App (CRA) and includes various popular libraries and tools for a modern development environment.

## Prerequisites

- Node.js and npm or Yarn installed on your development machine.

## Getting Started

Create a new React app with TypeScript using Create React App (CRA):

   npx create-react-app my-app --template typescript
   cd my-app

Install dependencies with Yarn:

yarn add antd husky eslint prettier react-router-dom

or with npm:<br/>
npm install antd husky eslint prettier react-router-dom

Eject from Create React App (CRA) to configure Craco:

yarn eject

or with npm:<br/>
npm run eject

Install Craco for customizing CRA without ejecting:

yarn add @craco/craco

or with npm:<br/>
npm install @craco/craco

Update package.json scripts to use Craco in scripts section:
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "craco eject"

Continue adding and configuring libraries and tools as needed, such as Redux, redux-persist, Formik, Axios, and others.

### Project Structure
  /src/assets: Static assets go here.
  /src/components: React components.
  /src/containers: Container components.
  /src/redux: Redux setup and reducers.
  /src/routes: Application routes.
  /src/services: API services.
  /src/styles: Global styles.
  /src/utils: Utility functions.
  /src/App.tsx: Application entry point.

### Available Scripts

In the project directory, you can run:

1. Start the development server:

    yarn start

    or with npm:<br/>
    npm start

2. Build the production-ready app:

    yarn build

    or with npm:<br/>
    npm run build

3. Run tests:

    yarn test

    or with npm:<br/>
    npm test

## Configuration

Configure environment variables in .env or .env.local as needed.

## Linting and Formatting

ESLint and Prettier are used for code linting and formatting.
Configure rules in .eslintrc.js and .prettierrc.js.

## State Management

State management is handled using Redux and @reduxjs/toolkit.
Redux persist is used for data persistence.
Redux logger is enabled for development.

Install Redux and related packages with Yarn:

  yarn add redux react-redux @reduxjs/toolkit redux-logger redux-persist redux-persist-transform-encrypt redux-persist-transform-filter redux-typescript

  or with npm:<br/>
  npm install redux react-redux @reduxjs/toolkit redux-logger redux-persist redux-persist-transform-encrypt redux-persist-transform-filter redux-typescript

## Routing

  React Router DOM is used for client-side routing.

  Install React Router DOM with Yarn:

  yarn add react-router-dom

  or with npm:<br/>
  npm install react-router-dom

## API Calls

  Axios is used for making API requests.
  API services are defined in /src/services.

  Install Axios with Yarn:

  yarn add axios

  or with npm:<br/>
  npm install axios

## Authentication

  JWT authentication is supported with the help of jwt-decode.

  Install jwt-decode with Yarn:

  yarn add jwt-decode

  or with npm:<br/>
  npm install jwt-decode

## Form Handling

  Formik is used for form handling.
  Yup is used for schema validation.
  
  Install Formik and Yup with Yarn:

  yarn add formik yup

  or with npm:<br/>
  npm install formik yup

## Styling

  Styled-components is used for styling.

  Install Styled-components with Yarn:

  yarn add styled-components

  or with npm:<br/>
  npm install styled-components

## Additional Libraries

  Additional libraries like Lodash, Moment, Universal Cookie, Flow, Leaflet, React Leaflet, and Less are integrated as needed.

  Install additional dependencies with Yarn or npm as required:

  Example with Yarn:<br/>
  yarn add lodash moment universal-cookie flow react-leaflet less

  Example with npm:<br/>
  npm install lodash moment universal-cookie flow react-leaflet less
