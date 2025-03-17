import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/components/LinksNavegacion.css";

function LinksNavegacion(props) {
  const navigation = [
    { id: 0, title: "Inicio", path: "/" },
    { id: 1, title: "Conocenos", path: "/Conocenos" },
    // { id: 2, title: "Casillero Deluxe USA", path: "/Casillero" },
    { id: 3, title: "Servicios", path: "/Servicios" },
    { id: 4, title: "News", path: "/News" },
    { id: 5, title: "Únete", path: "/Unete" },
    {
      id: 6,
      title: "LasTraking",
      path: "/LasTraking",
      highlight: "Las",
      normal: "Traking",
    },
  ];

  const cerrarMenu = () => {
    if (props.cerrarMenu) {
      props.cerrarMenu();
    }
  };

  return (
    <nav aria-label="links de navegación">
      <ul>
        {navigation.map((item) => (
          <motion.li
            key={item.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onHoverStart={() => console.log("hover started!")}

            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: .5, delay:.3 } }}

          >
            <NavLink
              to={item.path}
              activeclassname="active"
              onClick={cerrarMenu}
            >
              {item.highlight ? (
                <span>
                  <motion.span
                    animate={{
                      color: "var(--amarillo-oscuro)",
                      transition: { duration: 0.8, delay: 1 },
                    }}
                  >
                    {item.highlight}
                  </motion.span>
                  {item.normal}
                </span>
              ) : (
                item.title
              )}
            </NavLink>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
}

export default LinksNavegacion;
