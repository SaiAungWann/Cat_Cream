import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import ClientSideLayout from "../components/ClientSideLayout";
import Home from "../pages/clientSide/Home";
import About from "../pages/clientSide/About";
import Contact from "../pages/clientSide/Contact";

// React Router v7.3.0
export default function Index() {
  return (
    <BrowserRouter>
      <Routes element={<ClientSideLayout />}>
        <Route index element={<ClientSideLayout />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
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
