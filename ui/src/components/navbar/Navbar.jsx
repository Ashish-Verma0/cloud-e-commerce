// import React from "react";
// import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

// import { ShoppingCart, AccountCircle } from "@mui/icons-material";
// import { makeStyles } from "@mui/styles";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const useStyles = makeStyles(() => ({
//     navbar: {
//       backgroundColor: "#004d40",
//       color: "#fff",
//     },
//   }));
//   const classes = useStyles();

//   const navigate = useNavigate();

//   const handleClickToProfile = () => {
//     navigate("/profile");
//   };

//   const handleClickToHome = () => {
//     navigate("/");
//   };
//   const handleClickToAddToCart = () => {
//     navigate("/add-to-cart");
//   };
//   return (
//     <>
//       {/* Navbar */}
//       <AppBar position="sticky" className={classes.navbar}>
//         <Toolbar>
//           <Typography
//             variant="h6"
//             component="div"
//             sx={{ flexGrow: 1, cursor: "pointer" }}
//             onClick={() => handleClickToHome()}
//           >
//             CompanyName
//           </Typography>
//           <div>
//             <IconButton
//               color="inherit"
//               onClick={() => handleClickToAddToCart()}
//             >
//               <ShoppingCart />
//             </IconButton>
//             <IconButton color="inherit" onClick={() => handleClickToProfile()}>
//               <AccountCircle />
//             </IconButton>
//           </div>
//         </Toolbar>
//       </AppBar>
//     </>
//   );
// };

// export default Navbar;

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Badge,
  Box,
  TextField,
  InputAdornment,
} from "@mui/material";
import { ShoppingCart, AccountCircle, Search } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navbar: {
    backgroundColor: "#003580",
    color: "#fff",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    flex: "0 0 auto", // Prevents shrinking
  },
  logoImage: {
    height: "30px", // Smaller logo size
    marginRight: theme.spacing(1),
  },
  logoText: {
    fontWeight: "bold",
    fontSize: "1.2rem", // Adjust font size for smaller screens
  },
  searchBox: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: "4px",
    height: "36px", // Smaller search box height
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
  },
  iconButton: {
    marginLeft: theme.spacing(1),
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" className={classes.navbar}>
      <Toolbar className={classes.toolbar}>
        {/* Logo */}
        <Box className={classes.logoContainer} onClick={() => navigate("/")}>
          <img
            src="https://marketplace.canva.com/EAFauoQSZtY/1/0/1600w/canva-brown-mascot-lion-free-logo-qJptouniZ0A.jpg"
            alt="Company Logo"
            className={classes.logoImage}
          />
          <Typography className={classes.logoText}>ShopEase</Typography>
        </Box>

        {/* Search Bar */}
        <Box className={classes.searchBox}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search for products..."
            fullWidth
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Cart and Profile Icons */}
        <Box className={classes.iconContainer}>
          <IconButton
            className={classes.iconButton}
            color="inherit"
            onClick={() => navigate("/add-to-cart")}
          >
            <Badge badgeContent={4} color="error">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.iconButton}
            color="inherit"
            onClick={() => navigate("/profile")}
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
