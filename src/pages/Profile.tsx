import { Box, Container, CssBaseline } from '@mui/material';
import React from 'react';
import { useStore } from '../hooks/useStore';
import ProfileComponent from '../components/ProfileComponent';


export const Profile: React.FC = () => {
    const userData = useStore((state) => state.userData);
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
                    <ProfileComponent
                        userData={userData!}
                    />
                </Container>
            </Box>
        </>
    );
};

export default Profile;