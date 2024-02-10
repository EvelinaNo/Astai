import { useState } from "react"

export const Dropdown = () => {
const [dropdownValue, setDropdownValue] = useState('Kaunas');
const changeDropdownValue = (e) => {
    setDropdownValue(e.target.value)
}

    return (
        <>
        <form>
            <label>
                Dropdown
                <select value={dropdownValue} onChange={changeDropdownValue}>
                    <option value='Vilnius'>Vilnius</option>
                    <option value='Kaunas'>Kaunas</option>
                    <option value='Klaipėda'>Klaipėda</option>
                </select>
            </label>
        </form>
        <p>Aš važiuosiu į {dropdownValue}</p>
        </>
    )
}