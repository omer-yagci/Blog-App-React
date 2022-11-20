import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { logOut } from "../auth/firebase";
// import MenuIcon from "@mui/icons-material/Menu";

export default function MenuAppBar() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const { displayName } = useSelector((state) => state.auth.user);

  // console.log(displayName);
  // const dispatch = useDispatch();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    let switchVal = event.target.innerText;

    switch (switchVal) {
      case "Login":
        navigate("login");
        break;
      case "Register":
        navigate("register");
        break;
      case "About":
        navigate("about");
        break;
      case "Logout":
        logOut();
        navigate("/login");
        break;
      case "New Blog":
        navigate("newblog");
        break;
      case "Dashboard":
        navigate("/");
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <h1 className="text-2xl uppercase">{displayName}</h1>
          </Typography>
          {
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              {displayName && (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>New Blog</MenuItem>
                  <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
              )}
              {!displayName && (
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Login</MenuItem>
                  <MenuItem onClick={handleClose}>Register</MenuItem>
                  <MenuItem onClick={handleClose}>About</MenuItem>
                </Menu>
              )}
            </div>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
