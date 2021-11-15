//creating 16 * 16 grid of squares divs
let container = document.getElementById("container");
let counter = 0;
let draw = false;
let color = "";
for (let i = counter; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    let a = document.createElement("div");
    a.classList.add("square");
    container.appendChild(a);
  }
  counter++;
}

container.addEventListener("mousedown", () => {
  draw = true;
});
container.addEventListener("mouseup", () => {
  draw = false;
});

container.addEventListener("mouseover", (area) => {
  if (draw === true) {
    if (area.target !== area.currentTarget) {
      //area.target refers to element  that triggered teh event, current target  the element listners is attached to.
      area.target.style.backgroundColor = color;
    }
  }
});

let newbtn = document.querySelector(".re");

const restart = () => {
  let containerChildren = container.children;
  for (let i = 0; i < containerChildren.length; i++) {
    containerChildren[i].style.backgroundColor = "white";
  }
};

newbtn.addEventListener("click", restart);

let colors = document.querySelectorAll(".btn");
for (let i = 0; i < colors.length; i++) {
  colors[i].addEventListener("click", function () {
    let btnClicked = colors[i];
    if (btnClicked.classList.contains("red")) {
      color = "red";
    } else if (btnClicked.classList.contains("blue")) {
      color = "blue";
    } else if (btnClicked.classList.contains("pink")) {
      color = "pink";
    } else if (btnClicked.classList.contains("green")) {
      color = "green";
    } else if (btnClicked.classList.contains("orange")) {
      color = "orange";
    } else if (btnClicked.classList.contains("yellow")) {
      color = "yellow";
    } else if (btnClicked.classList.contains("white")) {
      color = "white";
    } else {
      color = "black";
    }
  });
}
