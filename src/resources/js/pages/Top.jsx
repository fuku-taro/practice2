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
    [
        { id: 1, url:"/Search", title: "住まい", text: "00000件" },
        { id: 2, url:"/Search", title: "店舗・事務所", text: "11111件" },
        { id: 3, url:"/Search", title: "その他", text: "22222件" },
        { id: 4, url:"/Search", title: "駐車場", text: "33333件" },
    ],
    [
        { id: 5, url:"/Search", title: "戸建", text: "55555件" },
        { id: 6, url:"/Search", title: "マンション", text: "66666件" },
        { id: 7, url:"/Search", title: "土地", text: "777件" },
        { id: 8, url:"/Search", title: "その他", text: "8件" },
    ],
];

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
                      maxWidth="md"
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
                      maxWidth="md"
                      sx={{
                          backgroundColor: "red",
                          py: 4,
                          display: "flex",
                          flexDirection: "column",
                      }}
                  >
                      <Typography variant="h5">タイトル2</Typography>
                      <Box sx={{ display: "flex" }}>
                          <Box
                              sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 2,
                                  justifyContent: "center",
                              }}
                          >
                            
                              {dummy[0].map((i) => {
                                  return (
                                    <Box
                                          key={i.id}
                                          sx={{
                                            backgroundColor: "white",
                                            width: 160,
                                          }}
                                      >
                                        <Link to={i.url}>
                                          <Typography variant="h6">
                                              {i.title}
                                          </Typography>
                                          <Box>{i.text}</Box>
                                        </Link>
                                      </Box>

                                  );
                              })}
                          </Box>
                          <Box
                              sx={{
                                  display: "flex",
                                  flexWrap: "wrap",
                                  gap: 2,
                                  justifyContent: "center",
                              }}
                          >
                              {dummy[1].map((i) => {
                                  return (
                                      <Box
                                          key={i.id}
                                          sx={{
                                              backgroundColor: "white",
                                              width: 160,
                                          }}
                                      >
                                          <Typography variant="h6" >
                                              {i.title}
                                          </Typography>
                                          <Box>{i.text}</Box>
                                      </Box>
                                  );
                              })}
                          </Box>
                      </Box>
                  </Container>
                  <Container
                      maxWidth="md"
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
                      maxWidth="md"
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
          <div className={classes.footer}>フッター要素</div>
      </div>
  );
};
