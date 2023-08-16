import { Setting } from '../..';
import { Theme } from './Theme/intex';

export const Navbar = () => (
  <>
    <nav className="navbar">
      <div>
        <Setting />
      </div>
    </nav>
    <Theme />
  </>
);
