import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userControllerApi } from '../api';
import { useStore } from '../hooks/useStore';
import { isFormValid, isValidEmail, manageErrorResponse } from '../utils/formUtils';
import { AlertColor } from '@mui/material';

export const useRegisterViewModel = () => {
    const { setUserData } = useStore((state) => ({
        userData: state.userData,
        setUserData: state.setUserData
    }));
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [showPassword, setShowPassword] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState<AlertColor>();
    const navigate = useNavigate();

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const handleRegister = async () => {
        if (!isValidEmail(email)) {
            setSnackbarMessage("Invalid email format");
            setSnackbarOpen(true);
            setSnackbarSeverity("error");
            return;
        }
        try {
            const response = await userControllerApi.registerUser({ userRegisterDTO: {username, password, email, name, surname} });
            setUserData(response)
            navigate('/');
        } catch (error: any) {
            const status = error.response?.status;
            const message = status ? manageErrorResponse(status) : "An unexpected error occurred";
            setSnackbarMessage(message);
            setSnackbarOpen(true);
            setSnackbarSeverity("error");
        }
    };

    const fields = [username, password, name, surname, email];
    const isFormValidState = isFormValid(fields);

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const handleSetName = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setName(e.target.value);
    }

    const handleSetSurname = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setSurname(e.target.value);
    }

    const handleSetUsername = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setUsername(e.target.value);
    }

    const handleSetEmail = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setEmail(e.target.value);
    }

    const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setPassword(e.target.value);
    }

    return {
        handleClickShowPassword,
        handleMouseDownPassword,
        handleRegister,
        isFormValidState,
        handleCloseSnackbar,
        showPassword,
        snackbarMessage,
        snackbarOpen,
        snackbarSeverity,
        handleSetName,
        handleSetSurname,
        handleSetEmail,
        handleSetUsername,
        handleSetPassword,
        name,
        surname,
        username,
        email,
        password
    };
};