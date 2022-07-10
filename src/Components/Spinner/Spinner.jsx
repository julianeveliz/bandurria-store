import React from "react";

const Spinner = () => {
    let circleCommonClasses = 'h-2.5 w-2.5 bg-custgreen rounded-full' ;

    return (
        <div className='flex items-center justify-center w-full h-screen opacity-75 z-30 fixed top-0 left-0 right-0 bottom-0 m-auto bg-slate-100 overflow-hidden'>
            <div className={`${circleCommonClasses} mr-1 animate-bounce`}></div>
            <div
                className={`${circleCommonClasses} mr-1 animate-bounce200`}
            ></div>
            <div className={`${circleCommonClasses} animate-bounce400`}></div>
        </div>
    );
};

export default Spinner;
