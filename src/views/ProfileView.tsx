import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useProfileViewModel } from "../viewModels/ProfileViewModel";

export const ProfileView = () => {
  const { handleClickEdit, handleClick, userData, setAvatarColor } = useProfileViewModel();
  const avatarColor = setAvatarColor(userData?.name || '');
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
          <List>
            <ListItem>
              <ListItemText primary="Name" secondary={userData?.name || ""} />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Surname"
                secondary={userData?.surname || ""}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Username"
                secondary={userData?.username || ""}
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="Email" secondary={userData?.email || ""} />
            </ListItem>
          </List>
          <Box
            sx={{ mt: 1, p: 2, display: "flex", flexDirection: "row", gap: 2 }}
          >
            <Button
              fullWidth
              variant="contained"
              sx={{ flex: 1, mt: 3, mb: 2 }}
              onClick={handleClick}
            >
              {" "}
              Return Home
            </Button>
            <Button
              variant="contained"
              sx={{ flex: 1, mt: 3, mb: 2 }}
              onClick={handleClickEdit}
            >
              Edit fields
            </Button>
          </Box>
        </CardContent>
      </Card>
      </Container>
    </Box>
  );
};
