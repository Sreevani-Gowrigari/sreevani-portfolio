/* ===========================
      PREMIUM DARK MODE
=========================== */

const themeToggle = document.getElementById("theme-toggle");

const body = document.body;

const icon = themeToggle.querySelector("i");



// Load Saved Theme

if(localStorage.getItem("theme")==="light"){

    body.classList.add("light-mode");

    icon.classList.remove("fa-moon");

    icon.classList.add("fa-sun");

}

themeToggle.addEventListener("click",()=>{

    body.classList.toggle("light-mode");

    if(body.classList.contains("light-mode")){

        icon.classList.remove("fa-moon");

        icon.classList.add("fa-sun");

        localStorage.setItem("theme","light");

    }

    else{

        icon.classList.remove("fa-sun");

        icon.classList.add("fa-moon");

        localStorage.setItem("theme","dark");

    }

});