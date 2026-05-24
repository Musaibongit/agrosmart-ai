
function changeLanguage(){

const lang=document.getElementById("language").value;

if(lang==="hi"){
document.getElementById("title").innerText="स्मार्ट कृषि सलाहकार";
document.getElementById("subtitle").innerText="आधुनिक कृषि प्लेटफ़ॉर्म में आपकी सभी ज़रूरतें।";
}

else if(lang==="mr"){
document.getElementById("title").innerText="स्मार्ट कृषी सल्लागार";
document.getElementById("subtitle").innerText="आधुनिक शेती प्लॅटफॉर्ममध्ये आपल्याला आवश्यक सर्व काही.";
}

else{
document.getElementById("title").innerText="Smart Agriculture Advisor";
document.getElementById("subtitle").innerText="Everything you need in one modern agriculture platform.";
}

}
