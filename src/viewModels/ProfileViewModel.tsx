import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userControllerApi } from "../api";
import { UserDTO } from "../api/models";
import { useStore } from "../hooks/useStore";
import { manageErrorResponse } from "../utils/formUtils";

export const useProfileViewModel = () => {
    const { userData, setUserData } = useStore((state) => ({
        userData: state.userData,
        setUserData: state.setUserData
    }));
    const [name, setName] = useState(userData?.name || "");
    const [surname, setSurname] = useState(userData?.surname || "");
    const [username, setUsername] = useState(userData?.username || "");
    const [email, setEmail] = useState(userData?.email || "");
    const [password, setPassword] = useState(userData?.password || "");
    const [showPassword, setShowPassword] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [buttonName, setbuttonName] = useState("Edit fields");
    const navigate = useNavigate();
    const colors = [
        "#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF33A1", "#33FFA1",
        "#A133FF", "#FFA133", "#33A1FF", "#FF5733", "#57FF33", "#5733FF",
      ];

      const handleClickSave = async () => {
        try {
            const userDTO: UserDTO = {
                id: userData!.id,
                name,
                surname,
                username,
                email,
                password
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
    
    const handleClickReturn = async () => {
        navigate('/home');
    };

    const handleClickEdit = async () => {
        setIsDisabled(prevState => !prevState);
        setbuttonName("Save")

        if (buttonName === "Save") {
            try {
                const userDTO: UserDTO = {
                    id: userData!.id,
                    name,
                    surname,
                    username,
                    email,
                    password
                };
                const response = await userControllerApi.updateUser({ userDTO });
                setUserData(response)
                setIsDisabled(true);
                setbuttonName("Edit fields")
            } catch (error: any) {
                const message = manageErrorResponse(parseInt(error.message));
                setSnackbarMessage(message);
                setSnackbarOpen(true);
            }
        }
    };

    const setAvatarColor = (identifier: string) => {
        if (!identifier) return colors[0];
        const index = identifier.length % colors.length;
        return colors[index];
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return {
        handleClickEdit,
        handleClickReturn,
        setAvatarColor,
        name,
        surname,
        username,
        password,
        email,
        showPassword,
        snackbarMessage,
        snackbarOpen,
        setUserData,
        onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value),
        onChangeSurname: (e: React.ChangeEvent<HTMLInputElement>) => setSurname(e.target.value),
        onChangeUsername: (e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value),
        onChangeEmail: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
        onChangePassword: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
        handleCloseSnackbar,
        handleClickShowPassword,
        handleMouseDownPassword,
        userData,
        isDisabled,
        buttonName
    };
};