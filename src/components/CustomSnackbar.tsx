import React from 'react';
import { Snackbar, Alert, AlertColor } from '@mui/material';

interface CustomSnackBarProps {
    autoHideDuration?: number;
    message: string;
    open: boolean;
    severity: AlertColor;
    onClose: () => void;
}

const CustomSnackBar: React.FC<CustomSnackBarProps> = 
({  open,
    autoHideDuration = 6000,
    message,
    severity,
    onClose
}) => {
    return (
        <Snackbar 
            open={open} 
            autoHideDuration={autoHideDuration} 
            onClose={onClose}
        >
            <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default CustomSnackBar;