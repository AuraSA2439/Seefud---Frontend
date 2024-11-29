function verify_login() {
    location.assign("index.html");
}

function logout_popup() {
    document.getElementById("popup-logout-click").style.display = "block";
}

function logout() {
    // insert fungsinya
}

function sidemenu_toggle() {
    // let sidemenu = document.querySelector(".sidemenu");
    // if (sidemenu.classList.contains("open")) {
    //     sidemenu.classList.remove("open");
    // } else {
    //     sidemenu.classList.add("open");
    // }
    let sidemenu = document.querySelector(".sidemenu"); 
    if (sidemenu.style.display === "none") { 
        sidemenu.style.display = "block"; 
    } else {
        sidemenu.style.display = "none";
    }
}

function report_response() {
    document.getElementById("popup-response-click").style.display = "block";
}

function report_counts_popup() {
    document.getElementById("popup-report-click").style.display = "block";
}

function closePopup() {
    const popups = document.querySelectorAll(".popup-wrap, .popup-wrap-copy1, .popup-wrap-copy2, .popup-wrap-copy3, .popup-wrap-copy4");

    for (let i = popups.length - 1; i >= 0; i--) {
        if (popups[i].style.display !== "none") {
            popups[i].style.display = "none";
            break;
        }
    }
}

function edit_popup() {
    document.getElementById("popup-edit-click").style.display = "block";
}

function delete_popup() {
    document.getElementById("popup-delete-click").style.display = "block";
}

function edit_data() {

}

function delete_data() {

}
// function report_response() {
//     document.querySelector(".popout-response").style.display = "block";
// }

// function idke() {
//     document.getElementById("dropdown_account").style.display = "block";
// }

// Perlu tydak drag kira2? agak mager nambahin hehe :)
// dragElement(document.querySelector(".popup"));

// function dragElement(elmnt) {
//   var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//   if (document.getElementById(elmnt.id + "button")) {
//     document.getElementById(elmnt.id + "button").onmousedown = dragMouseDown;
//   } else {
//     elmnt.onmousedown = dragMouseDown;
//   }

//   function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     document.onmousemove = elementDrag;
//   }

//   function elementDrag(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
//   }

//   function closeDragElement() {
//     document.onmouseup = null;
//     document.onmousemove = null;
//   }
// }