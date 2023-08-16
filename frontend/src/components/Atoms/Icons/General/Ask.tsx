import { FC } from 'react';
import { TIcon } from '../interface';

export const Ask: FC<TIcon> = ({
  className = '',
  fontSize,
  color,
  style,
  colorActive,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
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
      d="M144 96c-35.3 0-64 28.7-64 64 0 17.7-14.3 32-32 32s-32-14.3-32-32C16 89.3 73.3 32 144 32h32c70.7 0 128 57.3 128 128v3.6c0 43.6-22.1 84.1-58.8 107.7L203 298.4c-6.9 4.4-11 12-11 20.2v1.4c0 17.7-14.3 32-32 32s-32-14.3-32-32v-1.4c0-29.9 15.2-57.8 40.4-74l42.2-27.1c18.3-11.8 29.4-32.1 29.4-53.8V160c0-35.3-28.7-64-64-64h-32z"
      className="fa-primary"
    />
    <path
      fill={`${
        colorActive?.secondary ? colorActive?.secondary : 'var(--iconSecondary)'
      }  `}
      d="M120 440a40 40 0 1 1 80 0 40 40 0 1 1-80 0z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);
