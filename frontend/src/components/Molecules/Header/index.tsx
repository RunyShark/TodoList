import { FC, useState } from 'react';
import { Button } from '..';

export interface Header {
  title: string;
  subtitle: string;
}

export const Header: FC<Header> = ({ title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__container">
        <h1>{title}</h1>
        <Button
          className="header__button"
          iconEnd={<h3>?</h3>}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <p className={`header__helper ${isOpen && 'header__helper--active'}`}>
        Se trata de una herramienta de gestión de tareas con tableros visuales.
        Los tableros son 'Tareas Por Hacer', 'Tareas en Progreso' y 'Tareas
        Realizadas'. Puedes mover tareas entre ellos arrastrando y soltando.
        Doble clic para más detalles, 'x' para eliminar, 'libreta' para editar.
        Agregar tareas con el botón '+'.
      </p>
    </header>
  );
};
