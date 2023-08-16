export const defaultTheme = {
  isDark:
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches,
  primaryColor: {
    primary: '#66c61c',
    secondary: 'rgba(102, 198, 28, 0.1)',
    tertiary: '#5cbc12',
  },
  secondaryColor: {
    primary: '#66c61c',
    secondary: 'rgba(102, 198, 28, 0.1)',
    tertiary: '#5cbc12',
  },
  colorActive: {
    primary: '#66c61c',
    secondary: '#66c61c',
  },
  paletsColor: [
    {
      primary: '#66c61c',
      secondary: 'rgba(102, 198, 28, 0.1)',
    },
    {
      primary: '#ff4405',
      secondary: 'rgba(255, 68, 5,0.1)',
    },
    {
      primary: '#2e90fa',
      secondary: 'rgba(46, 144, 250,0.1)',
    },
    {
      primary: '#875bf7',
      secondary: 'rgba(135, 91, 247,0.1)',
    },
    {
      primary: '#d444f1',
      secondary: 'rgba(212, 68, 241,0.1)',
    },
    {
      primary: '#eaaa08',
      secondary: 'rgba(234, 170, 8, 0.1)',
    },
    {
      primary: '#d92d20',
      secondary: 'rgba(217, 45, 32,0.1)',
    },
    {
      primary: '#15b79e',
      secondary: 'rgb(21, 183, 158,0.1)',
    },
    {
      primary: '#f63d68',
      secondary: 'rgba(246, 61, 104,0.1)',
    },
  ],
};
