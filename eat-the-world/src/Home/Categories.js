import { Swiper, SwiperSlide } from 'swiper/react';
import { useApiContext } from 'contexts/ApiContext';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import './Categories.scss';

const Categories = () => {
  const { countries, displayRecipeListCountry } = useApiContext();

  return (
    <section className="categories">
      <h2 className="categories__title">Categories</h2>
      <div className="slider">
        <Swiper loop spaceBetween={110} slidesPerView={3}>
          {countries.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                role="button"
                className="slider__slide"
                onClick={() => displayRecipeListCountry(item.country)}
              >
                <img
                  src={item.image}
                  className="slider__img"
                  alt={`${item.country} meals`}
                />
                <p className="slider__text">{item.country}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Categories;
