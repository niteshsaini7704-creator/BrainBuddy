/* =====================================
   BrainBuddy AI - Main Script
===================================== */

document.addEventListener("DOMContentLoaded", () => {
    console.log("BrainBuddy AI Started 🚀");
});

// Study Progress System
function addStudyHours(hours){
    let current = parseInt(getStudyHours()) || 0;
    current += hours;
    localStorage.setItem("studyHours", current);
}

function getStudyHours(){
    return localStorage.getItem("studyHours") || 0;
}

function checkDailyReset(){
    let today = new Date().toDateString();
    let lastDate = localStorage.getItem("lastStudyDate");
    if(lastDate !== today){
        localStorage.setItem("studyHours", 0);
        localStorage.setItem("lastStudyDate", today);
    }
}

// Quiz System Score Storage
function saveQuizScore(score){
    localStorage.setItem("quizScore", score);
}

function getQuizScore(){
    return localStorage.getItem("quizScore") || 0;
}
