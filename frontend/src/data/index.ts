import { ColorTheme } from '../store/slices/Theme/ThemeSlice';

export const defaultTheme = {
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
};
