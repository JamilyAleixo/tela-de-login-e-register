import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Register from "./pages/Register";
import Login from "./pages/Login"; 
 import Home from "./pages/PagPrincipal"; 


const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Login />;
};

function RoutesApp() {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/pagPrincipal" element={<Private Item={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
}

export default RoutesApp;