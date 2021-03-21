/* Global Variables */
const base = "http://api.openweathermap.org/data/2.5/weather?zip=";
const key = ",us&appid=f5fbb8b6effe29c3acbe88bfe27020bd&units=metric";

// Button Event Listener
document.getElementById('generate').addEventListener('click', performAction);

//main function
async function performAction(e)
{
    const zip = document.getElementById('zip').value;
    const userResponse = document.getElementById('feelings').value;

    await getData(base, zip, key).then((data) => {
        postData('/addData', {temperature: data, date: newDate, response: userResponse});
    }).then(updateUI());
}


// Get Data Function
const getData = async (base, zip, key) => {
    const response = await fetch(base+zip+key)
    try
    {
        const data = await response.json();
        const temp = data.main.temp;
        console.log(temp);
        return temp;
    } catch(err)
    {
        console.log("error", err);
    }
}

// POST Function
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data),
    });

    try
    {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error)
    {
        console.log("error", error)
    }
}

// Update UI
const updateUI = async () => {
    const request = await fetch('/get');
    try
    {
        const allData = await request.json();
        document.getElementById('date').innerHTML = allData.date;
        document.getElementById('temp').innerHTML = allData.temperature;
        document.getElementById('content').innerHTML = allData.response;
    } catch (err)
    {
        console.log('error', err);
    }
}


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 +'.'+ d.getDate()+'.'+ d.getFullYear();
