import { Button, Moon, Xmark, Sun, Reset } from '../../../';
import { themeService } from '../../../../service';
import { useAppDispatch, useAppSelector } from '../../../../store';
import {
  darkTheme,
  lightTheme,
} from '../../../../store/slices/Theme/ThemeSlice';
import { Color } from '../Color';

export const Theme = () => {
  const {
    isDark,
    colorActive,
    controlUser: { isOpenSettings },
  } = useAppSelector(({ theme }) => theme);
  const dispatch = useAppDispatch();

  const setLightTheme = () => {
    themeService.setLightTheme();
    dispatch(lightTheme());
  };

  const setDarkTheme = () => {
    themeService.setDarkTheme();
    dispatch(darkTheme());
  };

  return (
    <div className={`theme ${isOpenSettings ? 'theme__active' : ''}`.trim()}>
      <div className="theme__config">
        <div className="theme__configHeader">
          <h5>Setting</h5>
          <div className="theme__configHeader--icon">
            <Reset className="theme__icon" />
            <Xmark className="theme__icon" />
          </div>
        </div>
        <div className="theme__containerButtons">
          <div className="theme__configMode">
            <h6>Mode</h6>
            <div className="theme__buttons">
              <Button
                onClick={setLightTheme}
                iconStart={
                  <Sun
                    className="theme__icon"
                    colorActive={(!isDark && colorActive) || null}
                  />
                }
                height="80px"
                width="100%"
                buttonType="primary"
                className={`${!isDark ? 'button__active' : ''}`.trim()}
              />
              <Button
                onClick={setDarkTheme}
                iconStart={
                  <Moon
                    className="theme__icon"
                    colorActive={(isDark && colorActive) || null}
                  />
                }
                height="80px"
                width="100%"
                className={`${isDark ? 'button__active' : ''}`.trim()}
              />
            </div>
          </div>
          <Color />
        </div>
      </div>
    </div>
  );
};
