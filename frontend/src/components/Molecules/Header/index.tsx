import { FC, useState } from 'react';
import { Button } from '..';
import { useAppSelector } from '../../../store';
import { Ask } from '../..';

export interface Header {
  title: string;
  subtitle: string;
}

export const Header: FC<Header> = ({ title }) => {
  const {
    isDark,
    colorActive,
    primaryColor: { secondary },
  } = useAppSelector(({ theme }) => theme);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <h1 className="header__title">{title}</h1>
        <Button
          className="header__button"
          iconEnd={<Ask colorActive={(!isDark && colorActive) || null} />}
          onClick={() => setIsOpen(!isOpen)}
          backgroundColor={secondary}
        />
      </div>

      <p className={`header__helper ${isOpen && 'header__helper--active'}`}>
        Es una herramienta de gestión de tareas con tableros visuales. Los
        tableros son 'Por Hacer', 'En Progreso' y 'Realizadas'. Puedes mover
        tareas entre ellos arrastrando y soltando. Doble clic para más detalles,
        'x' para eliminar, 'libreta' para editar. Agrega tareas con el botón
        '+'.
      </p>
    </header>
  );
};
