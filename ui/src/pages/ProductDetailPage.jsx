import React from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Chip,
} from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

const ProductDetailPage = () => {
  const product = {
    name: "Modern Chair",
    description: "A comfortable and stylish chair for your living room.",
    price: 1200,
    discountedPrice: 999,
    stock: 15,
    rating: 4.5,
    images: [
      "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
      "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
      "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
    ],
    relevantProducts: [
      {
        id: 1,
        name: "Wooden Table",
        image: "https://via.placeholder.com/150",
        price: 1500,
      },
      {
        id: 2,
        name: "Luxury Sofa",
        image: "https://via.placeholder.com/150",
        price: 4500,
      },
      {
        id: 3,
        name: "Stylish Lamp",
        image: "https://via.placeholder.com/150",
        price: 700,
      },
      {
        id: 4,
        name: "Designer Rug",
        image: "https://via.placeholder.com/150",
        price: 1200,
      },
      {
        id: 5,
        name: "Wall Art",
        image: "https://via.placeholder.com/150",
        price: 800,
      },
    ],
  };

  return (
    <Box sx={{ padding: 4, maxWidth: "1200px", margin: "0 auto" }}>
      <Grid container spacing={4}>
        {/* Image Slider */}
        <Grid item xs={12} md={6}>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            loop
            style={{ width: "100%" }}
          >
            {product.images.map((image, index) => (
              <SwiperSlide key={index}>
                <Box
                  component="img"
                  src={image}
                  alt={product.name}
                  sx={{ width: "100%", borderRadius: 2 }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>

        {/* Product Details */}
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            {product.name}
          </Typography>
          <Typography variant="body1" sx={{ color: "text.secondary", mb: 2 }}>
            {product.description}
          </Typography>
          <Typography variant="h5" color="primary" sx={{ mb: 1 }}>
            ₹{product.discountedPrice}{" "}
            <span style={{ textDecoration: "line-through", color: "gray" }}>
              ₹{product.price}
            </span>
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            {product.stock > 0 ? (
              <Chip label="In Stock" color="success" />
            ) : (
              <p className={{color:"red"}}>Out Of Stock</p>
            )}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Rating value={product.rating} readOnly />
            <Typography variant="body2">({product.rating})</Typography>
          </Box>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Add to Cart
          </Button>
          <Button variant="outlined" color="secondary">
            Buy Now
          </Button>
        </Grid>
      </Grid>

      {/* Relevant Products */}
      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: "bold" }}>
          Relevant Products
        </Typography>
        <Grid container spacing={3}>
          {product.relevantProducts.map((item) => (
            <Grid item xs={6} sm={4} md={3} key={item.id}>
              <Card sx={{ height: "100%" }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹{item.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
