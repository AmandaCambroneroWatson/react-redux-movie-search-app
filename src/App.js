import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/movie/:imdbID" element={<MovieDetail />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
