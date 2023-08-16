import { CSSProperties, SVGProps } from 'react';
import { Color } from '../../../../store/slices/Theme/ThemeSlice';

export interface IIcon extends SVGProps<SVGSVGElement> {
  color: string;
  fontSize: string | number;
  className: string;
  style: CSSProperties;
  colorActive?: Omit<Color, 'tertiary'> | null;
}

export type TIcon = Partial<IIcon>;
