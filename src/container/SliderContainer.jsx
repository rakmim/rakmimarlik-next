import { Mousewheel, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "../components/slider/SliderCard";

const SliderContainer = ({ slides = [] }) => {
    return (
      <div className="theme_slider_2 p-0">
        <Swiper
          modules={[Mousewheel, Pagination]}
          className="swiper_theme_slider_2"
          direction="vertical"
          slidesPerView={1}
          loop={false}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          parallax={true}
          autoHeight={true}
          mousewheel={true}
          controller={{ inverse: true }}
          slideToClickedSlide={true}
          lazy="true"
          keyboard={{ enabled: true }}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <SliderCard
                bgImg={slide.image}
                title={slide.title}
                path={`/project-details/${slide.slug}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };
  

export default SliderContainer;
