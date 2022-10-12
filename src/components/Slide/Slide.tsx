import Slider from 'react-slick';
import styles from './Slide.module.scss';
import classNames from 'classnames/bind';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SlickSlide.scss';
import { NextArrowIcon, PrevArrowIcon } from '../Icons';
import { ISlide } from '../../pages/Home/components/Women/dataWomen';
const cx = classNames.bind(styles);

type PropsArrow = {
    className?: string;
    style?: any;
    onClick?: ()=> void;
}
const NextArrow:React.FC<PropsArrow> = (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={cx('btn-arrow', 'btn-next')}
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <NextArrowIcon />
        </div>
    );
};
const PrevArrow: React.FC<PropsArrow>= (props) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={cx('btn-arrow', 'btn-prev', className)}
            style={{
                ...style,
            }}
            onClick={onClick}
        >
            <PrevArrowIcon />
        </div>
    );
};
type Props = {
    slides: ISlide[];
}
const Slide: React.FC<Props>= ({ slides }) => {
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
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };
    return (
        <div className={cx('slide-container')}>
            <Slider {...settings}>
                {slides.map((slide:ISlide) => (
                    <div key={slide._id} className={cx('slide-banner-item')}>
                        <img className={cx('slide-banner-img')} src={slide.img} alt="" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Slide;