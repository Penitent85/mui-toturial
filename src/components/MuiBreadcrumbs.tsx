import { Box, Breadcrumbs, Link, Stack, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";
import { NavigateNext } from "@mui/icons-material";

const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext />}
        maxItems={2}
        itemsAfterCollapse={2}
        itemsBeforeCollapse={2}
      >
        <Link underline="hover" color="primary" href="#">
          {" "}
          Home
        </Link>
        <Link underline="hover" color="primary" href="#">
          Catalogue
        </Link>
        <Link underline="hover" color="primary" href="#">
          Accessories{" "}
        </Link>
        <Link underline="hover" color="primary" href="#">
          Blog{" "}
        </Link>{" "}
        <Link underline="hover" color="primary" href="#">
          Signout{" "}
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
