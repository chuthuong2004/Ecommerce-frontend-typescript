import Slider from 'react-slick';
import styles from './Slide.module.scss';
import classNames from 'classnames/bind';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlide.scss';
import { ISlide } from '../../pages/Home/components/Women/dataWomen';
import { NextArrow, PrevArrow } from '..';
import { memo, useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';

const cx = classNames.bind(styles);

type PropsArrow = {
  className?: string;
  style?: any;
  onClick?: () => void;
};
type Props = {
  slides: ISlide[];
};
const Slide: React.FC<Props> = ({ slides }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: true,
    focusOnSelect: false,
  };
  const sliderRef = useRef<Slider>(null);
  return (
    <div className={cx('slide-container')}>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {slides.map((slide: ISlide) => (
          <SwiperSlide key={slide._id} className={cx('slide-banner-item')}>
            <img className={cx('slide-banner-img')} src={slide.img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Slider className={cx('slider')} ref={sliderRef} {...settings}>
        {slides.map((slide: ISlide) => (
          <div key={slide._id} className={cx('slide-banner-item')}>
            <img className={cx('slide-banner-img')} src={slide.img} alt="" />
          </div>
        ))}
      </Slider> */}
      <NextArrow onClick={() => sliderRef.current?.slickNext()} className="center" />
      <PrevArrow onClick={() => sliderRef.current?.slickPrev()} className="center" />
    </div>
  );
};

export default memo(Slide);
