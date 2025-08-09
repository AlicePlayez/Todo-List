
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

import "./App.css"
import {Input} from "./components/input"
import { Todolist } from "./components/Todolist";


function App(){
  return(
    <div style={{textAlign: "center"}}>
      {/* <Input /> */}
      <Todolist />
    </div>
  )
}

export default App;
