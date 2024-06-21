import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import CreateIcon from '@mui/icons-material/Create';
import { Link } from "react-router-dom";

export const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");

    const handleRegister = () => {};

    return(
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
                <Avatar sx={{m: 1, bgcolor: "primary.light"}}>
                    <CreateIcon />
                </Avatar>
                <Typography variant="h5">Register</Typography>
                <Box sx={{mt: 1}}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        name="name"
                        label="name"
                        autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="surname"
                        name="surname"
                        label="surname"
                        autoFocus
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        name="email"
                        label="email"
                        type="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
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
                        label="password"
                        type="password"
                        autoFocus
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2}}
                        onClick={handleRegister}
                    >
                        Register
                    </Button>
                    <Grid container justifyContent={"flex-end"}>
                        <Grid item>
                        <Link to="/">Return to Login</Link>
                        </Grid>
                    </Grid>
                </Box>
        </Container>
        </>
    );
};

export default Register;