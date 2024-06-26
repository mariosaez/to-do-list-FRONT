import { create } from "zustand";
import { UserDTO } from "../api/models";

interface UserState {
    userData: UserDTO | null;
    setUserData: (data: UserDTO | null) => void;
}


export const useStore = create<UserState>((set) => ({
   userData: null,
   setUserData: (data: UserDTO | null) => set({userData: data}),
}));