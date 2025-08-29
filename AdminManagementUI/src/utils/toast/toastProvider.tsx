import { useState, type ReactNode } from 'react';
import { Snackbar, Alert, type AlertColor } from '@mui/material';
import { ToastContext } from './toastContext';

interface ToastProviderProps {
    children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState<AlertColor>('info');

    const showToast = (msg: string, sev: AlertColor = 'error') => {
        setMessage(msg);
        setSeverity(sev);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }} variant="filled">
                    {message}
                </Alert>
            </Snackbar>
        </ToastContext.Provider>
    );
};
