import Slider from 'react-slick';
import styles from './Slide.module.scss';
import classNames from 'classnames/bind';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlide.scss';
import { NextArrowIcon, PrevArrowIcon } from '../Icons';
import { ISlide } from '../../pages/Home/components/Women/dataWomen';
import { NextArrow, PrevArrow } from '..';
import { memo, useRef } from 'react';
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
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide: ISlide) => (
          <div key={slide._id} className={cx('slide-banner-item')}>
            <img className={cx('slide-banner-img')} src={slide.img} alt="" />
          </div>
        ))}
      </Slider>
      <NextArrow onClick={() => sliderRef.current?.slickNext()} className="center" />
      <PrevArrow onClick={() => sliderRef.current?.slickPrev()} className="center" />
    </div>
  );
};

export default memo(Slide);
