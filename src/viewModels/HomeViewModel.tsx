import React from 'react';
import HomeView from '../views/HomeView';
import { useStore } from '../hooks/useStore';
import { useNavigate } from 'react-router-dom';

export const HomeViewModel = () => {
    const userData = useStore((state) => state.userData);
    const navigate = useNavigate();

    const handleClickExit = async () => {
        navigate('/');
    };

    const handleClickProfile = async () => {
        navigate('/profile');
    };

    return (
        <HomeView
            userData={userData!}
            handleClickExit={handleClickExit}
            handleClickProfile={handleClickProfile}
        />
    );
};

export default HomeViewModel;
