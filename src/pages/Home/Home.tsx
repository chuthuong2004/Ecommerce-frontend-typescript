import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useLocation, Link } from 'react-router-dom';
import config from '@/config';
import { Loading, TradeMarkSlide } from '@/components';
import { Suspense, lazy, memo } from 'react';

const Kids = lazy(() => import('./components/Kids'));
const Men = lazy(() => import('./components/Men'));
const Women = lazy(() => import('./components/Women'));

const cx = classNames.bind(styles);
const Home: React.FC = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  let query: URLSearchParams = useQuery();
  return (
    <section className={cx('home-container')}>
      {!query.get('view') && (
        <>
          <section className={cx('state-banner')}>
            <div className={cx('state-banner-inner')}>
              <div className={cx('state-banner-container')}>
                <Link to={config.routes.women} className={cx('state-banner-item')}>
                  <div>
                    <span className={cx('state-banner-title')}>Nữ</span>
                    <img className={cx('state-banner-img')} src="/images/banner-woman.png" alt="" />
                    <div className={cx('overlay')}></div>
                  </div>
                </Link>
                <Link to={config.routes.men} className={cx('state-banner-item')}>
                  <div>
                    <span className={cx('state-banner-title')}>Nam</span>
                    <img className={cx('state-banner-img')} src="/images/banner-men.png" alt="" />
                    <div className={cx('overlay')}></div>
                  </div>
                </Link>
                <Link to={config.routes.kids} className={cx('state-banner-item')}>
                  <div>
                    <span className={cx('state-banner-title')}>Kids</span>
                    <img className={cx('state-banner-img')} src="/images/banner-kid.png" alt="" />
                    <div className={cx('overlay')}></div>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
      <Suspense fallback={<Loading />}>
        {query.get('view') === 'men' && <Men />}
        {query.get('view') === 'women' && <Women />}
        {query.get('view') === 'kids' && <Kids />}
      </Suspense>
      <TradeMarkSlide />
    </section>
  );
};

export default memo(Home);
