import React from "react";

export const Button = ({type, text, styles}) => {
    return (
        <button type={type} className={["btn", styles].join(' ')} data-bs-toggle="modal" data-bs-target="#exampleModal">
            {text}
        </button>
    );
};