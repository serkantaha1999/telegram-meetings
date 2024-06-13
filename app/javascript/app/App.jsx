import {Route, Routes} from 'react-router-dom';
import React from 'react';
import Layout from "../layout/Layout";
import HomePage from "./pages/Home/HomePage";
import Privacy from "./pages/Privacy/Privacy";
import Pricing from "./pages/Pricing/Pricing";
import Payment from "./pages/Payment/Payment";
import {scroller} from "react-scroll";

export const App = () => {
    const scrollToBlock = (item) => {
        scroller.scrollTo(item, {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
        });
    };
    return (
    <Routes>
      <Route element={<Layout scrollToBlock={scrollToBlock}/>} path={"/"}>
        <Route element={<HomePage/>} index/>
        <Route element={<Privacy/>} path={"/privacy"}/>
        <Route element={<Pricing/>} path={"/pricing"}/>
        <Route element={<Payment/>} path={"/payment"}/>
      </Route>
    </Routes>
  );
};
