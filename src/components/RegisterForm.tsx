import { Box, Button, Container, CssBaseline, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userControllerApi } from '../api';
import { isFormValid, isValidEmail, manageErrorResponse } from '../utils/formUtils';
import CustomSnackBar from './CustomSnackbar';
import FormInput from './FormInput';

interface RegisterFormProps{
    onRegister: (
        name: string, 
        surname: string, 
        username: string, 
        password: string, 
        email: string
        ) => void;
};

const RegisterForm: React.FC<RegisterFormProps> = ({
    onRegister,
}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
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

    return (
        <Box sx={{ mt: 1, p: 2 }}>
            <Typography variant="h5">Register</Typography>
            <FormInput
                    id="name"
                    name="name"
                    label="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
            />
            <FormInput
                    id="surname"
                    name="surname"
                    label="surname"
                    value={surname}
                    onChange={(e) => setSurname(e.target.value)}
            />
            <FormInput
                    id="email"
                    name="email"
                    label="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
                    id="username"
                    name="username"
                    label="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
            />
            <FormInput
                    id="password"
                    name="password"
                    label="password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    showPassword={showPassword}
                    handleClickShowPassword={handleClickShowPassword}
                    handleMouseDownPassword={handleMouseDownPassword}
            />
            <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2}}
                        onClick={handleRegister}
                        disabled={!isFormValidState}
            >
                Register
            </Button>
            <Grid container justifyContent={"flex-end"}>
                <Grid item>
                    <Link to="/">Return to Login</Link>
                </Grid>
            </Grid>
            <CustomSnackBar
                open={snackbarOpen}
                autoHideDuration={6000}
                message={snackbarMessage}
                onClose={handleCloseSnackbar}
            />
        </Box>
    );
};

export default RegisterForm;