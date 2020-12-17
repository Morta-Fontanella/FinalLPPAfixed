var error = null;
var nameglob = null;
var emailglob = null;
var commentglob = null;

var validatename = function () {
    //name validation
    var name = document.getElementById("name");
    if (name.value.length >= 3 && name.value.match(/^[a-zA-Z]+$/)) {
        nameglob = name.value;
    } else {
        document.getElementById("nameError").style.display = "flex";
        error = true;
    }
};

var validateemail = function () {
    //email validation
    email = document.getElementById("email");
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        emailglob = email.value;
    } else {
        document.getElementById("emailError").style.display = "flex";
        error = true;
    }
};

var validatecomments = function () {
    //validate comments
    var comments = document.getElementById("comments");
    if (comments.value.length > 0) {
        commentglob = comments.value;
    } else {
        document.getElementById("messageError").style.display = "flex";
        error = true;
    }
};

var resetError = function () {
    document.getElementById("nameError").style.display = "none";
    document.getElementById("emailError").style.display = "none";
    document.getElementById("messageError").style.display = "none";
    error = 'false';
}



window.onload = function () {
    btnSend = document.getElementById("send-btn");
    btnSend.addEventListener('click', function () {
        resetError();
        validatename();
        validateemail();
        validatecomments();
        console.log(error)
        if (error != true) {
            console.log('hola')
            var form = document.createElement('form');

            //Set the form attributes 
            form.setAttribute('method', 'post');
            form.setAttribute('enctype', 'text/plain');
            form.setAttribute('action', 'mailto:' + encodeURIComponent(emailglob) + '?Subject=' + 'Contacto Connect 4 de ' + encodeURIComponent(nameglob) + '&Body=' + encodeURIComponent(commentglob));
            form.setAttribute('style', 'display:none');

            //Append the form to the body
            document.body.appendChild(form);

            //Submit the form
            form.submit();

            //Clean up
            document.body.removeChild(form);
        }
    });
}