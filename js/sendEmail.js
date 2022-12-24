var recaptcha_response = '';

function verifyCaptcha(token) {
    recaptcha_response = token;
}

var emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

var nameValid = false;
var emailValid = false;
var phoneValid = false;
var messageValid = false;

function sendEmail() {
    const name = document.getElementById("formControlInputName").value;
    const email = document.getElementById("formControlInputEmail").value;
    const phone = document.getElementById("formControlInputPhone").value;
    const message = document.getElementById("formControlTextareaMessage").value;

    if ((name === '') || (name == null)) {
        document.getElementById("formControlInputName").style.borderColor = "red";
    } else {
        nameValid = true;
    }
    if ((email === '') || (email == null) || (!(emailRegex.test(email)))) {
        document.getElementById("formControlInputEmail").style.borderColor = "red";
    } else {
        emailValid = true;
    }
    if ((phone === '') || (phone == null)) {

    } else {
        phoneValid = true;
    }
    if ((message === '') || (message == null)) {
        document.getElementById("formControlTextareaMessage").style.borderColor = "red";
    } else {
        messageValid = true;
    }
    if(recaptcha_response.length == 0) {
        document.getElementById("reCAPTCHA-error").style.display = "inline-block";
    }

    if (
        (nameValid === false) ||
        (emailValid === false) ||
        (phoneValid === false) ||
        (messageValid === false) ||
        (recaptcha_response.length == 0)
    ) {
        return;
    }

    document.getElementById("submit").innerHTML = "Sending&emsp;<span class='spinner-border spinner-border-sm' role='status'><span class='visually-hidden'>Loading..</span></span>";

    var tempParams = {
        name: name,
        email: email,
        phone: phone,
        message: message,
    };

    emailjs.send('service_test', 'template_test', tempParams, 'tBms5v2NQ16iNmUuT').then(function (res) {
        if (res.status === 200) {
            document.getElementById("submit").classList.remove("btn-primary");
            document.getElementById("submit").classList.remove("btn-danger");
            document.getElementById("submit").classList.add("btn-success");
            document.getElementById("submit").innerHTML = "Sent&emsp;<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-check2' viewBox='0 0 16 16'><path d='M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z'/></svg>";
            return;
        } else {
            document.getElementById("submit").classList.remove("btn-primary");
            document.getElementById("submit").classList.remove("btn-success");
            document.getElementById("submit").classList.add("btn-danger");
            document.getElementById("submit").innerHTML = "Failed&emsp;<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-exclamation-circle' viewBox='0 0 16 16'><path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z'/><path d='M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z'/></svg>";
        }
    });
}