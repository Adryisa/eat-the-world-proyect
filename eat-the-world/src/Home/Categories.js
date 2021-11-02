import { Swiper, SwiperSlide } from 'swiper/react';
import { useApiContext } from 'contexts/ApiContext';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Categories.scss';

const Categories = () => {
  const { countries } = useApiContext();

  return (
    <section className="categories">
      <h2 className="categories__title">Categories</h2>
      <div className="slider">
        <Swiper spaceBetween={110} slidesPerView={3}>
          {countries.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slider__slide">
                <img
                  src={item.image}
                  className="slider__img"
                  alt={`${item.country} meals`}
                />
                <p className="slider__text">
                  {item.country === 'Unknown'
                    ? 'Other countries'
                    : item.country}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
