import { COOKIE_KEY, cookieService } from '.';
import { defaultTheme } from '../data';
import { Theme, Color } from '../store/slices/Theme/ThemeSlice';

interface GetColor {
  primaryColor: Color;
  secondaryColor: Color;
}

export type TThemeService = Omit<Theme, 'controlUser'>;

export class ThemeService {
  private html = document.querySelector('html')?.classList;
  private theme: TThemeService =
    cookieService.getCookie({ key: COOKIE_KEY.THEME }) || defaultTheme;

  get getTheme(): TThemeService {
    return this.theme;
  }

  private saveTheme(): void {
    cookieService.setCookie(
      COOKIE_KEY.THEME,
      JSON.stringify({ ...this.theme })
    );
  }

  public getColor(): GetColor {
    return {
      primaryColor: this.theme.primaryColor,
      secondaryColor: this.theme.secondaryColor,
    };
  }

  public setDarkTheme(): void {
    this.theme.isDark = true;
    this.html?.add('dark');
    this.saveTheme();
  }

  public setLightTheme(): void {
    this.theme.isDark = false;
    this.html?.remove('dark');
    this.saveTheme();
  }

  primary(color: string): string {
    return color;
  }

  secondary(color: string): string {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${0.1})`;
  }

  tertiary(color: string): string {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    const newR = Math.max(0, r - 10);
    const newG = Math.max(0, g - 10);
    const newB = Math.max(0, b - 10);

    const newHex = `#${newR.toString(16).padStart(2, '0')}${newG
      .toString(16)
      .padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
    return newHex;
  }

  public setColor(color: string): void {
    this.theme.primaryColor = {
      primary: this.primary(color),
      secondary: this.secondary(color),
      tertiary: this.tertiary(color),
    };

    this.theme.secondaryColor = {
      primary: this.primary(color),
      secondary: this.secondary(color),
      tertiary: this.tertiary(color),
    };

    this.theme.colorActive = {
      primary: this.primary(color),
      secondary: this.primary(color),
    };
    this.saveTheme();
  }

  public init() {
    if (this.theme.isDark) this.setDarkTheme();
  }
}

export const themeService = new ThemeService();
