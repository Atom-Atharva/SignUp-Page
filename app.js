let form = document.querySelector(".form");
let fname = document.forms["signup"]["fname"];
let lname = document.forms["signup"]["lname"];
let mail = document.forms["signup"]["mail"];
let dept = document.forms["signup"]["dept"];
let college = document.forms["signup"]["college"];
let yog = document.forms["signup"]["yog"];
let dob = document.forms["signup"]["dob"];
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
    let deptValue = dept.value.trim();
    let collegeValue = college.value.trim();
    let yogValue = yog.value.trim();
    let dobValue = dob.value.trim();
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
    if (deptValue == "") {
        setError(dept, "Department Name is invalid!");
    } else {
        setSuccess(dept);
    }
    if (collegeValue == "") {
        setError(college, "College Name is invalid!");
    } else {
        setSuccess(college);
    }
    if (yogValue == "") {
        setError(yog, "Year Of Graduation is missing!");
    } else {
        setSuccess(yog);
    }
    if (dobValue == "") {
        setError(dob, "Date of Birth not Found!");
    } else {
        setSuccess(dob);
    }

    if (pwdValue.length < 8) {
        setError(pwd, "Password must have minimum 8 characters!");
    } else {
        setSuccess(pwd);
    }
}
