import { Box, Button, Typography} from '@mui/material';
import CustomSnackBar from '../components/CustomSnackbar';
import FormInput from '../components/FormInput';
import { useEditProfileViewModel } from '../viewModels/EditProfileViewModel';


export const EditProfileView = () => {
    const {
        name, 
        surname, 
        username, 
        email, 
        password, 
        showPassword, 
        snackbarMessage, 
        snackbarOpen,
        onChangeName,
        onChangeSurname,
        onChangeUsername,
        onChangeEmail,
        onChangePassword,
        handleClick,
        handleCloseSnackbar,
        handleClickShowPassword,
        handleMouseDownPassword
    } = useEditProfileViewModel();
    return (
        <Box sx={{ mt: 1, p: 2 }}>
            <Typography variant="h5">Edit</Typography>
            <FormInput
                id="name"
                name="name"
                label="Name"
                value={name!}
                onChange={onChangeName}
            />
            <FormInput
                id="surname"
                name="surname"
                label="Surname"
                value={surname!}
                onChange={onChangeSurname}
            />
            <FormInput
                id="username"
                name="username"
                label="Username"
                value={username!}
                onChange={onChangeUsername}
            />
            <FormInput
                id="email"
                name="email"
                label="Email"
                value={email!}
                onChange={onChangeEmail}
            />
            <FormInput
                id="password"
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={password!}
                onChange={onChangePassword}
                showPassword={showPassword}
                handleClickShowPassword={handleClickShowPassword}
                handleMouseDownPassword={handleMouseDownPassword}
            />
            <Button
                fullWidth
                variant="contained"
                sx={{ flex: 1, mt: 3, mb: 2 }}
                onClick={handleClick}
            >   Save
            </Button>
            <CustomSnackBar
                open={snackbarOpen}
                autoHideDuration={6000}
                message={snackbarMessage}
                onClose={handleCloseSnackbar}
            />
        </Box>
    );
};