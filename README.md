# Weather-Journal App Project

## Overview
This project is an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Tools

in this Project we used 
HTML
CSS
JavaScript
Node.js
Express framework


## Environment
Node and Express should be installed on the local machine. The project file server.js require express(), and create an instance of their app using express.

The Express app instance pointed to the project folder with .html, .css, and .js files.


## Features
user can enter zip code of the country, and his feelings
and click 'generate' then he will recive the tempreature and the date. 

## Explanation
There is a JavaScript Object named projectData initiated in the file server.js to act as the app API endpoint.

in the server code the GET route returns the projectData object, and the POST route adds incoming data to projectData.

the API credentials from OpenWeatherMap website.

in the app.js ..
the credentials and the base url stored in global variables at the top of the app code.

getData is async function in that uses fetch() to make a GET request to the OpenWeatherMap API with the base url and the zip code that user entered and the API key.


After successful retrieval of the weather data, we will chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to the app.


Finally, there is another async function that is called after the completed POST request. This function retrieve data from our app and select the necessary elements on the DOM then update them.



