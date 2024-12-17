import React, { useState } from "react";
import { TextField, Button, Typography, Grid, Container, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

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

const EmailVerifyPage = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleVerify = (e) => {
    e.preventDefault();

    // if (email === "") {
    //   setError("Please enter your email address.");
    // } else {
    //   setError("");
    //   console.log("Email to verify: ", email);
    // }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        <Box className={classes.formContainer}>
          <Typography variant="h5" className={classes.heading}>
            Verify Your Email
          </Typography>

          {error && (
            <Typography
              color="error"
              variant="body2"
              align="center"
              style={{ marginBottom: 15 }}
            >
              {error}
            </Typography>
          )}

          <form onSubmit={handleVerify}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={classes.inputField}
              type="email"
            />
<a href="/forgot-password">
            <Button
            //   type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              >
              Verify Email
            </Button>
</a>
          </form>

          <Grid container className={classes.footer}>
            <Grid item>
              {/* Use Link instead of <a> */}
              <Link to="/login" className={classes.footerLink}>
                Back to Login
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default EmailVerifyPage;
