// import React from "react";
// import { CardMedia, Container } from "@mui/material";
// import { makeStyles } from "@mui/styles";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// const Header = () => {
//   const useStyles = makeStyles((theme) => ({
//     carousel: {
//       margin: theme.spacing(2, 0),
//     },
//   }));
//   const classes = useStyles();
//   return (
//     <div>
//       <Container className={classes.carousel}>
//         <Carousel animation="slide" autoPlay>
//           {[
//             "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
//             "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
//             "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
//           ].map((image, index) => {
//             return (
//               <>
//                 <CardMedia
//                   component="img"
//                   height="400"
//                   image={image}
//                   alt={`Slide ${index + 1}`}
//                   key={index}
//                 />
//               </>
//             );
//           })}
//         </Carousel>
//       </Container>
//     </div>
//   );
// };

// export default Header;

import React from "react";
import { CardMedia, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const useStyles = makeStyles((theme) => ({
  carousel: {
    marginTop: theme.spacing(2),
  },
  image: {
    borderRadius: "8px",
  },
}));

const Header = () => {
  const classes = useStyles();
  const images = [
    "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
    "https://next-images.123rf.com/index/_next/image/?url=https://assets-cdn.123rf.com/index/static/assets/top-section-bg.jpeg&w=3840&q=75",
    "https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg",
  ];

  return (
    <Container className={classes.carousel}>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <CardMedia
              component="img"
              height="400"
              image={image}
              alt={`Slide ${index + 1}`}
              className={classes.image}
            />
          </div>
        ))}
      </Carousel>
    </Container>
  );
};

export default Header;
