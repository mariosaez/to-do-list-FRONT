import { Box, Button} from "@mui/material";
import { useHomeViewModel } from "../viewModels/HomeViewModel";
import { DroppableComponent } from "../components/DroppableComponent";
import { CardComponent } from "../components/TaskCard";

export const HomeView = () => {
    const {userData, handleClickExit, handleClickProfile, handleDrop} = useHomeViewModel();
    return (
        <Box sx={{ mt: 1, p: 2, display: 'flex', flexDirection: 'row', gap: 2 }}>
            <CardComponent >

            </CardComponent>
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