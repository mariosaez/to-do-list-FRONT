import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userControllerApi } from "../api";
import { UserDTO } from "../api/models";
import { useStore } from "../hooks/useStore";
import { manageErrorResponse } from "../utils/formUtils";
import CustomSnackBar from "./CustomSnackbar";
import FormInput from "./FormInput";

interface EditProfileProps{
    userData: UserDTO;
};

const EditProfileComponent: React.FC<EditProfileProps> = ({
    userData,
}) => {
    const [name, setName] = useState(userData.name);
    const [surname, setSurname] = useState(userData.surname);
    const [username, setUsername] = useState(userData.username);
    const [email, setEmail] = useState(userData.email);
    const [password, setPassword] = useState(userData.password);
    const [showPassword, setShowPassword] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const setUserData = useStore((state) => state.setUserData);
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            const userDTO: UserDTO = {
                id: userData.id,
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

    return (
        <Box sx={{ mt: 1, p: 2 }}>
            <Typography variant="h5">Edit</Typography>
            <FormInput
                id="name"
                name="name"
                label="Name"
                value={name!}
                onChange={(e) => setName(e.target.value)}
            />
            <FormInput
                id="surname"
                name="surname"
                label="Surname"
                value={surname!}
                onChange={(e) => setSurname(e.target.value)}
            />
            <FormInput
                id="username"
                name="username"
                label="Username"
                value={username!}
                onChange={(e) => setUsername(e.target.value)}
            />
            <FormInput
                id="email"
                name="email"
                label="Email"
                value={email!}
                onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
                id="password"
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password!}
                onChange={(e) => setPassword(e.target.value)}
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
            />
            <Button
                fullWidth
                variant="contained"
                sx={{ flex: 1, mt: 3, mb: 2 }}
                onClick={handleClick}
            >   Save
            </Button>
            <CustomSnackBar
                open={snackbarOpen}
                autoHideDuration={6000}
                message={snackbarMessage}
                onClose={handleCloseSnackbar}
            />
        </Box>
    );
};

export default EditProfileComponent;