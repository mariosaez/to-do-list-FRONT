import { useStore } from '../hooks/useStore';
import { useNavigate } from 'react-router-dom';

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

    return {
        userData,
        handleClickExit,
        handleClickProfile
    }
};
