

# Project: Backend API with Express.js and Moment.js

This project is a simple Node.js application that creates a RESTful API using Express.js and utilizes Moment.js for handling date and time. The API provides specific information in JSON format based on query parameters received through HTTP GET requests.

## Project Structure

- **app.js**: The main application file that sets up the Express.js server and defines the API endpoints.

- **package.json**: The project's package configuration file that includes project metadata, dependencies, and scripts.

## Requirements

The API serves the following information:

1. **Slack Name**: The response includes the `slack_name` passed as a GET request query parameter.

2. **Current Day of the Week**: The API displays the current day of the week in full format (e.g., Monday, Tuesday, etc.).

3. **Current UTC Time**: It returns the current UTC time, accurate within a +/-2 minute window. If the current time is not within this window, it provides the actual current time.

4. **Track**: The response displays the track based on the `track` GET parameter passed to the endpoint. In this project, the default track is set to "backend."

5. **GitHub File URL**: It includes a direct link to a specific file in a GitHub repository. You can configure the GitHub repository URL and file name in the `app.js` file.

6. **GitHub Repo URL**: The API includes a link to the main page of the GitHub repository containing the project's entire source code.

7. **Status Code**: The API returns a status code of 200 (Success) as an integer.

## Running the Application

1. Make sure you have Node.js and npm installed on your machine.

2. Install project dependencies by running:

   ```bash
   npm install
   ```

3. Start the application locally with the following command:

   ```bash
   npm start
   ```

   The API server will start at `http://localhost:3000` by default.

4. To access the API, make GET requests using a web browser or tools like cURL or Postman to the following URL:

   ```
   http://localhost:3000/api?slack_name=example_name&track=backend
   ```

   Replace the query parameters with your desired values.

## Deploying to a Server

To deploy this application to a server:

1. Upload all project files to your server.

2. Make sure Node.js and npm are installed on your server.

3. Install project dependencies by running:

   ```bash
   npm install
   ```

4. Start the application on the server by running:

   ```bash
   npm start
   ```

   Your API should now be accessible on your server.

## Dependencies

- [Express.js](https://expressjs.com/): A minimal and flexible Node.js web application framework.

- [Moment.js](https://momentjs.com/): A JavaScript library for parsing, formatting, and manipulating dates and times.


