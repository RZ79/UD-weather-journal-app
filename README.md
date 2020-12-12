# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Extras
If you are interested in testing your code as you go, you can use `tests.js` as a template for writing and running some basic tests for your code.
___
## styles.css
* I add some modifications to the style of website.
 ___
## server.js
* I setup the environment to running with local server.
* `projectData` initiated in the file server.js to act as the app API endpoint.
* GET & POST Route that deal with the asynchronous functions in the client- side to return endpoint data `projectData`
 ## app.js
#### Global Variables 
* Define two variables `baseURL` , `apiKey` that reflects credentials on OpenWeatherMap.com.
### Date  
* Define variables of date to get the right date.
### APIs 
Event listeners to the click of button `generate` to work the `results` function that fetch OpenWeatherMap API then add a promises then post data by the variable name and call the function `updateUI` to updat the data , if the user enter an incorrect zipcode then print a message `That is a wrong zip code`.
    ___

#### postData 
* The function to post data.

#### updateUI
 * the function to update the dynamic UI
____

