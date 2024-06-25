import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userControllerApi } from '../api';
import { useStore } from '../hooks/useStore';
import { isFormValid, isValidEmail, manageErrorResponse } from '../utils/formUtils';

export const useRegisterViewModel = () => {
    const { userData, setUserData } = useStore((state) => ({
        userData: state.userData,
        setUserData: state.setUserData
    }));
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleRegister = async () => {
        if (!isValidEmail(email)) {
            setSnackbarMessage("Invalid email format");
            setSnackbarOpen(true);
            return;
        }
        try {
            await userControllerApi.registerUser({ userRegisterDTO: {username, password, email, name, surname} });
            navigate('/');
        } catch (error: any) {
            const message = manageErrorResponse(parseInt(error.message));
            setSnackbarMessage(message);
            setSnackbarOpen(true);
        }
    };

    const fields = [username, password, name, surname, email];
    const isFormValidState = isFormValid(fields);

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    return {
        handleClickShowPassword,
        handleMouseDownPassword,
        handleRegister,
        isFormValidState,
        handleCloseSnackbar,
        userData
    };
};