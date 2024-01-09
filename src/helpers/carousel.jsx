import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { images } from "../constants/images";

const SlideImg = () => {
  return (
    <div className="box">
      <Carousel
        useKeyboardArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        transitionTime={2000}
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
      >
        {images.map((img) => (
          <div className="relative w-full md:w-128 md:h-96" key={img.index}>
            <img
              className="w-full h-full "
              alt="image"
              src={img.image}
              key={img.index}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default SlideImg;
