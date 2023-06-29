import {Company, Progects, Contacts} from "pages";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";

export const App = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Company/>}/>
        <Route path="progects" element={<Progects/>}/>
        <Route path="contacts" element={<Contacts/>}/>
        </Route>
      </Routes>
    
  );
};
