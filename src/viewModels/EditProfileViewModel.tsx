import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userControllerApi } from "../api";
import { UserDTO } from "../api/models";
import { useStore } from "../hooks/useStore";
import { manageErrorResponse } from "../utils/formUtils";

export const useEditProfileViewModel = () => {
    const { userData, setUserData } = useStore((state) => ({
        userData: state.userData,
        setUserData: state.setUserData
    }));
    const [name, setName] = useState(userData!.name);
    const [surname, setSurname] = useState(userData!.surname);
    const [username, setUsername] = useState(userData!.username);
    const [email, setEmail] = useState(userData!.email);
    const [password, setPassword] = useState(userData!.password);
    const [showPassword, setShowPassword] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const userDTO: UserDTO = {
                id: userData!.id,
                name: name,
                surname: surname,
                username: username,
                email: email,
                password: password
            };
            const response = await userControllerApi.updateUser({ userDTO });
            setUserData(response)
            navigate('/profile');
        } catch (error: any) {
            const message = manageErrorResponse(parseInt(error.message));
            setSnackbarMessage(message);
            setSnackbarOpen(true);
        }
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const onChangeSurname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSurname(e.target.value);
    };

    const onChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value);
    };

    const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return {
        name,
        surname,
        username,
        password,
        email,
        showPassword,
        snackbarMessage,
        snackbarOpen,
        setUserData,
        onChangeName,
        onChangeSurname,
        onChangeUsername,
        onChangeEmail,
        onChangePassword,
        handleClick,
        handleCloseSnackbar,
        handleClickShowPassword,
        handleMouseDownPassword
    };
};