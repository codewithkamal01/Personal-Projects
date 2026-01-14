//Create an unordered list. Allow users to add and remove list items dynamically using buttons.

var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp = document.querySelector("input");
var ul = document.querySelector("ul");

var li;

add.addEventListener("click", function () {
  if (inp.value.trim() === "") {
  } else {
    li = document.createElement("li");
    li.textContent = inp.value;
    ul.appendChild(li);
    inp.value='';
  }
});

remove.addEventListener("click", function () {
  ul.removeChild(li);
});






// 6. Create a tabbed interface where clicking on tabs displays different content sections without page
// reload.
// 7. Display a progress bar that updates in real-time, showing the progress of a task, download, or form
// submission.
