let form = document.querySelector(".form");
let fname = document.forms["signup"]["fname"];
let lname = document.forms["signup"]["lname"];
let mail = document.forms["signup"]["mail"];
let pwd = document.forms["signup"]["pwd"];

form.addEventListener("submit", (event) => {
    // This prevent refreshing and redirecting to other page.
    event.preventDefault();

    validateForm();
});

function setError(element, message) {
    let formInfo = element.parentElement;
    let errorDisplay = formInfo.querySelector(".error");

    if (element == mail) {
        element.placeholder = "example@xyz.com";
        element.classList.add("mail");
    }

    errorDisplay.innerHTML = message;
    formInfo.classList.add("error");
    formInfo.classList.remove("success");
}

function setSuccess(element) {
    let formInfo = element.parentElement;
    let errorDisplay = formInfo.querySelector(".error");

    if (element == mail) {
        element.placeholder = "Email Address";
        element.classList.remove("mail");
    }

    errorDisplay.innerHTML = "";
    formInfo.classList.add("success");
    formInfo.classList.remove("error");
}

function validateForm() {
    let fnameValue = fname.value.trim();
    let lnameValue = lname.value.trim();
    let mailValue = mail.value.trim();
    let pwdValue = pwd.value.trim();

    // Check Each Values.
    if (fnameValue == "") {
        setError(fname, "First Name is invalid!");
    } else {
        setSuccess(fname);
    }
    if (lnameValue == "") {
        setError(lname, "Last Name is invalid!");
    } else {
        setSuccess(lname);
    }
    if (mailValue == "") {
        setError(mail, "Looks like this is not an email!");
    } else {
        setSuccess(mail);
    }
    if (pwdValue.length < 8) {
        setError(pwd, "Password must have minimum 8 characters!");
    } else {
        setSuccess(pwd);
    }
}
