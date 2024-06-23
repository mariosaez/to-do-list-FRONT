import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { UserDTO } from '../api/models';
import HomeComponent from '../components/HomeComponent';

export const Home: React.FC = () => {
    const location = useLocation();
    const userData = location.state?.userData as UserDTO;
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
                    <HomeComponent
                        userData={userData}
                    />
                </Container>
            </Box>
        </>
    );
};

export default Home;
