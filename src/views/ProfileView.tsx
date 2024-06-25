import { Avatar, Box, Button, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { useProfileViewModel } from '../viewModels/ProfileViewModel';


export const ProfileView = () => {
    const {handleClickEdit, handleClick, userData} = useProfileViewModel();
    return (
        <Card sx={{maxWidth: 400, boxShadow: 3, m: 4, mt: 1 }}>
            <CardContent>
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
                    <Avatar sx={{ width: 60, height: 60}}>
                        {userData!!.name!!.charAt(0).toUpperCase()}{userData!!.surname!!.charAt(0).toUpperCase()}
                    </Avatar>
                </Box>
                <List>
                    <ListItem>
                        <ListItemText primary="Name" secondary={userData!!.name} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Surname" secondary={userData!!.surname} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Username" secondary={userData!!.username} />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email" secondary={userData!!.email} />
                    </ListItem>
                </List>
                <Box sx={{ mt: 1, p: 2, display: 'flex', flexDirection: 'row', gap: 2 }}>
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ flex: 1, mt: 3, mb: 2 }}
                        onClick={handleClick}
                    >   Return Home
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
    );
};

export default ProfileView;