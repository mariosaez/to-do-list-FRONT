import { useStore } from '../hooks/useStore';
import { useNavigate } from 'react-router-dom';

export const useHomeViewModel = () => {
    const userData = useStore((state) => state.userData);
    const navigate = useNavigate();

    const handleClickExit = async () => {
        navigate('/');
    };

    const handleClickProfile = async () => {
        navigate('/profile');
    };

    return {
        userData,
        handleClickExit,
        handleClickProfile
    }
};
