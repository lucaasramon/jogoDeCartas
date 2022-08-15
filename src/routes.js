import {Route, Routes } from "react-router-dom";
import Home from "./home";
import Login from "./login";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/" element={<Login />}/>
      </Routes>
  );
};
