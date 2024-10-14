function scrollCarousel() {
  const carousel = document.querySelector(".carousel");
  const carouselScrollPart = carousel.children[0];

  carousel.addEventListener("click", (event) => {
    const element1 = carouselScrollPart.children[0];
    const element2 = carouselScrollPart.children[1];
    let scrollCount =
      element1.offsetLeft +
      element1.offsetWidth +
      element2.offsetLeft +
      element2.offsetWidth +
      70;

    if (event.target.textContent == "⇐") {
      carouselScrollPart.scrollLeft -= scrollCount;
    }

    if (event.target.textContent == "⇒") {
      carouselScrollPart.scrollLeft += scrollCount;
    }
  });
}

scrollCarousel();
