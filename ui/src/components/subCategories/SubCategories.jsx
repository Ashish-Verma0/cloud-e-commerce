import { Button, Container, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const SubCategories = () => {
  const useStyles = makeStyles((theme) => ({
    subCategorySection: {
      margin: theme.spacing(2, 0),
    },
  }));
  const classes = useStyles();

  const navigate = useNavigate();

  const handleClickTOProductListing = (subCategory) => {
    navigate(`/product/${subCategory}`);
  };
  return (
    <div>
      <Container className={classes.subCategorySection}>
        <Typography variant="h6" align="center" gutterBottom>
          Sub Categories
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {["Mobiles", "Laptops", "TVs", "Washing Machines"].map(
            (subCategory, index) => (
              <Grid
                item
                xs={6}
                sm={3}
                key={index}
                onClick={() => handleClickTOProductListing(subCategory)}
              >
                <Button variant="outlined" color="secondary" fullWidth>
                  {subCategory}
                </Button>
              </Grid>
            )
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default SubCategories;
