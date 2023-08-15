'use client';

import { ButtonHTMLAttributes, CSSProperties, FC, ReactElement } from 'react';

export type TButton = 'primary' | 'gray';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  sizeType: TSizeButton;
  buttonType: TButton;
  iconStart: ReactElement;
  iconEnd: ReactElement;
  className: string;
  color: string;
  backgroundColor: string;
  children: string | ReactElement;
  width: string;
  height: string;
  style: CSSProperties;
}

export type TSizeButton = 'xs' | 'sm' | 'lg' | 'xl';

type Button = Partial<IButton>;

export const Button: FC<Button> = ({
  backgroundColor,
  color,
  className = ' ',
  iconEnd,
  iconStart,
  buttonType = 'gray',
  children,
  width,
  height,
  style,
  ...props
}) => {
  return (
    <button
      className={`button button__${buttonType} ${className}`.trim()}
      style={{
        color,
        backgroundColor,
        width,
        height,
        ...style,
      }}
      {...props}
    >
      {iconEnd}
      {children}
      {iconStart}
    </button>
  );
};
