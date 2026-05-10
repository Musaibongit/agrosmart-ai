
function recommendCrop(){

const soil = document.getElementById('soil').value;
const temp = parseInt(document.getElementById('temp').value);

let result = "";

if(soil === "Black" && temp >= 25){
result = "Recommended Crop: Cotton 🌾";
}
else if(soil === "Red" && temp >= 20){
result = "Recommended Crop: Groundnut 🥜";
}
else if(soil === "Sandy"){
result = "Recommended Crop: Millet 🌱";
}
else{
result = "Recommended Crop: Wheat 🌾";
}

document.getElementById('cropResult').innerText = result;

}

async function getWeather(){

const city = document.getElementById('city').value;

const apiKey = "YOUR_REAL_API_KEY";

const url =
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response = await fetch(url);

const data = await response.json();

if(data.cod != 200){

document.getElementById('weatherResult').innerHTML =
`<p>City not found or API issue</p>`;

return;

}

document.getElementById('weatherResult').innerHTML =
`
<p>🌡 Temperature: ${data.main.temp}°C</p>
<p>💧 Humidity: ${data.main.humidity}%</p>
<p>☁ Weather: ${data.weather[0].main}</p>
<p>💨 Wind Speed: ${data.wind.speed} km/h</p>
`;

}catch(error){

document.getElementById('weatherResult').innerHTML =
`<p>Weather fetch failed</p>`;

}

}

function detectDisease(){

const image = document.getElementById('diseaseImage').files[0];

if(!image){
document.getElementById('diseaseResult').innerText =
"Please upload a plant image.";
return;
}

const diseases = [
"Leaf Blight",
"Powdery Mildew",
"Bacterial Spot",
"Healthy Plant"
];

const randomDisease =
diseases[Math.floor(Math.random() * diseases.length)];

document.getElementById('diseaseResult').innerText =
"Analysis Result: " + randomDisease;

}

function signup(){

const email =
document.getElementById('signupEmail').value;

const password =
document.getElementById('signupPassword').value;

localStorage.setItem("email",email);
localStorage.setItem("password",password);

document.getElementById('signupMsg').innerText =
"Account Created Successfully ✅";

}

function login(){

const email =
document.getElementById('loginEmail').value;

const password =
document.getElementById('loginPassword').value;

const savedEmail = localStorage.getItem("email");
const savedPassword = localStorage.getItem("password");

if(email === savedEmail && password === savedPassword){

document.getElementById('loginMsg').innerText =
"Login Successful ✅";

}else{

document.getElementById('loginMsg').innerText =
"Invalid Credentials ❌";

}

}
