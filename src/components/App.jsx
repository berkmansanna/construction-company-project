import {Company, Progects, Contacts} from "pages";
import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">
          Company
          </NavLink>
          <NavLink to="/progects">
          Progects
          </NavLink>
          <NavLink to="/contacts">
          Contacts
          </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Company/>}></Route>
        <Route path="/progects" element={<Progects/>}></Route>
        <Route path="/contacts" element={<Contacts/>}></Route>
      </Routes>
    </div>
  );
};
