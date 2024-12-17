import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Footer = () => {
  const useStyles = makeStyles((theme) => ({
    footer: {
      zIndex: 99999,
      marginTop: theme.spacing(4),
      padding: theme.spacing(2),
      backgroundColor: "#004d40",
      color: "#fff",
      textAlign: "center",
    },
  }));
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.footer}>
        <Typography variant="body2">
          CompanyName © 2024. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default Footer;

// import { Box, Typography } from "@mui/material";
// import React from "react";

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         bottom: 0,
//         left: 0,
//         width: "100%",
//         zIndex: 9999, // Adjusted zIndex
//         bgcolor: "#004d40",
//         color: "#fff",
//         textAlign: "center",
//         padding: 2,
//         mt: 4, // Adjust the margin-top to keep it spaced
//       }}
//     >
//       <Typography variant="body2">
//         CompanyName © 2024. All rights reserved.
//       </Typography>
//     </Box>
//   );
// };

// export default Footer;
