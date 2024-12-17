import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { postFetchData } from "../../api/Api";
import { baseurl } from "../../constant";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
    // marginBottom: theme.spacing(2),
    marginTop: "2rem !important",
  },
  button: {
    // marginTop: theme.spacing(2),
    marginTop: "2rem !important",
    width: "100%",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: theme.spacing(2),
    fontSize: "0.875rem",
  },
  footerLink: {
    textDecoration: "none",
    color: theme.palette.primary.main,
    cursor: "pointer",
  },
}));

const LoginPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (data.email === "" || data.password === "") {
      setError("Please enter both email and password.");
    } else {
      setError("");
      const res = await postFetchData(`${baseurl}/login`, data);

      if (res.status == "success") {
        toast("login successfully");
      }
      navigate("/");
    }
  };

  return (
    <div className={classes.root}>
      <Container maxWidth="xs">
        <Box className={classes.formContainer}>
          <Typography variant="h5" className={classes.heading}>
            Login
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

          <form onSubmit={handleLogin}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              name="email"
              value={data.email}
              onChange={handlechange}
              className={classes.inputField}
              required
            />

            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              value={data.password}
              onChange={handlechange}
              className={classes.inputField}
              name="password"
              required
            />

            <a href="/">
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                // type="submit"
              >
                Login
              </Button>
            </a>
          </form>

          <Grid container className={classes.footer}>
            <Grid item>
              <a href="/email-verify" className={classes.footerLink}>
                Forgot Password?
              </a>
            </Grid>
            <Grid item>
              <a href="/signup" className={classes.footerLink}>
                New User? Sign Up
              </a>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default LoginPage;
