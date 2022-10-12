import styles from './CategoryContainer.module.scss';
import classNames from 'classnames/bind';
import Button from '../Button/Button';
import config from '../../config';
import React  from 'react';
import { ICatalog } from '../../pages/Home/components/Men/dataMen';
const cx = classNames.bind(styles);

type Props = {
    categories: ICatalog[];
}
const CategoryContainer: React.FC<Props>= ({ categories }) => {
    return (
        <div className={cx('container')}>
            <div className={cx('categories')}>
                {categories.map((category) => (
                    <div key={category._id} className={cx('category-item')}>
                        <div className={cx('category-img')}>
                            <img src={process.env.REACT_APP_API_URL+ category.type[0].image} alt="" />
                            <div className={cx('content')}>
                                <h2 className={cx('category-name')}>{category.name}</h2>
                                <p className={cx('category-desc')}>{category.type[0].description}</p>
                                <Button
                                    to={`${config.routes.collections}/${category.type[0].slug}`}
                                    className={cx('btn-discover')}
                                >
                                    Khám phá
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoryContainer;