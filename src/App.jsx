import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./Components/Loading";
import ChatBox from "./Components/ChatBox";
import Header from "./Components/Header";
import ErrorBoundary from "./Components/ErrorBoundary";
import "./App.css";

const Home = lazy(() => import("./Pages/Home"));
const Conocenos = lazy(() => import("./Pages/Conocenos"));
const Casillero = lazy(() => import("./Pages/Casillero"));
const Servicios = lazy(() => import("./Pages/Servicios"));
const News = lazy(() => import("./Pages/News"));
const Unete = lazy(() => import("./Pages/Unete"));
const LasTraking = lazy(() => import("./Pages/LasTraking"));
const RastrearGuia = lazy(() => import("./Pages/RastrearGuia"));
const NotFound = lazy(() => import("./Pages/NotFound"));

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/Conocenos" element={<Conocenos />} />
            <Route path="/Casillero" element={<Casillero />} />
            <Route path="/Servicios" element={<Servicios />} />
            <Route path="/News" element={<News />} />
            <Route path="/Unete" element={<Unete />} />
            <Route path="/LasTraking" element={<LasTraking />} />
            <Route path="/RastrearGuia" element={<RastrearGuia />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatBox />
        </Router>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
