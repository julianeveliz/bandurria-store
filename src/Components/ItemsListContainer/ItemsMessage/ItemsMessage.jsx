import React from "react";

const ItemsMessage = ({ message }) => {
    return (
        <div className="flex items-center justify-center h-screen">
            {message}
        </div>
    )
}

export default ItemsMessage;