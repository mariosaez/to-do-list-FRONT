import { useNavigate } from "react-router-dom";
import { useStore } from "../hooks/useStore";

export const useProfileViewModel = () => {
    const userData = useStore((state) => state.userData);
    const navigate = useNavigate();
    
    const handleClick = async () => {
        navigate('/home');
    };

    const handleClickEdit = async () => {
        navigate('/editProfile');
    };

    return {userData, handleClick, handleClickEdit
    };
};