import React from "react";

export const Button = (props) => {
    return (
        <button type={props.params.type} className={["btn", props.params.styles].join(' ')} data-bs-toggle="modal" data-bs-target="#exampleModal">
            {props.params.text}
        </button>
    );
};