import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ClientSideLayout from "../components/ClientSideLayout";
import Home from "../pages/ClientSidePages/Home";
import About from "../pages/ClientSidePages/About";
import Contact from "../pages/ClientSidePages/Contact";
import Login from "../pages/ClientSidePages/Login";
import Register from "../pages/ClientSidePages/Register";
import ProductDetail from "../pages/ClientSidePages/ProductDetail";
import ProductList from "../pages/ClientSidePages/ProductList";
import Cart from "../pages/ClientSidePages/Cart";
import Wishlist from "../components/Wishlist";

// React Router v7.3.0
export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ClientSideLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/myCart" element={<Cart />} />
          <Route path="/myWishList" element={<Wishlist />} />
          <Route path="/productDetail" element={<ProductDetail />} />
          <Route path="/productList" element={<ProductList />} />
        </Route>
        <Route path="/user-login" element={<Login />} />
        <Route path="/user-register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );

  // React Router v6.30.0
  // export default function Index() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <ClientSideLayout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/about",
  //         element: <About />,
  //       },
  //       {
  //         path: "/contact",
  //         element: <Contact />,
  //       },
  //     ],
  //   },
  // ]);
  // return <RouterProvider router={router} />;
}
