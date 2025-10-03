
// import './App.css';
// // import { User } from "./user"

// function App() {
//   return (
//     <div className="App">
//       <User name="User11111" email="user11111@gmail.com" salary={10000} age={25} />
//       <User name="User22222" email="user2222@gmail.com" salary={220000} age={35} />
//     </div>
//   ) 
// }


// const User = (props) => {
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             <h2>{props.email}</h2>
//             <h3>{props.salary +1}</h3>
//             <h4>{props.age}</h4>
//         </div>
//     )
// }


// export default App;



































// import './App.css';
// // import { Job } from "./job"
// function App() {
//   return (
//     <div className="App">
//       <Job salary={100000} position="CEO" company="Apple" />
//     </div>
//   ) 
// }

// const Job = (props) => {
//     return (
//         <div>
//             <h1>{props.salary}</h1>
//             <h1>{props.position}</h1>
//             <h2>{props.company}</h2>
//         </div>
//     )
// }


// export default App;


// import "./App.css"

// function App() {
//   let employees = [
//     {
//       name: "Ahmed",
//       age: 24,
//       company: "Apple",
//       salary: "$100,000"
//     },
//     {
//       name: "Layla",
//       age: 20,
//       company: "Google",
//       salary: "$250,000"
//     },
//     {
//       name: "Omar",
//       age: 31,
//       company: "Samsung",
//       salary: "$150,000"
//     }
//   ];

//   return (
//     <div className="App">
//       {employees.map((user) => (
//         <h1>
//           {user.name} is {user.age} years old and works at {user.company} with a salary of {user.salary}
//         </h1>
//       ) )}
//     </div>
//   )

// }



// import "./App.css"

// function App() {
//   let UserCard = [
//     {
//       name: "Ahmed",
//       age: 24,
//       company: "Apple",
//       salary: "10000"
//     },
//     {
//       name: "Layla",
//       age: 20,
//       company: "Google",
//       salary: "26000"
//     },
//     {
//       name: "Omar",
//       age: 31,
//       company: "Samsung",
//       salary: "15000"
//     },
//     {
//       name: "Reem",
//       age: 33,
//       company: "Microsoft",
//       salary: "50000"
//     }
//   ];

//   return (
//     <div className="App">

//         {UserCard.map((user) => (

//           user.salary > 25000 ?
//               <h1>
//               {user.name} is {user.age} years old and works at {user.company} with a salary of {user.salary}
//               </h1>
//               :
//               <h1></h1>
//         ) )}
//     </div>
//   )

// }



// import { useState } from "react";

// function App() {
//   let [number, setNumber] = useState(0);


//   function increase(){
//     setNumber(number += 1)
//   }
//   function decrease(){
//     number < 1 ?
//       setNumber(number = 0)
//       :
//       setNumber(number -= 1)
//   }
//   function reset(){
//     setNumber(number = 0)
//   }

//   return (
//     <div className="App">
//       {number}
//       <button onClick={increase}>increase</button>
//       <button onClick={decrease}>decrease</button>
//       <button onClick={reset}>reset</button>
//     </div>
//   )
// }


// import "./App.css"

// import { useState } from "react";

// function App() {

//   const [light, setTheme] = useState(true)

//   function toggle() {
//     if (light) {
//       setTheme(false)
//     }
//     else{
//       setTheme(true)
//     }
//   }

//   return (
//     <div className="App" style={{height:"100vh", backgroundColor:light?"white":"black"}}>
//       <button onClick={toggle}>Toggle</button>
//     </div>
//   )
// }



// import "./App.css"

// import { useState } from "react";

// function App() {

//   const [light, setThemeA] = useState(true)

//   function restart() {
//     if (light) {
//       setThemeA(false)
//     }
//     else{
//       setThemeA(true)
//     }
//   }

//     const [red, setThemeB] = useState(false)

//   function Fred() {
//     if (red) {
//       setThemeB(false)
//     }
//     else{
//       setThemeB(true)
//     }
//   }

//     const [blue, setThemeC] = useState(false)

//   function Fblue() {
//     if (blue) {
//       setThemeC(false)
//     }
//     else{
//       setThemeC(true)
//     }
//   }

//     const [green, setThemeD] = useState(false)

//   function Fgreen() {
//     if (green) {
//       setThemeD(false)
//     }
//     else{
//       setThemeD(true)
//     }
//   }

//   return (
//     <div className="App" style={{height:"100vh", backgroundColor:"white"}}>
//       <button onClick={restart}>Restart</button>
//     </div>,
//     <div className="App" style={{height:"100vh", backgroundColor:"red"}}>
//       <button style={{marginRight:"30px"}} onClick={Fred}>Red</button>
//     </div>,
//     <div className="App" style={{height:"100vh", backgroundColor:"blue"}}>
//       <button style={{marginRight:"30px"}} onClick={Fblue}>Blue</button>
//     </div>,
//     <div className="App" style={{height:"100vh", backgroundColor:"green"}}>
//       <button style={{marginRight:"30px"}} onClick={Fgreen}>Green</button>
//     </div>
//   )
// }


// import "./App.css"

// import { useState } from "react";

// function App(){
//   const [color, setColor] = useState("white");

// function restart() {
//   setColor("white");
// }

// return(

// <div className="App" style={{ height: "100vh", backgroundColor: color}}>
//   <div style={{marginTop:"16%", marginBottom:"40px"}}><button style={{color:"grey", fontSize:"20px", padding:"10px 30px", borderRadius:"10px", border:"1px solid grey"}} onClick={restart}>Restart</button></div>
  
//   <button onClick={() => setColor("red")} style={{marginRight:"20px", color:"red", fontSize:"20px", padding:"10px 30px", borderRadius:"10px", border:"1px solid red"}}>Red</button>
//   <button onClick={() => setColor("blue")} style={{marginRight:"20px", color:"blue", fontSize:"20px", padding:"10px 30px", borderRadius:"10px", border:"1px solid blue"}}>Blue</button>
//   <button onClick={() => setColor("green")} style={{marginRight:"20px", color:"green", fontSize:"20px", padding:"10px 30px", borderRadius:"10px", border:"1px solid green"}}>Green</button>
// </div>

// )

// }

// import "./App.css"
// import {Input} from "./components/input"
// import { Todolist } from "./components/Todolist";
// import { Spa } from "./components/spa";
// import { Effect } from "./components/effect";
// import { API } from "./components/API";
// import { Context } from "./components/context";



// function App(){
//   return(
//     <div style={{textAlign: "center", fontSize: "28px"}}>
//       {/* <Input />
//       <Todolist /> */}
//       {/* <Spa /> */}
//       {/* <Effect /> */}
//       {/* <API /> */}
//       {/* <Context /> */}

//     </div>
//   )
// }

import "./App.css"
import Navbar from "./components2/navbar"
import Home from "./pages2/homeIndex"
import About from "./pages2/about"
import Contact from "./pages2/contact"
import Profile from "./pages2/userProfile"
import ProductDetails from "./pages2/productDetails"
import EditProfile from "./pages2/editProfile"
import NotFound from "./pages2/notFound"
import Cart from "./components2/cart"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "bootstrap-icons/font/bootstrap-icons.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext, useState } from "react"

export const Data = createContext()

function App(){

  const [fname, setFName] = useState("Hala")
  const [sname, setSName] = useState("Amgad")
  const [email, setEmail] = useState("aliceplayez@gmail.com")
  const [phoneNumber, setPhoneNumber] = useState("0552397565")
  const [list, setList] = useState([])


  return(

    <Data.Provider value={{list, setList, fname, setFName, sname, setSName, email, setEmail, phoneNumber, setPhoneNumber}}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </Data.Provider>

    
  )
}

export default App;
