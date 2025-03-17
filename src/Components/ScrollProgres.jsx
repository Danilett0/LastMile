import React from "react";
import { motion, useScroll } from "framer-motion";

function ScrollProgres(props) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="Progress"
    ></motion.div>
  );
}

export default ScrollProgres;
