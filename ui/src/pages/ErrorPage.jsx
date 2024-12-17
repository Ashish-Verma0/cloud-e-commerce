import React from "react";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import ErrorIcon from "@mui/icons-material/ErrorOutline";
import HomeIcon from "@mui/icons-material/Home";

const ErrorPage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "#f8f9fa",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          {/* Error Icon Section */}
          <Grid item xs={12}>
            <ErrorIcon
              sx={{
                fontSize: 80,
                color: "red",
                mb: 2,
              }}
            />
            <Typography
              variant="h4"
              fontWeight="bold"
              sx={{ color: "#333", mb: 1 }}
            >
              Oops! Something Went Wrong
            </Typography>
            <Typography variant="body1" sx={{ color: "#666", mb: 3 }}>
              We couldn’t find the page you were looking for or encountered an
              unexpected error.
            </Typography>
          </Grid>

          {/* Image for visual appeal */}
          <Grid item xs={12}>
            <Box
              component="img"
              src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk="
              alt="Error illustration"
              sx={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: 2,
                boxShadow: 1,
                mb: 3,
              }}
            />
          </Grid>

          {/* Buttons Section */}
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              startIcon={<HomeIcon />}
              fullWidth
              onClick={() => (window.location.href = "/")}
              sx={{ mb: { xs: 2, sm: 0 } }}
            >
              Go to Homepage
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              fullWidth
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ErrorPage;
