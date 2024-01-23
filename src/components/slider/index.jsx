import ArrowLeft from "@assets/arrow-left.svg";
import ArrowRight from "@assets/arrow-right.svg";
import { Button } from "@components";

function Slider() {
  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div className="slider-wrapper-content">
          <img src={ArrowLeft} alt="arrow-left" />
          <div className="slider-wrapper-content-info">
            <h1 className="slider-wrapper-content-info-title">
              natural products with various advantages
            </h1>
            <h5 className="slider-wrapper-content-info-description">
              Lorem ipsum dolor sit amet consectetur. Blandit velit nulla sed
              faucibus libero in nam pharetra. Neque vulputate bibendum elit
              tristique interdum.
            </h5>
            <Button className="mt-11">Request Now</Button>
          </div>
          <img src={ArrowRight} alt="arrow-right" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
