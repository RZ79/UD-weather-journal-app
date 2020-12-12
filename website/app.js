/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey ='&appid=bbbc0e76eac0508deafe89bd1b8aa719&units=imperial';
// Create a new date instance dynamically with JS
let d = new Date();
let m = new Date(d).getMonth() + 1;
let newDate =  d.getDate() +'.'+ m +'.'+ d.getFullYear();

// Function called by event listener
document.getElementById('generate').addEventListener('click', results);
function results (e) {
  const zipValue = document.getElementById('zip').value;
  const feelings = document.getElementById('feelings').value;
  fetch(baseURL + zipValue + apiKey )
  .then(res => res.json()) 
   .then(function(data) {
    console.log(data)
     postData('/add', {date: newDate, temp: data.main.temp, userRes: feelings})
     updateUI();
   })
  .catch(error => console.log('Thats a wrong zip code')) 
  }
// Function to POST data 
const postData = async ( url = '', data = {}) => {
 console.log(data);
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data)
    });
      try {
        const newData = await response.json();
        console.log(newData);
       return newData;
      } catch(error) {
      console.log('error', error);
      }
    }
// function to update the dynamic UI
const updateUI = async () => {
  const request = await fetch('/all');
  try {
    const allData = await request.json();
    console.log(allData);
    document.getElementById('date').innerHTML = 'Today is : ' + allData.date;
    document.getElementById('temp').innerHTML = 'Temperature : ' + allData.temp + ' F';
    document.getElementById('content').innerHTML = 'You feel : ' + allData.userRes;
  } catch(error) {
    console.log("error", error);
  }
}

