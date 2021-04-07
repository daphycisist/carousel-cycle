import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";

const ReactCarousel = ({ responsive, images }) => {
  return (
    <Carousel
      // ssr
      // partialVisbile
      itemClass="image-item"
      responsive={responsive}
    >
      {images.map((image, index) => {
        return (
          <img
            className="item"
            key={index}
            style={{ width: "100%", height: "100%" }}
            src={image}
            alt={index}
          />
        );
      })}
    </Carousel>
  );
};

export default ReactCarousel;
