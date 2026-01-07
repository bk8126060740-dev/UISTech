import { useState } from 'react';

const useAlert = () => {
    const [alert, setAlert] = useState({
        open: false,
        message: '',
        success: false,
    });

    const showAlert = (message, success = true) => {
        if (message) {
            setAlert({ open: true, message, success });
    
            setTimeout(() => {
                setAlert({ open: false, message: '', success: false });
            }, 5000);
        }
    };

    return {
        alert,
        showAlert
    };
};

export default useAlert;
