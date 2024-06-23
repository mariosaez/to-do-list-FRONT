import React, { useEffect, useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

interface CustomSnackBarProps {
    autoHideDuration?: number;
    message: string;
    open: boolean;
    onClose: () => void;
}

const CustomSnackBar: React.FC<CustomSnackBarProps> = 
({  open,
    autoHideDuration = 6000,
    message,
    onClose
}) => {
    return (
        <Snackbar 
            open={open} 
            autoHideDuration={autoHideDuration} 
            onClose={onClose}
        >
            <Alert onClose={onClose} severity="error" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default CustomSnackBar;