function verify_login() {
    location.assign("index.html");
}

function report_response() {
    document.getElementById("popup-response-click").style.display = "block";
}

function closePopup() {
    document.querySelector(".popup-wrap").style.display = "none";
  }

// function report_response() {
//     document.querySelector(".popout-response").style.display = "block";
// }

// function idke() {
//     document.getElementById("dropdown_account").style.display = "block";
// }