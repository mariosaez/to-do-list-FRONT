
import { useStore } from '../hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { manageErrorResponse } from '../utils/formUtils';
import { taskControllerApi } from '../api';

export const useHomeViewModel = () => {
    const { userData, setUserData } = useStore((state) => ({
        userData: state.userData,
        setUserData: state.setUserData
    }));
    const navigate = useNavigate();

    const handleClickExit = async () => {
        setUserData(null)
        navigate('/');
    };

    const handleClickProfile = async () => {
        navigate('/profile');
    };

    const findTasks = async () => {
        try {
            const task = await taskControllerApi.getAll1
            setUserData(response)
            navigate('/profile');
        } catch (error: any) {
            const message = manageErrorResponse(parseInt(error.message));
            setSnackbarMessage(message);
            setSnackbarOpen(true);
        }
    };

    

    return {
        userData,
        handleClickExit,
        handleClickProfile,
        handleDrop
    }
};
