import {React, useState} from "react";

const Button = (props) => {
    const a = useState(0);   
    console.log(a);
    return(
        <button>{props.text}</button>
    );
} 

Button.defaultProps = {
    text: "Default text"
}

export default Button;