import classNames from 'classnames/bind';
import styles from './NewsLetterFooter.module.scss';
import { useCallback, useState, FocusEvent, memo } from 'react';
import { Button, Input } from '@/components';
const cx = classNames.bind(styles);
const NewsLetterFooter = () => {
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<{ email: string }>({ email: '' });

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setError({ email: email || e.target.value ? '' : 'Trường này là bắt buộc.' });
  };
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }, []);
  const checkError = (email: string) => {
    setError({ email: !email ? 'Vui lòng nhập email.' : '' });
    return email;
  };
  const handleClick = () => {
    checkError(email) && alert('Gửi thành công !');
    checkError(email) && setEmail('');
  };
  return (
    <section className={cx('newsletter-footer')}>
      <div className={cx('newsletter-footer_form')}>
        <div className={cx('newsletter-footer_form_left')}>
          <span>Đăng ký nhận thông báo</span>
          <p>
            Để nhận các ưu đãi độc quyền, giảm giá đặc biệt và cập nhật những tin tức thời trang mới
            nhất.
          </p>
          <div className={cx('newsletter-footer_form_left_gender')}>
            <div className={cx('checkbox')}>
              <Input type="radio" name="gender" value="female" label="Nữ" />
            </div>
            <div className={cx('checkbox')}>
              <Input type="radio" name="gender" value="male" label="Nam" />
            </div>
          </div>
        </div>
        <div className={cx('newsletter-footer_form_right')}>
          <div className={cx('input')}>
            <Input
              onChange={handleChange}
              value={email}
              error={error}
              onBlur={handleBlur}
              type="email"
              name="email"
              label="địa chỉ email"
              placeholder="email@example.com"
            />
          </div>
          <div onClick={handleClick} className={cx('btn')}>
            <Button large primary>
              gửi & đăng ký
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(NewsLetterFooter);
