function recommendCrop(){

const soil=document.getElementById('soil').value;
const temp=parseInt(document.getElementById('temp').value);

let crop='';

if(soil==='Black Soil' && temp>=25){
crop='Cotton';
}
else if(soil==='Sandy Soil'){
crop='Groundnut';
}
else if(soil==='Red Soil'){
crop='Millets';
}
else{
crop='Rice';
}

document.getElementById('cropResult').innerText='Recommended Crop: '+crop;
}

function getWeather(){

const city=document.getElementById('city').value;

if(city===''){
document.getElementById('weatherResult').innerText='Please enter city';
return;
}

const temp=Math.floor(Math.random()*15)+20;

document.getElementById('weatherResult').innerText=
city+' Weather: '+temp+'°C | Humidity 65%';
}

function analyzePlant(){

const file=document.getElementById('plantFile').files[0];

if(!file){
document.getElementById('diseaseResult').innerText='Please upload image';
return;
}

let disease='Healthy Plant';

const name=file.name.toLowerCase();

if(name.includes('yellow')){
disease='Leaf Blight';
}
else if(name.includes('spot')){
disease='Leaf Spot Disease';
}

document.getElementById('diseaseResult').innerText='Result: '+disease;
}

function signup(){

const email=document.getElementById('signupEmail').value;
const password=document.getElementById('signupPassword').value;

localStorage.setItem('userEmail',email);
localStorage.setItem('userPassword',password);

document.getElementById('signupMsg').innerText='Signup Successful ✅';
}

function login(){

const email=document.getElementById('loginEmail').value;
const password=document.getElementById('loginPassword').value;

const savedEmail=localStorage.getItem('userEmail');
const savedPassword=localStorage.getItem('userPassword');

if(email===savedEmail && password===savedPassword){
document.getElementById('loginMsg').innerText='Login Successful ✅';
}
else{
document.getElementById('loginMsg').innerText='Invalid Credentials ❌';
}
}

function changeLanguage(){

const lang=document.getElementById('language').value;

if(lang==='hi'){

document.getElementById('title').innerText='स्मार्ट कृषि सलाहकार';
document.getElementById('subtitle').innerText='आधुनिक कृषि प्लेटफ़ॉर्म में आपकी सभी ज़रूरतें।';
document.getElementById('cropTitle').innerText='🌾 फसल सलाहकार';
document.getElementById('weatherTitle').innerText='☁ मौसम पूर्वानुमान';
document.getElementById('diseaseTitle').innerText='🧪 रोग पहचान';
document.getElementById('marketTitle').innerText='📈 बाजार मूल्य';
document.getElementById('cropBtn').innerText='फसल सुझाएँ';
document.getElementById('weatherBtn').innerText='मौसम देखें';
document.getElementById('diseaseBtn').innerText='पौधा जांचें';

}
else if(lang==='mr'){

document.getElementById('title').innerText='स्मार्ट कृषी सल्लागार';
document.getElementById('subtitle').innerText='आधुनिक शेती प्लॅटफॉर्ममध्ये आपल्याला आवश्यक सर्व काही.';
document.getElementById('cropTitle').innerText='🌾 पीक सल्लागार';
document.getElementById('weatherTitle').innerText='☁ हवामान अंदाज';
document.getElementById('diseaseTitle').innerText='🧪 रोग ओळख';
document.getElementById('marketTitle').innerText='📈 बाजार भाव';
document.getElementById('cropBtn').innerText='पीक सुचवा';
document.getElementById('weatherBtn').innerText='हवामान पहा';
document.getElementById('diseaseBtn').innerText='वनस्पती तपासा';

}
else{

document.getElementById('title').innerText='Smart Agriculture Advisor';
document.getElementById('subtitle').innerText='Everything you need in one modern agriculture platform.';
document.getElementById('cropTitle').innerText='🌾 Crop Advisor';
document.getElementById('weatherTitle').innerText='☁ Weather Forecast';
document.getElementById('diseaseTitle').innerText='🧪 Disease Detection';
document.getElementById('marketTitle').innerText='📈 Market Prices';
document.getElementById('cropBtn').innerText='Recommend Crop';
document.getElementById('weatherBtn').innerText='Get Weather';
document.getElementById('diseaseBtn').innerText='Analyze Plant';

}

}
