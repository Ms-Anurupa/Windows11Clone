// let taskbar = document.getElementsByClassName("taskbar")[0];
// let startmenu = document.getElementsByClassName("startmenu")[0];

// taskbar.addEventListener("click", () => { // Corrected the arrow function syntax here
//     console.log("clicked");
//     if (startmenu.style.bottom === "50px") {
//         startmenu.style.bottom = "-655px";
//     } else {
//         startmenu.style.bottom = "50px";
//     }
// });

document.addEventListener("DOMContentLoaded", () => {
    let taskbar = document.getElementsByClassName("taskbar")[0];
    let startmenu = document.getElementsByClassName("startmenu")[0];

    taskbar.addEventListener("click", () => {
        console.log("clicked");
        if (startmenu.style.bottom === "50px") {
            startmenu.style.bottom = "-655px";
        } else {
            startmenu.style.bottom = "50px";
        }
    });
});
