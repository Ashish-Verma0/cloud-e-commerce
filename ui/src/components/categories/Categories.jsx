// import React from "react";
// import { Button, Container, Grid, Typography } from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const Categories = () => {
//   const useStyles = makeStyles((theme) => ({
//     categorySection: {
//       margin: theme.spacing(2, 0),
//     },
//   }));
//   const classes = useStyles();
//   return (
//     <div>
//       <Container className={classes.categorySection}>
//         <Typography variant="h5" align="center" gutterBottom>
//           Categories
//         </Typography>
//         <Grid container spacing={2} justifyContent="center">
//           {[
//             "Electronics",
//             "Clothing",
//             "Home & Kitchen",
//             "Books",
//             "Electronics",
//             "Clothing",
//             "Home & Kitchen",
//             "Books",
//           ].map((category, index) => (
//             <Grid item xs={6} sm={3} key={index}>
//               <Button variant="contained" color="primary" fullWidth>
//                 {category}
//               </Button>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </div>
//   );
// };

// export default Categories;

import React from "react";
import { Button, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

// Defining styles using makeStyles hook
const useStyles = makeStyles((theme) => ({
  categorySection: {
    position: "sticky",
    top: 0,
    zIndex: 999,
    display: "flex",
    justifyContent: "space-between", // Align buttons to the left
    overflowX: "auto",
    backgroundColor: "#ffffff", // White background for better contrast
    padding: theme.spacing(2, 0.5),
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for visual separation
    borderBottom: "1px solid #ddd", // Thin bottom border to define section
    "&::-webkit-scrollbar": {
      height: "8px", // Thicker scrollbar for better visibility
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#555", // Darker thumb for better contrast
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "#f1f1f1", // Light track for consistency
    },
  },
  categoryButton: {
    fontSize: "1rem", // Slightly larger text for better readability
    padding: theme.spacing(1.5, 3),
    textTransform: "capitalize",
    borderRadius: "20px",
    color: "#004B87", // Updated color to give a fresh look
    backgroundColor: "#f0f4f8", // Soft background color
    whiteSpace: "nowrap",
    flexShrink: 0,
    marginRight: theme.spacing(0),
    "&:hover": {
      backgroundColor: "#004B87", // Darker hover color
      color: "#ffffff", // White text on hover
      boxShadow: "0 6px 10px rgba(0, 0, 0, 0.15)", // Enhanced hover shadow
    },
  },
}));

// Categories component that maps over the categories list and renders buttons
const Categories = () => {
  const classes = useStyles();
  const categories = [
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Books",
    "Sports",
    "Toys",
    "Health",
    "Beauty",
    "Gadgets",
    "Furniture",
  ];

  return (
    <Box className={classes.categorySection}>
      {categories.map((category, index) => (
        <Button
          key={index}
          variant="outlined"
          className={classes.categoryButton}
          onClick={() => alert(`Selected: ${category}`)} // Improved onClick action
        >
          {category}
        </Button>
      ))}
    </Box>
  );
};

export default Categories;
