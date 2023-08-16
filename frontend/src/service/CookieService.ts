/* eslint-disable @typescript-eslint/no-explicit-any */
import { setCookie, getCookie } from 'cookies-next';
import { OptionsType } from 'cookies-next/lib/types';

export enum COOKIE_KEY {
  THEME = 'theme',
}

interface IGetCookies extends OptionsType {
  key: COOKIE_KEY;
}

class CookieService {
  setCookie(key: string, data: any, options?: OptionsType): void {
    setCookie(key, data, options);
  }

  getCookie({ key }: IGetCookies) {
    const cookie = getCookie(key);

    return JSON.parse(cookie as string);
  }
}

export const cookieService = new CookieService();
