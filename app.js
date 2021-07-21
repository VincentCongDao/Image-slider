const preBtn = document.querySelector(".btn.pre");
const nextBtn = document.querySelector(".btn.next");

const spans = [...document.querySelectorAll(".slider .span")];

let currentImage = 0;

const changeImage = () => {
  spans.map((item, i) => {
    setTimeout(() => {
      item.style.transform = `rotateY(${180 * currentImage}deg)`;
    }, i * 200);
    setTimeout(() => {
      item.style.backgroundImage = `url(./images/img${currentImage + 1}.jpg)`;
    }, i * 100);
  });
};

nextBtn.addEventListener("click", () => {
  if (currentImage < 4) {
    currentImage++;
    changeImage();
  }
});

preBtn.addEventListener("click", () => {
  if (currentImage > 0) {
    currentImage--;
    changeImage();
  }
});
