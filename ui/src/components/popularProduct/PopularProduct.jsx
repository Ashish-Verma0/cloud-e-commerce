import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const PopularProduct = () => {
  const useStyles = makeStyles((theme) => ({
    popularProducts: {
      margin: theme.spacing(2, 0),
      cursor: "pointer",
    },
    card: {
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Enhanced shadow
      borderRadius: "12px", // More rounded corners
      overflow: "hidden", // Ensures no overflow from rounded corners
      transition: "transform 0.2s ease-in-out", // Smooth hover effect
      "&:hover": {
        transform: "scale(1.05)", // Slight zoom on hover
        boxShadow: "0 6px 12px rgba(0,0,0,0.2)", // More prominent shadow on hover
      },
    },
    cardImage: {
      height: "180px", // Fixed height for image
      width: "100%", // Ensure full width
      objectFit: "cover", // Maintain aspect ratio
    },
    cardContent: {
      padding: theme.spacing(2), // Add padding inside the card
    },
    cardTitle: {
      fontWeight: 600,
      marginBottom: theme.spacing(1),
      textAlign: "center", // Center align text
      fontSize: "1rem", // Slightly larger text for product name
    },
    addToCartButton: {
      marginTop: theme.spacing(1),
      padding: theme.spacing(1),
      fontSize: "0.9rem", // Slightly smaller button text
      fontWeight: "bold",
    },
  }));
  const classes = useStyles();
  const navigate = useNavigate();

  const handleClick = (product, index) => {
    navigate(`/product-detail/${index}`, { state: product });
  };

  return (
    <div>
      <Container className={classes.popularProducts}>
        <Typography variant="h6" align="center" gutterBottom>
          Popular Products
        </Typography>
        <Grid container spacing={2}>
          {[
            "Product 1",
            "Product 2",
            "Product 3",
            "Product 4",
            "Product 5",
          ].map((product, index) => {
            return (
              <Grid
                item
                xs={6}  // 2 products in a row on mobile (50% width)
                sm={4}  // 3 products in a row on small devices (tablet)
                md={3}  // 4 products in a row on larger screens (desktop)
                key={index}
                onClick={() => handleClick(product, index)}
              >
                <Card className={classes.card}>
                  <CardMedia
                    component="img"
                    image={`/images/product${index + 1}.jpg`}
                    alt={product}
                    className={classes.cardImage}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body1" className={classes.cardTitle}>
                      {product}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      className={classes.addToCartButton}
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default PopularProduct;
