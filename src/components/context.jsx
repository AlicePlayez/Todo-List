

import { createContext, useContext, useState } from "react";

// export const Context = () => {
//     const [name, setName] = useState("")
//     return(
//         <div>
//             <Input change={setName}/>
//             <Name name={name}/>

//         </div>
//     )
// }

// const Name = (props) => {
//     return <h1>My Name is {props.name}</h1>
// }

// const Input = (props) => {
//     return <div>
//             <h1>Change Name</h1>
//             <input type="text" onChange={(e)=> props.change(e.target.value)}/>
//         </div>
// }



const Data = createContext()

export const Context = () => {
    const [name, setName] = useState("...")
    const [email, setEmail] = useState("")

    return(
        <Data.Provider value={{name, setName, email, setEmail}}>
            <div>
                <Input />
                <Name />

            </div>
        </Data.Provider>

    )
}

const Name = () => {
    const {name} = useContext(Data)
    return <h1>My Name is {name} </h1>
}

const Input = () => {
    const {setName} = useContext(Data)

    return <div>
            <h1>Change Name</h1>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
}