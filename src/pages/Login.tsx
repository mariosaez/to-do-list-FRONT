import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react"
import { Link } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {};

    return (
        <>
         <Container maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    mt: 20,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            />
                <Avatar sx={{ m: 1, bgcolor: "primary.light"}}>
                    <LoginIcon />
                </Avatar>
                <Typography variant="h5">Login</Typography>
                <Box sx={{ mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        name="username"
                        label="username"
                        autoFocus
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2}}
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <Grid container justifyContent={"flex-end"}>
                        <Grid item>
                            <Link to="/register">Don't have an account? Register</Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default Login;