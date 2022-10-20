import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = ({ totalItems }) => {
  const location = useLocation();

  return (
    <div>
      <Box sx={{ flexGrow: "1" }}>
        <AppBar color="secondary">
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              sx={{ flexGrow: "1", textDecoration: "none", color: "white" }}
            >
              SHOP IT
            </Typography>
            {location.pathname === "/" ? (
              <IconButton
                arial-label="show cart items"
                color="inherit"
                component={Link}
                to="/cart"
              >
                <Badge
                  badgeContent={totalItems > 0 ? totalItems : "0"}
                  color="error"
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            ) : null}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
