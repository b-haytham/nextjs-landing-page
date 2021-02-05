import Imgae from "next/image";
import React from "react";
import { Carousel as ReactCarousel } from "react-responsive-carousel";

interface CarouselProps {}

const Carousel: React.FC<CarouselProps> = ({}) => {
  return (
    <div
      style={{
        margin: "100px 0",
        padding: "0 20px",
        borderRadius: 20,
        overflow: "hidden",
      }}
    >
      <ReactCarousel infiniteLoop autoPlay showThumbs={false}>
        {images.map((img, indx) => (
          <div key={indx}>
            <img src={img} />
            <p className="legend">Legend 1</p>
          </div>
        ))}
      </ReactCarousel>
    </div>
  );
};

const images = [
  "/company-photos/comp-1.jpg",
  "/company-photos/comp-2.jpg",
  "/company-photos/comp-3.jpg",
  "/company-photos/comp-4.jpg",
];

export default Carousel;
