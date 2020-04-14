const water = document.querySelector("#water-article");
const water2 = document.querySelector("#water-article2");

let h1 = document.querySelector("#h1");
let p1 = document.querySelector("#p1");
let p2 = document.querySelector("#p2");
let p3 = document.querySelector("#p3");
let p4 = document.querySelector("#p4");
let p5 = document.querySelector("#p5");
let p6 = document.querySelector("#p6");
let p7 = document.querySelector("#p7");
let p8 = document.querySelector("#p8");
let p9 = document.querySelector("#p9");
let p10 = document.querySelector("#p10");
let p11 = document.querySelector("#p11");
let p12 = document.querySelector("#p12");
let p13 = document.querySelector("#p13");

localStorage.setItem("article", "");
/*water.addEventListener("click", (e) => {
  console.log(water);
  localStorage.setItem("num", "#water-article");
  console.log(localStorage.getItem("num"));
});*/
water.addEventListener("click", waterArticle);
water2.addEventListener("click", waterArticle);

function waterArticle() {
  //console.log(water);
  localStorage.setItem("article", "#water-article");
  console.log(localStorage.getItem("article"));
  //whatArticle();
}

function whatArticle() {
  if (localStorage.getItem("article") == "#water-article") {
    window.location.href = "diet-dynamic.html";
  }
}
