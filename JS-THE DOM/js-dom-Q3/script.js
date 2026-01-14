//Create a form with input fields and a submit button. use javascript to validate the form and display an error msg if the input is invalid.

var form = document.querySelector("form");
var inps = document.querySelectorAll('input[type="text"]');
var warn = document.querySelector("#warn");

form.addEventListener("submit",function(ev){
    ev.preventDefault();
    for(var i = 0; i<inps.length; i++){
          if(inps[i].value.trim() === ''){
            warn.textContent="Error, some fields are blank!!";
            warn.style.color="red";
            break;
          }else{
            warn.textContent="";
          }
    }
});