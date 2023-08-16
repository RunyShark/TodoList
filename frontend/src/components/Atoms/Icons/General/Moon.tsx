import { FC } from 'react';
import { TIcon } from '../interface';

export const Moon: FC<TIcon> = ({
  className = '',
  fontSize,
  color,
  style,
  colorActive,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
    className={`${className}`.trim()}
    style={{
      fontSize,
      color,
      ...style,
    }}
    {...props}
  >
    <path
      fill={`${
        colorActive?.primary ? colorActive?.primary : 'var(--iconPrimary)'
      }  `}
      d="M383.9 511.9H96c-53 0-96-43-96-96 0-47.6 34.6-87 80-94.6V320c0-53 43-96 96-96 34.9 0 65.4 18.6 82.2 46.4 13-9.1 28.8-14.4 45.8-14.4 44.2 0 80 35.8 80 80 0 5.5-.6 10.8-1.6 16h1.6c44.2 0 80 35.8 80 80s-35.8 80-80 80z"
      className="fa-primary"
    />
    <path
      fill={`${
        colorActive?.secondary ? colorActive?.secondary : 'var(--iconSecondary)'
      }  `}
      d="M304 192.2C304 86.1 389.8 0 495.8 0c5.5 0 10.9.2 16.3.7 7 .6 12.8 5.7 14.3 12.5s-1.6 13.9-7.7 17.3c-44.4 25.2-74.4 73-74.4 127.8 0 81 65.5 146.6 146.2 146.6 8.6 0 17-.7 25.1-2.1 6.9-1.2 13.8 2.2 17 8.5s1.9 13.8-3.1 18.7c-34.5 33.6-81.7 54.4-133.6 54.4-3.5 0-7-.1-10.5-.3-13.6-28.6-39-50.6-69.9-59.6-5.7-55.6-52-99.1-108.8-100.4-1.7-10.4-2.6-21-2.6-31.8z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);
