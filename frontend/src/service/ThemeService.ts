import { COOKIE_KEY, cookieService } from '.';
import { Theme, Color, ColorTheme } from '../store/slices/Theme/ThemeSlice';

interface GetColor {
  primaryColor: Color;
  secondaryColor: Color;
}

export class ThemeService {
  private html = document.querySelector('html')?.classList;
  private theme: Omit<Theme, 'controlUser'> =
    {
      isDark: true,
      primaryColor: {
        primary: '',
        secondary: '',
        tertiary: '',
      },
      secondaryColor: {
        primary: '',
        secondary: '',
        tertiary: '',
      },
      colorActive: {
        primary: '#66c61c',
        secondary: '#85e13a',
      },
      paletsColor: [
        {
          primary: ColorTheme.greenLight,
          secondary: 'rgba(102, 198, 28, 0.1)',
        },
        { primary: ColorTheme.orangeDark, secondary: 'rgba(255, 68, 5,0.1)' },
        { primary: ColorTheme.blue, secondary: 'rgba(46, 144, 250,0.1)' },
        { primary: ColorTheme.violet, secondary: 'rgba(135, 91, 247,0.1)' },
        { primary: ColorTheme.fuchsia5, secondary: 'rgba(212, 68, 241,0.1)' },
        { primary: ColorTheme.yellow, secondary: 'rgba(234, 170, 8, 0.1)' },
        { primary: ColorTheme.error, secondary: 'rgba(217, 45, 32,0.1)' },
        { primary: ColorTheme.teal, secondary: 'rgb(21, 183, 158,0.1)' },
        { primary: ColorTheme.rose, secondary: 'rgba(246, 61, 104,0.1)' },
      ],
    } || cookieService.getCookies({ key: COOKIE_KEY.THEME });

  get getTheme(): Theme {
    return this.theme;
  }

  private saveTheme(): void {
    cookieService.setCookie(COOKIE_KEY.THEME, this.theme);
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

    this.saveTheme();
  }
}

export const themeService = new ThemeService();
