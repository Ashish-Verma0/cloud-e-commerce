// ProfilePage.js
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
  Grid,
  Paper,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  // Mock user data
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "9876543210",
    avatar: "https://via.placeholder.com/150",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setUser(editedUser);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };
const navigate=useNavigate()
  const handleLogout = () => {
    // Logout logic (e.g., clear auth tokens, redirect to login page)
    alert("Logged out successfully");
    navigate("/login")
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: "20px", borderRadius: "10px" }}>
          <Box textAlign="center" mb={2}>
            <Avatar
              src={user.avatar}
              alt={user.name}
              style={{ width: 100, height: 100, margin: "auto" }}
            />
            <Typography variant="h5" style={{ marginTop: "10px" }}>
              {user.name}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {user.email}
            </Typography>
          </Box>

          <Box mb={3}>
            <Typography variant="h6" gutterBottom>
              Profile Details
            </Typography>
            <TextField
              label="Name"
              name="name"
              value={isEditing ? editedUser.name : user.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              disabled={!isEditing}
            />
            <TextField
              label="Email"
              name="email"
              value={isEditing ? editedUser.email : user.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              disabled={!isEditing}
            />
            <TextField
              label="Phone"
              name="phone"
              value={isEditing ? editedUser.phone : user.phone}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              disabled={!isEditing}
            />
          </Box>

          <Box display="flex" justifyContent="space-between">
            {!isEditing ? (
              <Button
                variant="contained"
                color="primary"
                startIcon={<EditIcon />}
                onClick={handleEdit}
              >
                Edit Profile
              </Button>
            ) : (
              <Button
                variant="contained"
                color="success"
                startIcon={<SaveIcon />}
                onClick={handleSave}
              >
                Save Changes
              </Button>
            )}

            <Button
              variant="outlined"
              color="secondary"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default ProfilePage;
