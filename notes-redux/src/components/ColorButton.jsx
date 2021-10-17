import React from "react";

const ColorButton = ({bgColor, setBgColor}) => {
    const colors = ["red", "blue", "green", "purple", "black"];
    const handleClick = (e) => {
        setBgColor(e.target.value);
    }
    return (
        <div>
            {
                colors.map((color, index) => (
                    <button onClick={handleClick} value={color}
                            className={`btn btn-${color} ${color === bgColor ? "btn-active" : "null"} `} key={index}/>
                ))
            }
        </div>
    )
}
export default ColorButton