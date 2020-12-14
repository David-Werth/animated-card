// Movement Animation Selectors
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");

// Animation Event
container.addEventListener("mousemove", (e) => {
  console.log("fasfsaf");
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate in
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  title.style.transform = "translateZ(150px)";
  title.style.transition = "all 0.3s ease-out";
});
// Animate Out

container.addEventListener("mouseleave", (e) => {
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  card.style.transition = "all 0.5s ease";
  title.style.transform = "translateZ(0px)";
});
