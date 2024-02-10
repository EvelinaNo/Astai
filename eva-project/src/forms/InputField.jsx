import { useState } from "react"

export const InputField = () => {

const [inputValue, setInputValue] = useState('');
const onTextChange = (event) => {
setInputValue(event.target.value);

}

    return (
        <>
        <form>
        <label>Input form
            <input type="text" value={inputValue} onChange={onTextChange}/>
        </label>
        </form>
        <p>{inputValue}</p>
        </>
    )
}