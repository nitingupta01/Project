import React from "react";
import Navbar from "./components/navbar";
import Paral from "./components/Parallax";
import Stat from "./components/stats";
import Product from "./components/product";

function App(){
    return(
        <div>
        <Navbar />
        <Paral />
        <Stat />
        <Product />
        </div>
    );
}

export default App;