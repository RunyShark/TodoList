import { FC, useState } from 'react';
import { Button } from '..';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/pro-duotone-svg-icons';

export interface Header {
  title: string;
  subtitle: string;
}

export const Header: FC<Header> = ({ title, subtitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="header__container">
        <h6>{subtitle}</h6>
        <div>
          <Button
            className="header__button"
            iconEnd={
              <FontAwesomeIcon icon={faQuestion} className="header__icon" />
            }
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </div>

      <p className={`header__helper ${isOpen && 'header__helper--active'}`}>
        Todo list: 'Tareas Por Hacer', 'Tareas en Progreso' y 'Tareas
        Realizadas'. Estos tableros permiten gestionar el estado de tus tareas
        de manera visual e intuitiva. Puedes arrastrar y soltar las tareas de un
        tablero a otro según su progreso. Si deseas obtener más detalles sobre
        una tarea en particular, basta con realizar doble clic sobre la tarjeta
        correspondiente. En caso de que necesites eliminar una tarea,
        simplemente haz clic en el ícono en forma de 'x'. Para realizar
        ediciones en la tarea, accede al ícono en forma de 'libreta'. Agregar
        una nueva tarea es igualmente sencillo. Solo tienes que hacer clic en el
        botón con el símbolo '+' y podrás empezar a definir los detalles de la
        tarea que deseas incluir.
      </p>
    </header>
  );
};
