import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TThemeService } from '../../../service';

export interface Theme {
  isDark: boolean;
  primaryColor: Color;
  secondaryColor: Color;
  colorActive: Omit<Color, 'tertiary'>;
  paletsColor: PaletsColor[];
  controlUser: ControlUser;
}

interface ControlUser {
  isOpenSettings: boolean;
}

export enum ColorTheme {
  greenLight = '#66c61c',
  orangeDark = '#ff4405',
  blue = '#2e90fa',
  violet = '#875bf7',
  fuchsia5 = '#d444f1',
  yellow = '#eaaa08',
  error = '#d92d20',
  teal = '#15b79e',
  rose = '#f63d68',
}

interface PaletsColor {
  primary: ColorTheme;
  secondary: string;
}

export interface Color {
  primary: string;
  secondary: string;
  tertiary: string;
}

const initialState: Theme = {
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
    { primary: ColorTheme.greenLight, secondary: 'rgba(102, 198, 28, 0.1)' },
    { primary: ColorTheme.orangeDark, secondary: 'rgba(255, 68, 5,0.1)' },
    { primary: ColorTheme.blue, secondary: 'rgba(46, 144, 250,0.1)' },
    { primary: ColorTheme.violet, secondary: 'rgba(135, 91, 247,0.1)' },
    { primary: ColorTheme.fuchsia5, secondary: 'rgba(212, 68, 241,0.1)' },
    { primary: ColorTheme.yellow, secondary: 'rgba(234, 170, 8, 0.1)' },
    { primary: ColorTheme.error, secondary: 'rgba(217, 45, 32,0.1)' },
    { primary: ColorTheme.teal, secondary: 'rgb(21, 183, 158,0.1)' },
    { primary: ColorTheme.rose, secondary: 'rgba(246, 61, 104,0.1)' },
  ],
  controlUser: {
    isOpenSettings: false,
  },
};

export const ThemeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    isOpenSettingTheme(state) {
      state.controlUser.isOpenSettings = !state.controlUser.isOpenSettings;
    },

    seTheme(
      state,
      {
        payload: {
          colorActive,
          isDark,
          paletsColor,
          primaryColor,
          secondaryColor,
        },
      }: PayloadAction<TThemeService>
    ) {
      state = {
        ...state,
        colorActive,
        isDark,
        paletsColor,
        primaryColor,
        secondaryColor,
      };
    },

    darkTheme(state) {
      state.isDark = true;
    },

    lightTheme(state) {
      state.isDark = false;
    },

    setColors(
      state,
      { payload }: PayloadAction<{ primaryColor: Color; secondaryColor: Color }>
    ) {
      state.primaryColor = payload.primaryColor;
      state.secondaryColor = payload.secondaryColor;
      state.colorActive = {
        ...state.colorActive,
        primary: payload.primaryColor.primary,
        secondary: payload.primaryColor.primary,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { seTheme, darkTheme, lightTheme, setColors, isOpenSettingTheme } =
  ThemeSlice.actions;

export default ThemeSlice.reducer;
