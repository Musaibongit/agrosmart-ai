
function changeLanguage(){

const lang =
document.getElementById("language").value;

if(lang === "hi"){

document.getElementById("title").innerText =
"स्मार्ट कृषि सलाहकार";

document.getElementById("subtitle").innerText =
"आधुनिक कृषि प्लेटफ़ॉर्म में आपकी सभी ज़रूरतें।";

document.getElementById("cropTitle").innerText =
"🌾 फसल सलाहकार";

document.getElementById("weatherTitle").innerText =
"☁ मौसम पूर्वानुमान";

document.getElementById("diseaseTitle").innerText =
"🧪 रोग पहचान";

document.getElementById("marketTitle").innerText =
"📈 बाजार मूल्य";

document.getElementById("cropBtn").innerText =
"फसल सुझाएँ";

document.getElementById("weatherBtn").innerText =
"मौसम देखें";

document.getElementById("diseaseBtn").innerText =
"पौधा जांचें";

}

else if(lang === "mr"){

document.getElementById("title").innerText =
"स्मार्ट कृषी सल्लागार";

document.getElementById("subtitle").innerText =
"आधुनिक शेती प्लॅटफॉर्ममध्ये आपल्याला आवश्यक सर्व काही.";

document.getElementById("cropTitle").innerText =
"🌾 पीक सल्लागार";

document.getElementById("weatherTitle").innerText =
"☁ हवामान अंदाज";

document.getElementById("diseaseTitle").innerText =
"🧪 रोग ओळख";

document.getElementById("marketTitle").innerText =
"📈 बाजार भाव";

document.getElementById("cropBtn").innerText =
"पीक सुचवा";

document.getElementById("weatherBtn").innerText =
"हवामान पहा";

document.getElementById("diseaseBtn").innerText =
"वनस्पती तपासा";

}

else{

document.getElementById("title").innerText =
"Smart Agriculture Advisor";

document.getElementById("subtitle").innerText =
"Everything you need in one modern agriculture platform.";

document.getElementById("cropTitle").innerText =
"🌾 Crop Advisor";

document.getElementById("weatherTitle").innerText =
"☁ Weather Forecast";

document.getElementById("diseaseTitle").innerText =
"🧪 Disease Detection";

document.getElementById("marketTitle").innerText =
"📈 Market Prices";

document.getElementById("cropBtn").innerText =
"Recommend Crop";

document.getElementById("weatherBtn").innerText =
"Get Weather";

document.getElementById("diseaseBtn").innerText =
"Analyze Plant";

}

}
