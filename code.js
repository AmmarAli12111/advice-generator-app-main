let id = document.querySelector(".id");
let text = document.querySelector("q");

setInterval(function () {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      id.innerHTML = "#" + data.slip.id;
      text.innerHTML = data.slip.advice;
    });
}, 20000);
