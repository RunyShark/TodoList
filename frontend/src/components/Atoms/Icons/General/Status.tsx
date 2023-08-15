import { FC } from 'react';
import { TIcon } from '../interface';

export const Status: FC<TIcon> = ({
  className = '',
  fontSize,
  color,
  style,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    className={`${className}`.trim()}
    style={{
      fontSize,
      color,
      ...style,
    }}
    {...props}
  >
    <path
      d="M169.4 41.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 109.3 54.6 246.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"
      className="fa-primary"
    />
    <path
      d="M160 141.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.3l-32-32-32 32z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);
