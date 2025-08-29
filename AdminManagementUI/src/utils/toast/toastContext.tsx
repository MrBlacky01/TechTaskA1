import type { AlertColor } from '@mui/material';
import { createContext } from 'react';

interface ToastContextProps {
    showToast: (message: string, severity?: AlertColor) => void;
}

export const ToastContext = createContext<ToastContextProps | undefined>(undefined);
