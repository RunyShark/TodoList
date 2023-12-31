import { FC } from 'react';
import { TIcon } from '../interface';

export const Plus: FC<TIcon> = ({
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
      fill="var(--iconPlusTow)"
      d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32v144H48c-17.7 0-32 14.3-32 32s14.3 32 32 32h144v144c0 17.7 14.3 32 32 32s32-14.3 32-32V288h144c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);
