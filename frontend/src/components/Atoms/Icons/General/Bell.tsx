import { FC } from 'react';
import { TIcon } from '../interface';

export const Bell: FC<TIcon> = ({
  className = '',
  fontSize,
  color,
  style,
  colorActive,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
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
      d="M288 448c0 17-6.7 33.3-18.7 45.3S241 512 224 512s-33.3-6.7-45.3-18.7S160 465 160 448h128z"
    />
    <path
      fill={`${
        colorActive?.secondary ? colorActive?.secondary : 'var(--iconSecondary)'
      }  `}
      d="M224 0c-17.7 0-32 14.3-32 32v19.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416h384c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3c-31.2-35.2-48.5-80.5-48.5-127.6V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);
