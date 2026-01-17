var prgs = document.querySelector("#progress");
var perTxt = document.querySelector("#percentText");


window.addEventListener("scroll", function() {

  let totalHeight = document.body.scrollHeight - window.innerHeight;
  let scrolled = window.scrollY;

  let percent = (scrolled / totalHeight) * 100;
  percent = Math.round(percent);   // make it a whole number

  prgs.style.width = percent + "%";
  perTxt.innerText = percent + "% scrolled";
  if(percent === 100){
    perTxt.style.backgroundColor = "red";
  }else{
    perTxt.style.backgroundColor = "black";
  }
});