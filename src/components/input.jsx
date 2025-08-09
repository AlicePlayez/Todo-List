import {useState} from "react";

export const Input = () => {
    const [inputValue, setInputValue] = useState("")
    const [value, setValue] = useState("")

    const change = () => {
        setValue(inputValue)
    }
    const handleChange = (e) => {
        setInputValue(e.target.value)
    }


    return(
        <div>
            <input type="text" onChange={handleChange}/>
            <button onClick={change}>Click</button>
            <p>{value}</p>
        </div>
    )

}