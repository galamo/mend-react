import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function MainNavigation() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, gap: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink style={{ color: "white" }} to="/users">
              Users
            </NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink style={{ color: "white" }} to="/home">
              Home
            </NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink style={{ color: "white" }} to="/countries">
              Countries
            </NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink style={{ color: "white" }} to="/stats">
              Countries Stats Page
            </NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink style={{ color: "white" }} to="/countries-loader-page">
              Countries Loader
            </NavLink>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink style={{ color: "white" }} to="/settings">
              SettingsPage
            </NavLink>
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink style={{ color: "white" }} to="/search-countries">
              Search Countries
            </NavLink>
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MainNavigation;
