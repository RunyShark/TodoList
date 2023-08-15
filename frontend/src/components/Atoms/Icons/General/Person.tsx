import { FC } from 'react';
import { TIcon } from '../interface';

export const Person: FC<TIcon> = ({
  className = '',
  fontSize,
  color,
  style,
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
      d="m534.1 16-39.7 39.7 89.3 89.3 39.8-38.9c19.1-18.7 19.2-49.4.4-68.2l-22-21.9C583.1-2.8 552.7-2.7 534 16zm-62.4 62.4L328.5 221.8c-7 7-12.3 15.6-15.4 25l-23.8 71.3c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l71.5-23.9c9.2-3.1 17.6-8.2 24.5-15l145.1-142.1-89.1-89.1zM160 320a32 32 0 1 0-64 0 32 32 0 1 0 64 0zm64 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
      className="fa-primary"
    />
    <path
      d="M0 208c0-44.2 35.8-80 80-80h192c17.7 0 32 14.3 32 32s-14.3 32-32 32H80c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h416c8.8 0 16-7.2 16-16V304c0-17.7 14.3-32 32-32s32 14.3 32 32v128c0 44.2-35.8 80-80 80H80c-44.2 0-80-35.8-80-80V208z"
      style={{
        opacity: 0.4,
      }}
    />
  </svg>
);
