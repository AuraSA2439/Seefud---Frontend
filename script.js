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

function closePopup() {
    document.querySelector(".popup-wrap").style.display = "none";
    document.querySelector(".popup-wrap-copy1").style.display = "none";
    document.querySelector(".popup-wrap-copy2").style.display = "none";
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