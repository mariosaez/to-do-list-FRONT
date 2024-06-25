import { useState } from "react";
import { useStore } from "../hooks/useStore";
import { useNavigate } from "react-router-dom";
import { userControllerApi } from "../api";
import { isFormValid, manageErrorResponse } from "../utils/formUtils";

export const useLoginViewModel = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const setUserData = useStore((state) => state.setUserData);
    const navigate = useNavigate();

    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleToggleShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const isFormValidState = isFormValid([username, password]);

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const handleLogin = async () => {
        try {
            const response = await userControllerApi.login({ loginRequestDTO: { username, password } });
            setUserData(response);
            navigate('/home');
        } catch (error: any) {
            const message = manageErrorResponse(error.response.status);
            setSnackbarMessage(message);
            setSnackbarOpen(true);
        }
    };

    return {
        username,
        password,
        showPassword,
        snackbarMessage,
        snackbarOpen,
        handleUsernameChange,
        handlePasswordChange,
        handleToggleShowPassword,
        handleMouseDownPassword,
        handleLogin,
        handleCloseSnackbar,
        isFormValidState
    };
};
