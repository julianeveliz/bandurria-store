import { React, useContext, useState, useEffect } from "react";
import { DataContext } from "../CartContext/CartContext";

const Alert = () => {
    const [show, setShow] = useState(false);
    const { message, setMessage } = useContext(DataContext);

    useEffect(() => {
        if (message) {
            setShow(true);

            setTimeout(() => {
                setShow(false);
                setMessage('');
            }, 3000);
        }
    }, [message]);

    if (show) {
        return (
            
            <p className="bg-custgreen h-10 z-40 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
              {message}
            </p>
          );
    }
}

export default Alert;