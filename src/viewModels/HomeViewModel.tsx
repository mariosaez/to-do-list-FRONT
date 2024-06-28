
import { useStore } from '../hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { TaskDTO } from '../api/models';

export const useHomeViewModel = () => {
    const { userData, setUserData } = useStore((state) => ({
        userData: state.userData,
        setUserData: state.setUserData
    }));
    const navigate = useNavigate();
    const [snackbarMessage, setSnackbarMessage] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [selectedTask, setSelectedTask] = useState<TaskDTO | null>(null);
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

    const handleCardClick = (task: TaskDTO) => {
        setSelectedTask(task);
      };
    
      const handleCloseModal = () => {
        setSelectedTask(null);
      };
    return {
        userData,
        handleClickExit,
        handleClickProfile,
        snackbarMessage,
        snackbarOpen,
        handleCloseSnackbar,
        handleCardClick,
        handleCloseModal,
        selectedTask
    }
};
