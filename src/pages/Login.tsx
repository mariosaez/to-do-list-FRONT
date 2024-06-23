import { Box, Container, CssBaseline} from "@mui/material";
import LoginForm from "../components/LoginForm";
import {login} from '../api';

export const Login = () => {
    return (
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
                    <LoginForm
                        onLogin={login}
                    />
                </Container>
            </Box>
        </>
    );
};

export default Login;
