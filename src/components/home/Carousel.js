import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      emulateTouch
      showThumbs={false}
      navButtonsAlwaysVisible
    >
      <div
        style={{ maxHeight: "50rem" }}
        className="object-center brightness-50"
      >
        <img
          src="https://wallpapers.com/images/hd/food-photography-pepperoni-and-cheese-pizza-gargkp2d037d4zrh.jpg"
          alt="pizza"
          style={{ width: "100%" }}
          className="object-cover"
        />
      </div>
      <div
        style={{ maxHeight: "50rem" }}
        className="object-center brightness-50"
      >
        <img
          src="https://grandgames.net/puzzle/f1200/appetitnaya_pitstsa.jpg"
          alt="pizza"
          style={{ width: "100%" }}
          className="object-cover"
        />
      </div>
      <div
        style={{ maxHeight: "50rem" }}
        className="object-center brightness-50"
      >
        <img
          src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/02/pizza-on-wooden-board.jpg"
          alt="pizza"
          style={{ width: "100%" }}
          className="object-cover"
        />
      </div>
    </Carousel>
  );
}

export default CarouselComponent;
