import { useState } from "react";

export const Checkbox = () => {
const [isChecked, setIsChecked] = useState(false);

const handleCheckboxClick = (event) => {
    setIsChecked(event.target.checked)
}

    return (
        <>
       <form>
        <label>
            Checkbox
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxClick} />
        </label>
       </form>
       {isChecked ? <p>Pažymėtas</p> : <p>Nepažymėtas</p>}
        </>
    );
};