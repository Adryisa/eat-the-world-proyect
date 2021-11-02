import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Categories.scss';

const Categories = () => {
  return (
    <section className="categories">
      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide>
          <div className="slider__slide">Test</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__slide">Test</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__slide">Test</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__slide">Test</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__slide">Test</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__slide">Test</div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Categories;
