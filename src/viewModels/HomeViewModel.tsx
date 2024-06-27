
import { useStore } from '../hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { manageErrorResponse } from '../utils/formUtils';
import { taskControllerApi } from '../api';
import { useState } from 'react';
import { TaskDTO } from '../api/models';
import { GetTaskByUserIdRequest } from '../api/apis';

export const useHomeViewModel = () => {
    const { userData, setUserData } = useStore((state) => ({
        userData: state.userData,
        setUserData: state.setUserData
    }));
    const navigate = useNavigate();
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [taskList, setTaskList] = useState<TaskDTO[]>([]);
    const handleClickExit = async () => {
        setUserData(null)
        navigate('/');
    };

    const handleClickProfile = async () => {
        navigate('/profile');
    };

    const handleCloseSnackbar = () => {
        setSnackbarOpen(false);
    };

    const request: GetTaskByUserIdRequest = { id: userData?.id || "" };

    const findTasks = async () => {
        try {
            const response = await taskControllerApi.getTaskByUserId(request);
            setTaskList(response);
            
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
        taskList,
        snackbarMessage,
        snackbarOpen,
        handleCloseSnackbar
    }
};
