import { Box, Button} from "@mui/material";
import { UserDTO } from "../api/models";

interface HomeViewProps{
    userData: UserDTO;
    handleClickExit: (e: React.MouseEvent<HTMLButtonElement>) => void;
    handleClickProfile: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const HomeView: React.FC<HomeViewProps> = ({
    userData,
    handleClickExit,
    handleClickProfile,
}) => {

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

export default HomeView;