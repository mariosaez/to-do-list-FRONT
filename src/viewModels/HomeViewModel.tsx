import { useStore } from "../hooks/useStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { TaskDTO, TaskDTOStateEnum } from "../api/models";
import { taskControllerApi } from "../api";
import { manageErrorResponse } from "../utils/formUtils";

export const useHomeViewModel = () => {
  const { userData, setUserData } = useStore((state) => ({
    userData: state.userData,
    setUserData: state.setUserData,
  }));
  const navigate = useNavigate();
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<TaskDTO | null>(null);
  const [tasks, setTasks] = useState<TaskDTO[]>(userData?.tasks || []);

  const handleClickExit = async () => {
    setUserData(null);
    navigate("/");
  };

  const handleClickProfile = async () => {
    navigate("/profile");
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

  const handleDrop = async (item: TaskDTO, newColumn: TaskDTOStateEnum) => {
    const taskForUpdate: TaskDTO = {
      ...item,
      state: newColumn,
    };
    try {
      await taskControllerApi.updateTask({ taskDTO: taskForUpdate });
      setSnackbarMessage(`Task moved to ${newColumn}`);
      setSnackbarOpen(true);
    } catch (error: any) {
      const message = manageErrorResponse(parseInt(error.message));
      setSnackbarMessage(message);
      setSnackbarOpen(true);
    }
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === item.id ? { ...task, state: newColumn } : task
      )
    );
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
    selectedTask,
    handleDrop,
    tasks,
  };
};
