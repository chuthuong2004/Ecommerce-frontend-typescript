import classNames from 'classnames/bind';
import { EyeIcon, EyeActiveIcon } from '../Icons';
import styles from './Input.module.scss';
import React, { useState, useEffect, memo, useId, ClassAttributes } from 'react';
const cx = classNames.bind(styles);
interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    ClassAttributes<HTMLInputElement> {
  label?: string;
  error?: any;
  rounded?: boolean;
  textArea?: boolean;
}
const Input: React.FC<IInputProps> = ({
  label,
  type = 'text',
  placeholder,
  name = '',
  error = null,
  textArea,
  onChange,
  // rounded,
  ...passProps
}) => {
  const idInput = useId();
  const [displayed, setDisplayed] = useState(false);
  const handleClickEye: React.MouseEventHandler<HTMLDivElement> = () => {
    setDisplayed(!displayed);
  };
  const props: any = {
    onChange,
    ...passProps,
  };
  useEffect(() => {
    setDisplayed(false);
  }, [!props.value]);
  return (
    <div>
      {type === 'checkbox' || type === 'radio' ? (
        <div className={cx('checkbox')}>
          <input
            type={type}
            id={idInput}
            checked={props.checked}
            name={name}
            placeholder={placeholder}
            {...props}
          />
          <label htmlFor={idInput}>
            <span></span>
            {label}
          </label>
        </div>
      ) : (
        <div className={cx('input-container')}>
          {label && (
            <label className={cx('input-label')} htmlFor={idInput}>
              {label}
            </label>
          )}
          <div className={cx('input')}>
            {/* keyof typeof error => 'email' | 'password' | 'phone' */}
            {error && error[name as keyof typeof error] && (
              <span className={cx('message-error', 'error')}>
                {error[name as keyof typeof error]
                  ? error[name as keyof typeof error]
                  : 'Bạn không được để trống dòng này'}
              </span>
            )}
            {textArea ? (
              <textarea
                cols={30}
                rows={10}
                name={name}
                id={idInput}
                placeholder={placeholder}
                {...props}
              ></textarea>
            ) : (
              <input
                type={displayed ? 'text' : type}
                name={name}
                id={idInput}
                placeholder={placeholder}
                {...props}
              />
            )}

            {type === 'password' && (
              <div
                onClick={props.value ? handleClickEye : undefined}
                className={cx('icon-eye', !props.value && 'disabled')}
              >
                {displayed ? <EyeActiveIcon /> : <EyeIcon />}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(Input);
