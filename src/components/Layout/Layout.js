import { NavLink, Outlet } from 'react-router-dom';
import { NavList, NavItems } from './Layout.styled';
import Logo from 'components/Logo/Logo';

const Layout = () => {
  return (
    <>
    <header>
<Logo/>
      <nav>
        <NavList>
          <NavItems>
            <NavLink to="/">Company</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="/progects">Progects</NavLink>
          </NavItems>
          <NavItems>
            <NavLink to="/contacts">Contacts</NavLink>
          </NavItems>
        </NavList>
      </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
      
  );
};
export default Layout;
