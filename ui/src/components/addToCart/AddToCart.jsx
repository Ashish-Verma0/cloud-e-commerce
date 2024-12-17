import React, { useState } from "react";
import {
  Button,
  IconButton,
  Typography,
  Grid,
  Paper,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Add, Remove, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./AddToCart.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Trendy Girls & Baby Girls Nyra Cut Beautiful Frock",
      price: 194,
      quantity: 2,
      seller: "King Enterprise Exclusive",
      freeDelivery: true,
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Baby Girl Dress",
      price: 222,
      quantity: 1,
      seller: "RAY FASHION",
      freeDelivery: true,
      image: "https://via.placeholder.com/150",
    },
  ]);

  const updateQuantity = (id, increment) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + increment) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const navigate = useNavigate();
  const handleClickToBilling = () => {
    navigate(`/billing/${1}`);
  };

  // For mobile view detection
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="main-container">
      <Box className="content">
        <Grid container spacing={3}>
          {/* Product Details */}
          <Grid item xs={12} md={8}>
            <Typography variant="h5" gutterBottom>
              Product Details
            </Typography>
            {cartItems.map((item) => (
              <Paper
                key={item.id}
                className="product-details-paper"
                sx={{ p: 2, display: isMobile? "grid": "flex", flexDirection: isMobile ? "column" : "row",   }}
              >
                {/* Product Image */}
               
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: isMobile ? "80px" : "100px",
                    height: isMobile ? "80px" : "100px",
                    objectFit: "cover",
                    marginRight: "16px",
                    borderRadius: "8px",
                    marginBottom: isMobile ? "8px" : "0", // Add margin for mobile view
                  }}
                />

                {/* Product Info */}
                <Box flex={1} sx={{ mb: isMobile ? 2 : 0 }}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    Sold by: {item.seller} {item.freeDelivery && "- Free Delivery"}
                  </Typography>
                  <Typography variant="body1" color="#1E88E5" sx={{ mt: 1 }}>
                    ₹{item.price} x {item.quantity}
                  </Typography>
                </Box>

                {/* Quantity Controls and Remove Item */}
                <Box display="flex" alignItems="center" sx={{ mt: isMobile ? 1 : 0 }}>
                  <IconButton onClick={() => updateQuantity(item.id, -1)} color="primary">
                    <Remove />
                  </IconButton>
                  <Typography variant="body1">{item.quantity}</Typography>
                  <IconButton onClick={() => updateQuantity(item.id, 1)} color="primary">
                    <Add />
                  </IconButton>

                  {/* Remove Item */}
                  <IconButton color="error" onClick={() => removeItem(item.id)} sx={{ ml: 2 }}>
                    <Delete />
                  </IconButton>
                </Box>
              </Paper>
            ))}
          </Grid>

          {/* Price Summary */}
          <Grid item xs={12} md={4}>
            <Typography variant="h5" gutterBottom>
              Price Details ({cartItems.length} Items)
            </Typography>
            <Paper className="price-details-paper" sx={{ p: 2 }}>
              <Typography className="price-details-typography" sx={{ mb: 1 }}>
                <span>Total Product Price:</span>
                <span>₹{total}</span>
              </Typography>
              <Typography className="price-details-typography" color="success.main" sx={{ mb: 1 }}>
                <span>Discounts:</span>
                <span>- ₹24</span>
              </Typography>
              <hr />
              <Typography className="price-details-bold" sx={{ mb: 1 }}>
                <span>Order Total:</span>
                <span>₹{total - 24}</span>
              </Typography>
            </Paper>
            <Button
              variant="contained"
              color="primary"
              className="continue-button"
              sx={{ width: "100%", mt: 2 }}
              onClick={handleClickToBilling}
            >
              Continue
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default CartPage;
