import { Box, Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserDTO } from "../api/models";

interface HomeProps{
    userData: UserDTO;
};

const HomeComponent: React.FC<HomeProps> = ({
    userData,
}) => {
    const navigate = useNavigate();
    
    const handleClickExit = async () => {
        navigate('/');
    };

    const handleClickProfile = async () => {
        navigate('/profile');
    };

    return (
        <Box sx={{ mt: 1, p: 2, display: 'flex', flexDirection: 'row', gap: 2 }}>
            <Button
                fullWidth
                variant="contained"
                sx={{ flex: 1, mt: 3, mb: 2 }}
                onClick={handleClickExit}
            >   Exit
            </Button>
            <Button
                variant="contained"
                sx={{ flex: 1, mt: 3, mb: 2 }}
                onClick={handleClickProfile}
            >
                Profile
            </Button>
        </Box>
    );
};

export default HomeComponent;