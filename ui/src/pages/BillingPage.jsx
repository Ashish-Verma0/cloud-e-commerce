import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Grid,
  Button,
  Divider,
  Paper,
} from "@mui/material";

const BillingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    pincode: "",
    state: "",
    city: "",
    landmark: "",
    mobile: "",
    alternateMobile: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Billing Data Submitted:", formData);
  };

  // Mock data for total, tax, and delivery charges
  const total = 1000; // Total price of items
  const tax = 50; // Tax
  const deliveryCharge = 100; // Delivery charges
  const grandTotal = total + tax + deliveryCharge;

  return (
    <Box
      sx={{
        p: 3,
        bgcolor: "#f5f5f5",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          maxWidth: 600,
          width: "100%",
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" fontWeight="bold" sx={{ mb: 3 }}>
          Billing Information
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Form Fields */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                multiline
                rows={3}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Pincode"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Landmark"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Mobile"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Alternate Mobile"
                name="alternateMobile"
                value={formData.alternateMobile}
                onChange={handleChange}
              />
            </Grid>
          </Grid>

          {/* Summary Section */}
          <Divider sx={{ my: 3 }} />
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" fontWeight="bold">
              Order Summary
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <Typography>Items Total:</Typography>
              <Typography>₹{total}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <Typography>Tax:</Typography>
              <Typography>₹{tax}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <Typography>Delivery Charges:</Typography>
              <Typography>₹{deliveryCharge}</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}
            >
              <Typography variant="h6" fontWeight="bold">
                Grand Total:
              </Typography>
              <Typography variant="h6" fontWeight="bold">
                ₹{grandTotal}
              </Typography>
            </Box>
          </Box>

          {/* Payment Options */}
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{ flex: 1, mr: 1 }}
              onClick={() => alert("Pay Now Selected")}
            >
              Pay Now
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              sx={{ flex: 1, ml: 1 }}
              onClick={() => alert("Cash on Delivery Selected")}
            >
              Cash on Delivery
            </Button>
          </Box>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="success"
            fullWidth
            size="large"
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default BillingPage;
