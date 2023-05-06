import { Link } from 'react-router-dom';
import { useState } from 'react';
import classes from "../../sass/top.module.scss";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["閲覧履歴", "お気に入り", "検索条件"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const dummy = [
  {id:1, title:"題材1", text:"内容1"},
  {id:2, title:"題材2", text:"内容2"},
  {id:3, title:"題材3", text:"内容3"},
  {id:4, title:"題材4", text:"内容4"},
  {id:5, title:"題材5", text:"内容5"},
]

export const Top = () => {
    const [anchorElNav, setAnchorElNav] = useState(null)
    const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenNavMenu = (e) => {
      setAnchorElNav(e.currentTarget);
  };

  const handleOpenUserMenu = (e) => {
      setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
      setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
      setAnchorElUser(null);
  };


  return (
      <div className={classes.body}>
          <div className={classes.header}>
              <AppBar position="static">
                  <Container maxWidth="xl">
                      <Toolbar disableGutters>
                          {/* 通常 */}
                          <HomeIcon
                              sx={{
                                  display: { xs: "none", md: "flex" },
                                  mr: 1,
                              }}
                          />
                          <Typography
                              variant="h6"
                              noWrap
                              component="a"
                              href="/"
                              sx={{
                                  mr: 2,
                                  display: { xs: "none", md: "flex" },
                                  fontFamily: "monospace",
                                  fontWeight: 700,
                                  letterSpacing: ".3rem",
                                  color: "inherit",
                                  textDecoration: "none",
                              }}
                          >
                              不動産（仮）
                          </Typography>
                          {/* 通常 */}
                          {/* レスポンシブ */}
                          <Box
                              sx={{
                                  flexGrow: 1,
                                  display: { xs: "flex", md: "none" },
                              }}
                          >
                              <IconButton
                                  size="large"
                                  aria-label="account of current user"
                                  aria-controls="menu-appbar"
                                  aria-haspopup="true"
                                  onClick={handleOpenNavMenu}
                                  color="inherit"
                              >
                                  <MenuIcon />
                              </IconButton>
                              <Menu
                                  id="menu-appbar"
                                  anchorEl={anchorElNav}
                                  anchorOrigin={{
                                      vertical: "bottom",
                                      horizontal: "left",
                                  }}
                                  keepMounted
                                  transformOrigin={{
                                      vertical: "top",
                                      horizontal: "left",
                                  }}
                                  open={Boolean(anchorElNav)}
                                  onClose={handleCloseNavMenu}
                                  sx={{
                                      display: { xs: "block", md: "none" },
                                  }}
                              >
                                  {pages.map((page) => (
                                      <MenuItem
                                          key={page}
                                          onClick={handleCloseNavMenu}
                                      >
                                          <Typography textAlign="center">
                                              {page}
                                          </Typography>
                                      </MenuItem>
                                  ))}
                              </Menu>
                          </Box>
                          <HomeIcon
                              sx={{
                                  display: { xs: "flex", md: "none" },
                                  mr: 1,
                              }}
                          />
                          <Typography
                              variant="h5"
                              noWrap
                              component="a"
                              href=""
                              sx={{
                                  mr: 2,
                                  display: { xs: "flex", md: "none" },
                                  flexGrow: 1,
                                  fontFamily: "monospace",
                                  fontWeight: 700,
                                  letterSpacing: ".3rem",
                                  color: "inherit",
                                  textDecoration: "none",
                              }}
                          >
                              不動産（仮）
                          </Typography>
                          {/* レスポンシブ */}
                          {/* 通常 */}
                          <Box
                              sx={{
                                  justifyContent: "flex-end",
                                  flex: 1,
                                  mr: 2,
                                  gap: 2,
                                  display: { xs: "none", md: "flex" },
                              }}
                          >
                              {pages.map((page) => (
                                  <Button
                                      key={page}
                                      onClick={handleCloseNavMenu}
                                      sx={{
                                          my: 1,
                                          color: "white",
                                          display: "block",
                                      }}
                                  >
                                      {page}
                                      <Box>0件</Box>
                                  </Button>
                              ))}
                          </Box>
                          {/* 通常 */}
                          {/* 共通 */}
                          <Box sx={{ flexGrow: 0 }}>
                              <Tooltip title="Open settings">
                                  <IconButton
                                      onClick={handleOpenUserMenu}
                                      sx={{ p: 0 }}
                                  >
                                      <Avatar
                                          alt="Remy Sharp"
                                          src="/static/images/avatar/2.jpg"
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
                                      <MenuItem
                                          key={setting}
                                          onClick={handleCloseUserMenu}
                                      >
                                          <Typography textAlign="center">
                                              {setting}
                                          </Typography>
                                      </MenuItem>
                                  ))}
                              </Menu>
                          </Box>
                          {/* 共通 */}
                      </Toolbar>
                  </Container>
              </AppBar>
          </div>
          <div className={classes.content}>
              <Box
                  sx={{
                      display: "flex",
                      flexDirection: "column",
                      my: 10,
                      gap: 10,
                  }}
              >
                  <Container
                      maxWidth="sm"
                      sx={{ backgroundColor: "white", py: 4 }}
                  >
                      <Typography variant="h5">
                          福岡の住まい探しは。。。
                      </Typography>
                      <Typography>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quia corrupti quos reiciendis error nulla veniam
                          repellendus aut temporibus sapiente itaque dolore
                          molestiae quas debitis dolores cupiditate, voluptatem
                          tempora. Veritatis, voluptate!
                      </Typography>
                  </Container>
                  <Container
                      maxWidth="sm"
                      sx={{ backgroundColor: "red", py: 4 }}
                  >
                      <Typography variant="h5">タイトル2</Typography>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                          {dummy.map((i) => {
                              return (
                                  <Box
                                      key={i.id}
                                      sx={{
                                          backgroundColor: "white",
                                          width: 240,
                                      }}
                                  >
                                      <Typography variant="h6" sx>
                                          {i.title}
                                      </Typography>
                                      <Box>{i.text}</Box>
                                  </Box>
                              );
                          })}
                      </Box>
                  </Container>
                  <Container
                      maxWidth="sm"
                      sx={{ backgroundColor: "green", py: 4 }}
                  >
                      <Typography variant="h5">タイトル3</Typography>
                      <Typography>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quia corrupti quos reiciendis error nulla veniam
                          repellendus aut temporibus sapiente itaque dolore
                          molestiae quas debitis dolores cupiditate, voluptatem
                          tempora. Veritatis, voluptate!
                      </Typography>
                  </Container>
                  <Container
                      maxWidth="sm"
                      sx={{ backgroundColor: "blue", py: 4 }}
                  >
                      <Typography variant="h5">タイトル4</Typography>
                      <Typography>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Quia corrupti quos reiciendis error nulla veniam
                          repellendus aut temporibus sapiente itaque dolore
                          molestiae quas debitis dolores cupiditate, voluptatem
                          tempora. Veritatis, voluptate!
                      </Typography>
                  </Container>
              </Box>
          </div>
          <div className={classes.footer}>
            フッター要素
          </div>
      </div>
  );
};
