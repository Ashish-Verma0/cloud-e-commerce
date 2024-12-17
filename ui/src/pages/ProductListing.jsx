import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const ProductListing = () => {
  const [sortOption, setSortOption] = useState("default");

  const products = [
    {
      id: 1,
      name: "Ravishing Trendy Women Jeggings",
      price: 598,
      rating: 4.3,
      reviews: 16,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Designer Modern Women Jeggings",
      price: 302,
      rating: 3.9,
      reviews: 3623,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Elegant Feminine Women Jeggings",
      price: 244,
      rating: 4.1,
      reviews: 1636,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Designer Unique Women Jeggings",
      price: 656,
      rating: 4.2,
      reviews: 500,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Modern Style Jeggings",
      price: 450,
      rating: 4.5,
      reviews: 120,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Modern Style Jeggings",
      price: 450,
      rating: 4.5,
      reviews: 120,
      image: "https://via.placeholder.com/150",
    },
  ];

  // Sorting Logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "priceLowHigh") return a.price - b.price;
    if (sortOption === "priceHighLow") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    if (sortOption === "name") return a.name.localeCompare(b.name);
    return 0;
  });

  return (
    <Box sx={{ p: 4, bgcolor: "#f5f5f5", minHeight: "100vh" }}>
      {/* Sticky Sorting Bar */}
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          bgcolor: "#ffffff",
          p: 2,
          mb: 3,
          boxShadow: 2,
          borderRadius: 1,
          height: "60px", // Set a fixed height
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "flex-start", sm: "space-between" }, // Align items differently on small screens
            alignItems: "center",
            width: "100%", // Full width for the sorting bar
          }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              color: "#333",
              fontSize: { xs: "1rem", sm: "1.25rem" }, // Make font size responsive
            }}
          >
            Jeggings
          </Typography>
          <FormControl size="small" sx={{ minWidth: 150, ml: { xs: "auto", sm: 0 } }}>
            <InputLabel>Sort By</InputLabel>
            <Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              label="Sort By"
              sx={{
                width: { xs: "150px", sm: "200px" }, // Make the select box responsive
              }}
            >
              <MenuItem value="default">Default</MenuItem>
              <MenuItem value="priceLowHigh">Price: Low to High</MenuItem>
              <MenuItem value="priceHighLow">Price: High to Low</MenuItem>
              <MenuItem value="rating">Rating</MenuItem>
              <MenuItem value="name">Name</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>

      {/* Product Grid */}
      <Grid container spacing={3}>
        {sortedProducts.map((product) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={product.id} >
            <Card
              sx={{
                boxShadow: 3,
                borderRadius: 2,
                overflow: "hidden",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.name}
                sx={{
                  borderBottom: "1px solid #ddd",
                  "&:hover": { filter: "brightness(0.9)" },
                }}
              />
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    mb: 1,
                    color: "black",
                    fontSize: { xs: "0.875rem", sm: "1rem" },
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ mb: 1, color: "#333", fontSize: { xs: "0.875rem" } }}
                >
                  ₹{product.price}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mb: 2,
                    color: "#ffb400",
                    fontSize: { xs: "0.75rem", sm: "0.875rem" },
                  }}
                >
                  ⭐ {product.rating} ({product.reviews} reviews)
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#1976d2",
                    "&:hover": { bgcolor: "#1565c0" },
                    width: "100%",
                    padding: "12px",
                    textTransform: "capitalize",
                    fontSize: { xs: "0.75rem", sm: "1rem" },
                  }}
                >
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductListing;
