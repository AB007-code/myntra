import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Hover from "../components/Hover";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hover" element={<Hover />} />
    </Routes>
  );
};

export default Router;
