import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react";

import { Navbar } from "./navbar"
import { Home } from "../pages/home"
// import { Products } from "../pages/products"
import { Profile } from "../pages/profile"
import { createContext } from "react";
export const Data = createContext();
export const Spa = () => {
    const [name, setName] = useState("Name");
    const [major, setMajor] = useState("Major");
    const [age, setAge] = useState("Age");
    const [email, setEmail] = useState("Email");
    const [phone, setPhone] = useState("Phone");
    const [brief, setBrief] = useState("Brief");
    return(
        <Data.Provider value={{ name, setName, major, setMajor, age, setAge, email, setEmail, phone, setPhone, brief, setBrief }}>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/products" element={<Products />} /> */}
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </Router>
        </Data.Provider>
    )
}