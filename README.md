# Workout-Buddy
# Workout Tracker App

This is a workout tracker application built using the MERN stack (MongoDB, Express, React, Node.js). The app allows users to track their workouts, monitor progress, and manage their fitness routines.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication and authorization
- Create, read, update, and delete (CRUD) operations for workouts
- Track exercise details, including type, duration, and intensity
- Monitor progress over time with charts and statistics
- Responsive design for mobile and desktop use

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Prabhjot-khera/Workout-Buddy.git
    cd Workout-Buddy
    ```

2. Install the server dependencies:
    ```bash
    cd backend
    npm install
    ```

3. Install the client dependencies:
    ```bash
    cd ../frontend
    npm install
    ```

4. Create a `.env` file in the `backend` directory and add the following environment variables:
    ```
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

5. Start the development server:
    ```bash
    # In the backend directory
    npm run dev
    ```

6. Start the React client:
    ```bash
    # In the frontend directory
    npm start
    ```

## Usage

- Register or log in to your account
- Add a new workout session with details about exercises, duration, and intensity
- View and edit your previous workout sessions
- Track your progress over time with charts and statistics

## Project Structure

workout-tracker/
├── backend/ # Express backend
│ ├── controllers/
│ ├── models/
│ ├── node_modules/
│ ├── routes/
│ ├── .env
│ ├── package-lock.json
│ ├── package.json
│ └── server.js
├── frontend/ # React frontend
│ ├── public/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ └── index.js
│ ├── package-lock.json
│ ├── package.json
│ └── README.md

markdown
Copy code

## Dependencies

### Backend (Express)

- express
- mongoose
- jsonwebtoken
- bcryptjs
- dotenv

### Frontend (React)

- react
- react-dom
- react-router-dom
- axios
- chart.js

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in an existing user
- `GET /api/workouts` - Get all workouts for the logged-in user
- `POST /api/workouts` - Add a new workout
- `PUT /api/workouts/:id` - Update a workout by ID
- `DELETE /api/workouts/:id` - Delete a workout by ID
