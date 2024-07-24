import { BrowserRouter, Routes, Route } from "react-router-dom";

import NoSense from "../Components/NoSense";
import Layout from "./Layout";
import Catálogo from "../Components/Catálogo/Catálogo";
// import Layout from './Layout'

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NoSense />} />
        <Route element={<Layout />}>
          <Route path="/catálogo" element={<Catálogo />}>
            {/* <Route path="*" element={<Page404 />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
