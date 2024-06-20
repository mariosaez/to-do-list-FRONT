import { Avatar, Box, Container, CssBaseline } from "@mui/material";
import { useState } from "react"

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
            >
                <Avatar 





         </Container>
        </>
    )

}