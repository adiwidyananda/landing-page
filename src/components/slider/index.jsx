import { Button } from "@components";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Arrow from "./arrow";

function Slider({ data }) {
  return (
    <div className="slider">
      <div className="slider-wrapper">
        <div className="slider-wrapper-content">
          <Swiper loop={true}>
            {data &&
              data?.map((content, index) => (
                <SwiperSlide key={index}>
                  <div className="slider-wrapper-content-info">
                    <div>
                      <h1 className="slider-wrapper-content-info-title">
                        {content?.title}
                      </h1>
                      <h5 className="slider-wrapper-content-info-description">
                        {content?.description}
                      </h5>
                      <Button className="mt-11">Request Now</Button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            <Arrow />
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Slider;
