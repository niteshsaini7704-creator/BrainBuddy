/* =====================================
   BrainBuddy AI - Main Script
===================================== */


// Website Load

document.addEventListener("DOMContentLoaded", () => {

    console.log("BrainBuddy AI Started 🚀");

    loadMode();

});




// ===============================
// Dark / Light Mode
// ===============================


function toggleMode(){

    document.body.classList.toggle("light");

    localStorage.setItem(
        "theme",
        document.body.className
    );

}



function loadMode(){

    let theme = localStorage.getItem("theme");

    if(theme){

        document.body.className = theme;

    }

}





// ===============================
// Planner System
// ===============================


function saveTask(task){

    let tasks = JSON.parse(
        localStorage.getItem("tasks")
    ) || [];


    tasks.push(task);


    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}




function getTasks(){

    return JSON.parse(
        localStorage.getItem("tasks")
    ) || [];

}





function deleteTask(index){

    let tasks = getTasks();


    tasks.splice(index,1);



    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}






// ===============================
// Study Progress System
// ===============================


function addStudyHours(hours){

    let current = parseInt(getStudyHours()) || 0;


    current += hours;


    localStorage.setItem(
        "studyHours",
        current
    );

}




function getStudyHours(){

    return localStorage.getItem("studyHours") || 0;

}





function checkDailyReset(){

    let today = new Date().toDateString();


    let lastDate =
    localStorage.getItem("lastStudyDate");



    if(lastDate !== today){

        localStorage.setItem(
            "studyHours",
            0
        );


        localStorage.setItem(
            "lastStudyDate",
            today
        );

    }

}






// ===============================
// Quiz System
// ===============================


function saveQuizScore(score){

    localStorage.setItem(
        "quizScore",
        score
    );

}





function getQuizScore(){

    return localStorage.getItem("quizScore") || 0;

}







// ===============================
// Resume Storage
// ===============================


function saveResume(data){

    localStorage.setItem(
        "resume",
        data
    );

}





function getResume(){

    return localStorage.getItem("resume");

}






// ===============================
// Student Profile
// ===============================


function saveStudent(name){

    localStorage.setItem(
        "studentName",
        name
    );

}




function getStudent(){

    return localStorage.getItem("studentName") || "";

}






console.log("BrainBuddy AI Ready ✅");

const particlesContainer =
document.getElementById("particles");

if(particlesContainer){

for(let i=0;i<40;i++){

let particle =
document.createElement("div");

particle.classList.add("particle");

particle.style.left =
Math.random()*100+"%";

particle.style.animationDuration =
(5+Math.random()*10)+"s";

particle.style.animationDelay =
Math.random()*5+"s";

particlesContainer.appendChild(particle);

}

}
