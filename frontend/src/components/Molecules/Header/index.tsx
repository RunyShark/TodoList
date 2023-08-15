import { FC } from 'react';

export interface Header {
  title: string;
  subtitle: string;
}

export const Header: FC<Header> = ({ title, subtitle }) => (
  <header className="header">
    <h1>{title}</h1>
    <h6>{subtitle}</h6>
  </header>
);
