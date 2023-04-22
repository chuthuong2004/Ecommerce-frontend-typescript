import React, { ReactNode } from 'react';
import styles from './EmptyContent.module.scss';
import classNames from 'classnames/bind';

import { Button } from '../';
import config from '../../config';
const cx = classNames.bind(styles);
type Props = {
  icon: ReactNode;
  titleBtn: string;
  content1: string;
  content2?: string;
  iconBtn?: ReactNode;
  noPadding?: boolean;
  onClickButton?: () => void;
};
const EmptyContent: React.FC<Props> = ({
  icon,
  titleBtn,
  content1,
  content2,
  iconBtn,
  noPadding,
  onClickButton = () => {},
}) => {
  return (
    <div className={cx('empty-content', noPadding && 'pt-0')}>
      <div className={cx('empty-content__image')}>{icon}</div>
      <div>
        <div className={cx('content-1')}>{content1}</div>
        <p className="content-2">{content2}</p>
        {titleBtn && (
          <Button
            to={
              titleBtn.toLowerCase().includes('dạo một vòng') ? config.routes.newArrival : undefined
            }
            className={cx('btn--content')}
            leftIcon={iconBtn}
            primary
            onClick={onClickButton}
          >
            {titleBtn}
          </Button>
        )}
      </div>
    </div>
  );
};

export default EmptyContent;
