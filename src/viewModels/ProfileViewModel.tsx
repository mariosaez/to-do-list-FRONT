import { useNavigate } from "react-router-dom";
import { useStore } from "../hooks/useStore";

export const useProfileViewModel = () => {
    const userData = useStore((state) => state.userData);
    const navigate = useNavigate();
    const colors = [
        "#FF5733", "#33FF57", "#3357FF", "#F333FF", "#FF33A1", "#33FFA1",
        "#A133FF", "#FFA133", "#33A1FF", "#FF5733", "#57FF33", "#5733FF",
      ];
    
    const handleClick = async () => {
        navigate('/home');
    };

    const handleClickEdit = async () => {
        navigate('/editProfile');
    };

    const setAvatarColor = (identifier: string) => {
        if (!identifier) return colors[0];
        const index = identifier.length % colors.length;
        return colors[index];
    };

    return {
        userData, 
        handleClick, 
        handleClickEdit,
        setAvatarColor
    };
};