import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { getCategory, getIems } from "../Api/ApiService";
import { useDispatch } from "react-redux";
import { addCategories } from "../store/slices/CategorySlices";
import { addItems } from "../store/slices/ItemsSlices";

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = getCategory().then((data) => dispatch(addCategories(data)));
    // setCategories(data);
  }, []);
  useEffect(() => {
    getIems().then((data) => dispatch(addItems(data)));
  }, []);
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
