import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import Animation from "./404.json";
import "../App.css";
import "../styles/pages/NotFound.css";

function NotFound() {
  return (
    <div className="NotFound">
      <Lottie className="Img" animationData={Animation} loop={true} />;
      <Link to="/"> volver al inicio </Link>
    </div>
  );
}

export default NotFound;
