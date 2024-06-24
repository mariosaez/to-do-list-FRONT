import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserDTO } from "../api/models";

interface HomeProps{
    userData: UserDTO;
};

const HomeComponent: React.FC<HomeProps> = ({
    userData,
}) => {
    const navigate = useNavigate();
    
    const handleClick = async () => {
        navigate('/');
    };

    return (
        <Box sx={{ mt: 1, p: 2 }}>
            <Typography variant="body1">Welcome, {userData.username!}</Typography>
            <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleClick}
            ></Button>
        </Box>
    );
};

export default HomeComponent;