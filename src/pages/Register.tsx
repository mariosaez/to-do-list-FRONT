import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import RegisterForm from "../components/RegisterForm";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const handleRegister = () => {};

    return(
        <>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    minHeight: "100vh",
                    backgroundColor: "#f5f5f5",
                }}
            >
                <Container maxWidth="xs" sx={{ boxShadow: 6 }}>
                    <CssBaseline />
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            p: 2
                        }}
                    />
                    <RegisterForm
                        onRegister={Register}
                    />
                </Container>
            </Box>
        </>
    );
};

export default Register;