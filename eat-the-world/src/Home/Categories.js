import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Categories.scss';

const Categories = () => {
  return (
    <section className="categories">
      <h2 className="categories__title">Search by category</h2>
      <div className="slider">
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
      </div>
    </section>
  );
};

export default Categories;
