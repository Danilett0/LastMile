import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Loading from "../Components/Loading";
import useLoading from "../Hooks/useLoading";
import CarruselClientes from "../Components/CarruselClientes";
import "../App.css";
import "../styles/pages/Home.css";

function Home() {
  const loadingPage = useLoading("home", 300);

  useEffect(() => {
    const handleLoad = () => {
      const video = document.getElementById("background-video");
      if (video) {
        video.oncontextmenu = (e) => {
          e.preventDefault();
        };
      }
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Last Mile</title>
            <meta
              name="description"
              content="una corta description de la pagina"
            />
            <meta name="keywords" content="palabras clave para esta pagina" />
            <link rel="canonical" href="https://www.lastmile.com/Home" />

            {/* Etiquetas Open Graph */}
            <meta property="og:title" content="titulo de la pagina" />
            <meta
              property="og:description"
              content="description corta de la pagina"
            />
            <meta property="og:image" content="<URL>" />
            <meta property="og:url" content="<URL>" />
          </Helmet>

          <main className="Home">
            <video id="background-video" autoPlay loop muted>
              {" "}
              <source src="/videos/home.mp4" type="video/mp4" /> Tu navegador no
              soporta el elemento de video.{" "}
            </video>

            <motion.div
              className="BoxBienvenida"
              initial={{ scale: 0 }}
              animate={{ scale: 1, transition: { duration: 1, delay: "0.3" } }}
            >
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, delay: 0.7 },
                }}
              >
                <motion.span
                  className="Mayus"
                  animate={{
                    color: "var(--amarillo-oscuro)",
                    transition: { duration: 0.8, delay: 1.5 },
                  }}
                >
                  {" "}
                  Last{" "}
                </motion.span>
                <span className="Mayus">Mile</span> Tu Solución de Logística
                Integral
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1, delay: 1.5 },
                }}
              >
                En{" "}
                <motion.span
                  className="Mayus"
                  animate={{
                    color: "var(--amarillo-oscuro)",
                    transition: { duration: 0.8, delay: 1 },
                  }}
                >
                  {" "}
                  Last{" "}
                </motion.span>
                <span className="Mayus">Mile</span>, nos especializamos en
                ofrecer servicios logísticos rápidos, eficientes y de confianza.
                Nuestra experiencia garantiza que tus envíos lleguen a su
                destino de manera segura y puntual.
              </motion.p>
            </motion.div>

            <CarruselClientes Data={"Clientes"} />
          </main>
        </>
      )}
    </>
  );
}

export default Home;
