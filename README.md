# VueJs 3.x, ViteJs, and TypeScript Radio Website

This project is a Vue.js 3.x application built with Vite.js and TypeScript. It fetches and displays current track data from a JSON file provided by the radio station. The JSON file periodically updates as the radio station plays tracks, and the page contents are updated every 2 seconds. This README will guide you through setting up and using this project.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/)

## Getting Started

1.  Clone this repository to your local machine: `git clone https://github.com/deniszavadskiy/radio-station.git`

2.  Navigate to the project directory: `cd radio-station`

3.  Install project dependencies: `npm ci`

## Running the Server (CORS Issue Resolution)

To resolve CORS issues when fetching data from the radio API, a server is provided in the `server` folder. You need to run this server before launching the Vue.js app.

1.  Navigate to the server folder: `cd server`

2.  Start the server: `node index.js`

The server will be running on `http://localhost:3000` and proxy requests to the radio API to avoid CORS issues.

## Running the Vue.js App

After starting the server, you can launch the Vue.js app.

1.  Back in the root directory of the project, start the Vue.js development server: `npm run dev`

2.  The Vue.js app will be available at `http://localhost:PORT`. Open this URL in your web browser to access the radio website.

## Features

1.  **Track Display**: All tracks from the JSON file are displayed on the page. The "playing" item is at the top, followed by the "history" items in reverse chronological order.
2.  **Progress Bar**: The "playing" item features a progress bar indicating the playtime of the track.
3.  **Track Information**: For each track item, the following information is displayed:

    - Title
    - Artist
    - Image URL (as an image)
    - Duration
    - Start Time (in the local time of the browser)

## Styling

The styling of the page has been implemented with CSS to provide an appealing user interface. The styling is intentionally left open for customization according to your project's design guidelines.

## Project Structure

This project is structured following best practices to ensure easy integration into existing projects. Key directories and files include:

- `src/components`: Contains Vue.js components, organized for reusability and maintainability.
- `src/App.vue`: The root Vue.js component.
- `src/main.ts`: The main entry point of the Vue.js app.
- `src/services`: Includes API-related code, such as fetching data from the radio API.

## Conclusion

This Vue.js 3.x project, built with Vite.js and TypeScript, allows you to display current track data from a radio station's JSON file. It includes a server to resolve CORS issues when fetching data from the API, and the project is structured for easy integration into larger applications. Customize the styling to fit your design requirements and make use of the components as needed. Enjoy using and extending this radio website!
