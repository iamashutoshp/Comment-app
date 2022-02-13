import React,{ useContext }  from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { AppContext } from "../Context/AppContext";
const settings = ["Logout"];

const Header = (props) => {
  const { user,setLogOut } = useContext(AppContext)
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    console.log(user)
    setLogOut(false,(check) => {
      if (check) {
        
      }
    });
    setAnchorElUser(null);
  };

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box>
          <Tooltip title="Open settings">
            <IconButton sx={{ p: 0 }}  onClick={handleOpenUserMenu} style={{marginLeft: 'auto',marginRight:'auto'}}>
              <Avatar
                sx={{ bgcolor: "red[500]" }}
                aria-label="recipe"
                style={{
                  marginRight: "auto",
                  marginLeft: "auto",
                  backgroundColor: "#a687a9",
                }}
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </Container>
  );
};
export default Header;
