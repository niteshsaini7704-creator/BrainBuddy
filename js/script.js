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
// Productivity Tracker
// ===============================


function saveStudyHours(hours){


    localStorage.setItem(

        "studyHours",

        hours

    );


}




function getStudyHours(){


    return localStorage.getItem(

        "studyHours"

    ) || 0;


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


    return localStorage.getItem(

        "quizScore"

    ) || 0;


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


    return localStorage.getItem(

        "resume"

    );


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


    return localStorage.getItem(

        "studentName"

    ) || "Student";


}




console.log("BrainBuddy AI Ready ✅");
