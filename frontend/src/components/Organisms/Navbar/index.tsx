import { Setting } from '../..';
import { useAppDispatch } from '../../../store';
import { isOpenSettingTheme } from '../../../store/slices/Theme/ThemeSlice';
import { Theme } from './Theme/intex';

export const Navbar = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <nav className="navbar">
        <div className="navbar__iconContainer spacing">
          <div>
            <Setting
              className="navbar__icon"
              onClick={() => dispatch(isOpenSettingTheme())}
            />
          </div>
        </div>
      </nav>
      <Theme />
    </>
  );
};
