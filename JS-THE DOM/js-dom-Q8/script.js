var input = document.querySelector("input");
var data = [
  {
    name: "kamal",
    src: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=423&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "raju",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "kamala",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "kaushik",
    src: "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
var pers = "";
data.forEach(function (elem) {
  pers += `<div class="person">
            <div class="img">
              <img src="${elem.src}" alt="" />
            </div>
            <h3>${elem.name}</h3>
          </div>`;
});
document.querySelector(".people").innerHTML = pers;

input.addEventListener("input", function () {
  var matching = data.filter(function (e) {
    return e.name.startsWith(input.value);
  });
  var newusers = "";
  matching.forEach(function (elem) {
    newusers += `<div class="person">
            <div class="img">
              <img src="${elem.src}" alt="" />
            </div>
            <h3>${elem.name}</h3>
          </div>`;
  });
  document.querySelector(".people").innerHTML = newusers;
});
