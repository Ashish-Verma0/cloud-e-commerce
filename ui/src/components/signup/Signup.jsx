import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { postFetchData } from "../../api/Api";
import { toast } from "react-toastify";
import { baseurl } from "../../constant";
import { NavLink, useNavigate } from "react-router-dom";

const SignupPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const notify = (data) => toast(data);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = async (e) => {
    try {
      e.preventDefault();

      const res = await postFetchData(`${baseurl}/register`, formData);
      console.log("ashish", res);

      if (res.status === "success") {
        notify("Registration successfully");
        setFormData({
          name: "",
          email: "",
          password: "",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh", padding: isMobile ? "15px" : "30px" }}
    >
      <Grid item xs={12} sm={8} md={6} lg={4}>
        <Paper
          elevation={3}
          style={{
            padding: isMobile ? "15px" : "20px",
            borderRadius: "10px",
          }}
        >
          <Box textAlign="center" mb={2}>
            <Typography
              variant={isMobile ? "h5" : "h4"}
              style={{ marginBottom: "20px", fontWeight: "bold" }}
            >
              Sign Up
            </Typography>

            {/* <Box position="relative" display="inline-block">
              <Avatar
                src={
                  formData.avatar
                    ? URL.createObjectURL(formData.avatar)
                    : "https://via.placeholder.com/150"
                }
                alt="Avatar Preview"
                style={{
                  width: isMobile ? 100 : 120,
                  height: isMobile ? 100 : 120,
                  margin: "auto",
                  border: "2px solid #ccc",
                }}
              />
              <input
                type="file"
                onChange={"handleFileChange"}
                accept="image/*"
                style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: "100%",
                  height: "100%",
                  opacity: 0,
                  cursor: "pointer",
                }}
              />
            </Box>
            <Typography
              variant="body2"
              color="textSecondary"
              style={{ marginTop: "10px" }}
            >
              Upload Profile
            </Typography> */}
          </Box>

          <Box mb={3}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              type="email"
              required
            />
            <TextField
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              type="password"
              required
            />
          </Box>

          <Box mb={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSignup}
              style={{ width: "100%", padding: "12px 0" }}
            >
              Sign Up
            </Button>
          </Box>

          <Box textAlign="center">
            <Typography variant="body2">
              Already have an account?{" "}
              <NavLink to="/login">Back to Login</NavLink>
            </Typography>
          </Box>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default SignupPage;
