import { CSSProperties, SVGProps } from 'react';

export interface IIcon extends SVGProps<SVGSVGElement> {
  color: string;
  fontSize: string | number;
  className: string;
  style: CSSProperties;
  isActive?: string;
}

export type TIcon = Partial<IIcon>;
