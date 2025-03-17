import React, { useEffect, useRef } from "react";
import LinksNavegacion from "./LinksNavegacion";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import Animation from "./camion.json";
import MenuHamburguer from "./MenuHamburguer";
import "../App.css";
import "../styles/components/Header.css";

function Header() {
  const rastrearGuiaRef = useRef(null);

  useEffect(() => {
    const handleAnimationEnd = () => {
      if (rastrearGuiaRef.current) {
        rastrearGuiaRef.current.classList.add("animation-completed");
      }
    };

    const rastrearGuia = rastrearGuiaRef.current;
    if (rastrearGuia) {
      rastrearGuia.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (rastrearGuia) {
        rastrearGuia.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

  return (
    <header>
      <motion.div
        className="Logo"
        initial={{ scale: 0 }}
        animate={{ scale: 1, transition: { duration: 0.5, delay:.3 } }}
      >
        <Link to="/">
          <img src="/images/Logo_LastMile.jpg" alt="Logo LastMile" />
        </Link>
      </motion.div>

      <div className="Links">
        <LinksNavegacion />
      </div>

      <div className="RastrearGuia" ref={rastrearGuiaRef}>
        <Link className="LinkGuia" to="/RastrearGuia">
          <Lottie
            title="Rastrear Guia"
            className="Trak"
            animationData={Animation}
            loop={true}
          />
        </Link>
      </div>

      <MenuHamburguer />
    </header>
  );
}

export default Header;
