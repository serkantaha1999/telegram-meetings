import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Layout from "../layout/Layout";
import HomePage from "./pages/Home/HomePage";
import Privacy from "./pages/Privacy/Privacy";
import Pricing from "./pages/Pricing/Pricing";
import Payment from "./pages/Payment/Payment";

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout/>} path={"/"}>
        <Route element={<HomePage/>} index/>
        <Route element={<Privacy/>} path={"/privacy"}/>
        <Route element={<Pricing/>} path={"/pricing"}/>
        <Route element={<Payment/>} path={"/payment"}/>
      </Route>
    </Routes>
  );
};
