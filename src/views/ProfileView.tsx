import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
} from "@mui/material";
import CustomSnackBar from "../components/CustomSnackbar";
import FormInput from "../components/FormInput";
import { useProfileViewModel } from "../viewModels/ProfileViewModel";

export const ProfileView = () => {
  const {
    handleClickEdit,
    setAvatarColor,
    name,
    surname,
    username,
    password,
    email,
    showPassword,
    snackbarMessage,
    snackbarSeverity,
    snackbarOpen,
    handleCloseSnackbar,
    handleClickShowPassword,
    handleMouseDownPassword,
    onChangeName,
    onChangeSurname,
    onChangeUsername,
    onChangeEmail,
    onChangePassword,
    userData,
    handleClickReturn,
    isDisabled,
    buttonName
  } = useProfileViewModel();
  const avatarColor = setAvatarColor(userData?.name || "");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        boxShadow: 6,
      }}
    >
      <Container maxWidth="xs">
        <CssBaseline />
        <Card sx={{ maxWidth: 400, m: 4, mt: 1 }}>
          <CardContent>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              <Avatar sx={{ width: 60, height: 60, bgcolor: avatarColor }}>
                {userData?.name?.charAt(0).toUpperCase() || ""}
                {userData?.surname?.charAt(0).toUpperCase() || ""}
              </Avatar>
            </Box>

            <FormInput
              initialDisabled={isDisabled}
              id="name"
              name="name"
              label="Name"
              value={name}
              onChange={onChangeName}
            />
            <FormInput
              initialDisabled={isDisabled}
              id="surname"
              name="surname"
              label="Surname"
              value={surname}
              onChange={onChangeSurname}
            />
            <FormInput
              initialDisabled={isDisabled}
              id="username"
              name="username"
              label="Username"
              value={username}
              onChange={onChangeUsername}
            />
            <FormInput
              initialDisabled={isDisabled}
              id="email"
              name="email"
              label="Email"
              value={email}
              onChange={onChangeEmail}
            />
            <FormInput
              initialDisabled={isDisabled}
              id="password"
              name="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={onChangePassword}
              showPassword={showPassword}
              handleClickShowPassword={handleClickShowPassword}
              handleMouseDownPassword={handleMouseDownPassword}
            />

            <Box
              sx={{
                mt: 1,
                p: 2,
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{ flex: 1, mt: 3, mb: 2 }}
                onClick={handleClickReturn}
              >
                {" "}
                Return Home
              </Button>
              <Button
                variant="contained"
                sx={{ flex: 1, mt: 3, mb: 2 }}
                onClick={handleClickEdit}
              >
                {buttonName}
              </Button>
              <CustomSnackBar
                open={snackbarOpen}
                autoHideDuration={6000}
                message={snackbarMessage}
                severity={snackbarSeverity ?? 'error'}
                onClose={handleCloseSnackbar}
              />
            </Box>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
};
