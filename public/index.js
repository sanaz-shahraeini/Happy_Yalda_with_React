document.addEventListener("keypress", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("./shabe - tolani-bikalam.mp3");
      tom1.play();
      break;
  }
}