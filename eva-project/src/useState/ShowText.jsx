import { useState } from "react";

export const ShowText = () => {

const [showText, setShowText] = useState(false);

const handleOnClick = () => {
    if (showText) {
        setShowText(false);
    } else {
        setShowText(true);
    }
}

  return (
    <>
    <button onClick={handleOnClick}>Read {showText ? "less" : "more"}</button>
     {showText && <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ab eligendi, dicta rem, repudiandae officia
        incidunt hic porro omnis quia possimus enim in. Labore doloribus animi facere sint ea facilis.
      </p>}
    </>
  );
};
