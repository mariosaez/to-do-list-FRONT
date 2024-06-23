import React from 'react';
import { Snackbar, Alert } from '@mui/material';

interface CustomSnackBarProps {
    open: boolean;
    autoHideDuration?: number;
    onClose: () => void;
    severity: "success" | "error" | "warning" | "info";
    message: string;
}

const CustomSnackBar: React.FC<CustomSnackBarProps> = 
({  open,
    autoHideDuration = 6000,
    onClose,
    severity,
    message
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