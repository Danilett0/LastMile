import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import CarruselClientes from "../Components/CarruselClientes";
import Animation from "./Track.json";
import useLoading from "../Hooks/useLoading";
import Loading from "../Components/Loading";
import "../App.css";
import "../styles/pages/LasTraking.css";

function LasTraking() {
  const loadingPage = useLoading("LasTraking", 300);
  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Last Mile -  LasTraking</title>
            <meta
              name="description"
              content="una corta description de la pagina"
            />
            <meta name="keywords" content="palabras clave para esta pagina" />
            <link rel="canonical" href="https://www.dominio.com/LasTraking" />

            {/* Etiquetas Open Graph */}
            <meta property="og:title" content="titulo de la pagina" />
            <meta
              property="og:description"
              content="description corta de la pagina"
            />
            <meta property="og:image" content="<URL>" />
            <meta property="og:url" content="<URL>" />
          </Helmet>

          <main>
            <div className="BoxLasTraking">
              <Lottie
                className="ImgLasTraking"
                animationData={Animation}
                loop={true}
              />
              ;
              <div className="BoxInfoTraking">
                <h1>En nuestro portal corporativo, podrás realizar...</h1>

                <CarruselClientes  Data={"AccionesPortal"} />

                <Link className="Button Yellow" to={"http://tracking.lastmile.com.co/login"} target="_blank">
                ir al portal corporativo 
                </Link>
              </div>
            </div>
          </main>
        </>
      )}
    </>
  );
}

export default LasTraking;
