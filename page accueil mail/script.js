let form = document.getElementsByTagName('form')[0];
let email = document.getElementById('mail');
let error = document.querySelector('.error')

email.addEventListener ("input", function(e){
  if (email.validity.valid){
    error.innerHTML = "";
    error.className = "error";

  }
}, false);
form.addEventListener("submit", function(e){
  if(!email.validity.valid){
    let exclam = document.getElementById("aws");
    exclam.style.opacity="1";
    error.innerHTML = "Please provide a valid email";
    error.classList.add = "error";
    let color = "red";
    email.style.borderColor = color;
    e.preventDefault();
  }
}, false);