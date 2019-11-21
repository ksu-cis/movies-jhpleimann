// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var form = document.getElementById("search-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("searching...");

    var inputs = document.getElementsByName("input");

    var formData = new FormData();

    for (var i = 0; i < inputs.length; i++) {
        if (inputs.type == 'checkbox') {
            if (input.checked) { formData.append(inputs.name, inputs.value); }
        }
        else {
            formData.set(inputs.name, inputs.value);
        }
        if (inputs[i].name == "__RequestVerificationToken") {
            token = inputs[i].value;
        }
}

    var xhr = new XMLHttpRequest();
    xhr.open('get', '/', true);
    xhr.setRequestHeader("RequestVerificationToken", token);
    xhr.onreadystatechange();
    xhr.send;


});