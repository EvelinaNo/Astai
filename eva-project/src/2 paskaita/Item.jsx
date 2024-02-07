const Item = ({ title, isSubmitable }) => {

    return (
        <>
<input type="checkbox" checked={isSubmitable} />
<p>Clean</p>
</>
    )
}

export default Item;