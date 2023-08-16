/* eslint-disable @typescript-eslint/no-explicit-any */
import { setCookie, getCookies } from 'cookies-next';
import { OptionsType, TmpCookiesObj } from 'cookies-next/lib/types';

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

  getCookies(options: IGetCookies): TmpCookiesObj {
    return getCookies(options);
  }
}

export const cookieService = new CookieService();
