import { FC } from 'react';
import { TIcon } from '../interface';

export const User: FC<TIcon> = ({
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
      d="M224 256a128 128 0 1 0 0-256 128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3 0 498.7 13.3 512 29.7 512h388.6c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3h-91.4z"
    />
    <path
      fill={`${
        colorActive?.secondary ? colorActive?.secondary : 'var(--iconSecondary)'
      }  `}
      d="M609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8 2.4-.1 4.7-.2 7.1-.2h61.4c89.1 0 161.3 72.2 161.3 161.3 0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9 19.7-26.6 31.3-59.5 31.3-95.1 0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);
