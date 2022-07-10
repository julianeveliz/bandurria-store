import React from "react";

const Message = ({ message }) => {
    return (
        <div className="flex items-center justify-center w-full h-screen opacity-75 z-50 fixed top-0 left-0 right-0 bottom-0 m-auto bg-slate-100 overflow-hidden">
            <p className="text-base">{message}</p>
        </div>
    );
}

export default Message;