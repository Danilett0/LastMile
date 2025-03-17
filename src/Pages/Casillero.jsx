import React from "react";
import { Helmet } from "react-helmet";
import useLoading from "../Hooks/useLoading";
import Loading from "../Components/Loading";
import "../App.css";
import "../styles/pages/Casillero.css";

function Casillero() {
  const loadingPage = useLoading("Casillero", 300);

  return (
    <>
      {loadingPage ? (
        <Loading />
      ) : (
        <>
          <Helmet>
            <title>Last Mile - Casillero Deluxe</title>
            <meta
              name="description"
              content="una corta description de la pagina"
            />
            <meta name="keywords" content="palabras clave para esta pagina" />
            <link rel="canonical" href="https://www.dominio.com/Casillero" />

            {/* Etiquetas Open Graph */}
            <meta property="og:title" content="titulo de la pagina" />
            <meta
              property="og:description"
              content="description corta de la pagina"
            />
            <meta property="og:image" content="<URL>" />
            <meta property="og:url" content="<URL>" />
          </Helmet>

          <main></main>
        </>
      )}
    </>
  );
}

export default Casillero;
