import { FC } from 'react';
import { TIcon } from '../interface';

export const Reset: FC<TIcon> = ({
  className = '',
  fontSize,
  color,
  style,
  colorActive,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
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
      d="M344 224h128c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2S461.9 48.1 455 55L327 183c-6.9 6.9-8.9 17.2-5.2 26.2S334.3 224 344 224z"
      className="fa-primary"
    />
    <path
      fill={`${
        colorActive?.secondary ? colorActive?.secondary : 'var(--iconSecondary)'
      }  `}
      d="m413.4 96.6-45.3 45.3c-62.6-61.5-163.1-61.2-225.3 1-62.5 62.5-62.5 163.8 0 226.3s163.8 62.5 226.3 0c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3c-87.5 87.5-229.3 87.5-316.8 0s-87.5-229.3 0-316.8c87.2-87.2 228.3-87.5 315.8-1z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);
