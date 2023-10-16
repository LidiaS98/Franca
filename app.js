// // hoovering and going to shop chart

var image1 = document.getElementById("img1");
var image2 = document.getElementById("img2");

image1.onclick = function (event) {
  window.location.href = "shop.html";
};

image2.onclick = function (event) {
  window.location.href = "shop.html";
};


const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

//Redirect to instagram fanpage after clicking on instagram icon

const instagramIcon = document.getElementById("instagramIcon");
instagramIcon.addEventListener("click", function () {
  window.location.href = "https://www.instagram.com/franca_vintage/?hl=pl";
});

// Redirect to main page after clicking Franca logo

const francaLogo = document.getElementById("francaLogo");
francaLogo.addEventListener("click", function () {
  window.location.href = "index.html";
});
