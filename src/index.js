import React from "react";
import  ReactDOM from "react-dom/client";
import {BrowserRouter as Router, Routes,Route,Navigate} from "react-router-dom";
import Signup from "./screens/Signup"
import Login  from "./screens/Login"
import App  from "./App";

const element = document.getElementById("root");

const root  = ReactDOM.createRoot(element);

root.render(
     <Router>
        <Routes>
            <Route path="/" element={<Signup/>} />
            <Route path="/App" element={<App/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/signup" element={<Signup/>} />
        </Routes>
     </Router>
)
