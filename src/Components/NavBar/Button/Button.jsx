import React from "react";

const Button = ({ message }) => {
    return (
        <button className="bg-custgreen text-sm text-white py-2 px-6 rounded md:ml-8 hover:bg-custgreen-400 duration:500 uppercase">
            {message}
        </button>
    )
}

export default Button;