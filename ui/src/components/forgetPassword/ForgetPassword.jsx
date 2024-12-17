import React, { useState } from "react";
import { TextField, Button, Typography, Grid, Container, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },
  formContainer: {
    background: "#fff",
    padding: theme.spacing(3),
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "400px",
  },
  heading: {
    textAlign: "center",
    marginBottom: theme.spacing(3),
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  inputField: {
    marginTop: "2rem !important",
  },
  button: {
    marginTop: "2rem !important",
    width: "100%",
  },
  footer: {
    display: "flex",
    justifyContent: "center",
    marginTop: theme.spacing(2),
    fontSize: "0.875rem",
  },
  footerLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));

const ForgetPassword = () => {
  const classes = useStyles();

  // Form state to store new password and confirmation password
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // Error state for form validation

  // Handle password reset (form submission)
  const handleResetPassword = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Validate that both fields are filled and match
    if (!newPassword || !confirmPassword) {
      setError("Please fill in both fields.");
    } else if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
    } else {
      setError(""); // Clear any previous error messages
      console.log("New password set: ", newPassword); // Log the new password (for demonstration)
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        <Box className={classes.formContainer}>
          <Typography variant="h5" className={classes.heading}>
            Set New Password
          </Typography>

          {/* Display error message if there's any */}
          {error && (
            <Typography color="error" variant="body2" align="center" style={{ marginBottom: 15 }}>
              {error}
            </Typography>
          )}

          <form onSubmit={handleResetPassword}>
            {/* New Password input field */}
            <TextField
              label="New Password"
              variant="outlined"
              fullWidth
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)} // Update newPassword state
              className={classes.inputField}
              type="password"
            //   required
            />

            {/* Confirm Password input field */}
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
              className={classes.inputField}
              type="password"
            //   required
            />

            {/* Submit button */}
            <a href="/login">
            <Button
            //   type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
            >
              Reset Password
            </Button>
                </a>
          </form>

          {/* Footer with link to login page */}
          <Grid container className={classes.footer}>
            <Grid item>
              <a href="/login" className={classes.footerLink}>
                Back to Login
              </a>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default ForgetPassword;
