import React, { memo, useRef } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';

import './ProductSlider.scss';
import styles from './SlideProduct.module.scss';
import classNames from 'classnames/bind';
import config from '@/config';
import { Button, NextArrow, PrevArrow, ProductItem } from '@/components';
import { IProduct } from '@/models';

const cx = classNames.bind(styles);
type Props = {
  products: IProduct[];
  showBtn?: boolean;
  title?: string;
  slideShow?: number;
  slideScroll?: number;
  className?: string;
};
const SlideProduct: React.FC<Props> = ({
  products,
  showBtn = true,
  title,
  slideShow = 4.5,
  slideScroll = 4,
}) => {
  const [slideStart, setSlideStart] = useState(false);
  const [slideEnd, setSlideEnd] = useState(false);
  const handleChange = (currentSlide: number, nextSlide: number) => {
    setSlideStart(nextSlide >= settings.slidesToScroll);
    setSlideEnd(nextSlide >= settings.slidesToScroll + settings.slidesToShow);
  };
  const sliderRef = useRef<Slider>(null);
  let settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: slideShow,
    slidesToScroll: slideScroll,
    draggable: true,
    focusOnSelect: false,
    beforeChange: (currentSlide: number, nextSlide: number) =>
      handleChange(currentSlide, nextSlide),
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div className={cx('list-products')}>
      {title && <h4 className={cx('title')}>{title}</h4>}
      <Slider ref={sliderRef} className={cx('slider', 'slider-list')} {...settings}>
        {products.map((product) => (
          <ProductItem product={product} key={product?._id} />
        ))}

        <div className={cx('btn-all')}>
          {showBtn && (
            <Button to={config.routes.collections} className={cx('btn')}>
              Xem tất cả
            </Button>
          )}
        </div>
      </Slider>
      <PrevArrow
        onClick={() => sliderRef.current?.slickPrev()}
        className="center"
        style={{
          opacity: slideStart ? 1 : 0,
        }}
      />
      <NextArrow
        onClick={() => sliderRef.current?.slickNext()}
        className="center"
        style={{
          opacity: slideEnd ? 0 : 1,
        }}
      />
    </div>
  );
};

export default memo(SlideProduct);
