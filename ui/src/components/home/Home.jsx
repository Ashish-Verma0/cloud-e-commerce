import React from "react";
import Categories from "../categories/Categories";
import Header from "../carousel/Header";
import SubCategories from "../subCategories/SubCategories";
import PopularProduct from "../popularProduct/PopularProduct";

const Home = () => {
  return (
    <div>
      {/* Categories */}

      <Categories />
      {/* Carousel */}

      <div id="id" onScroll="smooth">
        <Header />
      </div>

      {/* Sub Categories */}
      <SubCategories />

      {/* Popular Products */}

      <PopularProduct />
    </div>
  );
};

export default Home;
