import { FC } from 'react';
import { TIcon } from '../interface';

export const Edit: FC<TIcon> = ({
  className = '',
  fontSize,
  color,
  style,
  colorActive,
  ...props
}) => (
  <svg
    className={`${className}`.trim()}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 512"
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
      d="m557.2 235.7-29.4 29.4 71 71 29.4-29.4c15.6-15.6 15.6-40.9 0-56.6l-14.4-14.4c-15.6-15.6-40.9-15.6-56.6 0zm-52 52L375.9 417c-4.1 4.1-7 9.2-8.4 14.9l-15 60.1c-1.4 5.5.2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l60.1-15c5.6-1.4 10.8-4.3 14.9-8.4l129.2-129.3-71-71z"
      className="fa-primary"
    />
    <path
      fill={`${
        colorActive?.secondary ? colorActive?.secondary : 'var(--iconSecondary)'
      }  `}
      d="M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v64.6c-15.2 2-29.8 8.8-41.4 20.5L353.3 394.3c-8.2 8.2-14 18.5-16.8 29.7l-6 23.9H64c-35.3 0-64-28.7-64-64V128zm96 176c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16zm16-112c-8.8 0-16 7.2-16 16s7.2 16 16 16h320c8.8 0 16-7.2 16-16s-7.2-16-16-16H112z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);
