import { Button } from '../../..';
import { useAppDispatch, useAppSelector } from '../../../../store';
import { themeService } from '../../../../service';
import { setColors } from '../../../../store/slices/Theme/ThemeSlice';

export const Color = () => {
  const dispatch = useAppDispatch();
  const {
    paletsColor,
    primaryColor: { primary },
  } = useAppSelector(({ theme }) => theme);

  const setColor = (color: string) => {
    themeService.setColor(color);

    dispatch(setColors(themeService.getColor()));
  };

  return (
    <div className="theme__configMode">
      <h6>Stretch</h6>
      <div className="theme__buttonsColor">
        {paletsColor.map((color) => {
          const validation = primary === color.primary;
          return (
            <Button
              key={color.primary}
              iconStart={
                <div
                  className={`theme__color ${
                    validation ? 'theme__color--active' : ''
                  }`.trim()}
                  style={{ background: color.primary }}
                />
              }
              onClick={() => setColor(color.primary)}
              height="56px"
              buttonType="primary"
              style={{
                background: validation ? color.secondary : '',
                boxShadow: validation
                  ? `0px 0px 20px 4px ${color.secondary}`
                  : '',
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
