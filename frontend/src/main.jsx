import { createRoot } from "react-dom/client";
import "./index.css";
import React from "react";
import Routers from "./route/routers";

// for slick carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(<Routers />);
