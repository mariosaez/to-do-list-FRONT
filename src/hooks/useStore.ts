import { create } from "zustand";
import { UserDTO, TaskDTO } from "../api/models";

interface StoreState {
    userData: UserDTO | null;
    taskData: TaskDTO | null;
    setUserData: (data: UserDTO | null) => void;
    setTaskData: (data: TaskDTO | null) => void,
}


export const useStore = create<StoreState>((set) => ({
   userData: null,
   taskData: null,
   setUserData: (data: UserDTO | null) => set({userData: data}),
   setTaskData: (data: TaskDTO | null) => set({taskData: data}),
}));