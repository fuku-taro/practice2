import React, { useEffect, useState } from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { mainListItems, secondaryListItems } from "../components/ListItems";
import { ListTable } from "../components/ListTable";
import InfoCardAdmin from "../components/InfoCardAdmin";
import { Button } from "@mui/material";
import styles from "../../sass/Admin.module.scss";
import Table from "../components/Table";
import TableRegister from "../components/TableRegister";

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
        boxSizing: "border-box",
        ...(!open && {
            overflowX: "hidden",
            transition: theme.transitions.create("width", {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up("sm")]: {
                width: theme.spacing(9),
            },
        }),
    },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function AdminRegistration() {
    const [open, setOpen] = React.useState(true);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // ローディング状態を管理
    const toggleDrawer = () => {
        setOpen(!open);
    };

    useEffect(() => {
        fetchData();
    }, []); // パラメーターの変更時に再度データを取得

    const fetchData = async () => {
        try {
            setIsLoading(true); // データの取得が始まったことを示す
            const response = await axios.get("/api/data");
            setData(response.data);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false); // データの取得が完了したことを示す
        }
    };


  const column1 =[
    "物件番号",
    "情報更新日",
    "次回更新予定日",
    "所在地",
    "沿線・駅・交通",
    "間取り",
    "間取り内訳",
    "土地面積",
    "私道面積",
    "建物面積",
    "小学校区",
    "中学校区",
    "階建",
    "土地権利",
    "借地代",
    "借地期間",
    "その他一時金",
    "その他費用",
  ];
  const column2 =[
    "保証金",
    "権利金",
    "築年月",
    "建物建造",
    "駐車場",
    "駐車場・形式",
    "駐車場・状況",
    "都市計画",
    "用途地域",
    "地目",
    "建・容率",
    "地勢",
    "地域地区",
    "傾斜地面積",
    "接道状況詳細",
    "建築確認・建築確認番号",
    "国土法",
    "法令制限等",
    "現況",
    "条件等",
    "再建築",
    "土地形状",
    "敷地延長",
    "付帯権利",
    "引渡し可能時期",
  ];
  const column3 =[
    "分譲概要",
    "設備",
    "特記事項",
    "備考",
    "取引態様",
    "担当者",
    "担当者連絡先",

  ];


    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: "flex" }}>
                <CssBaseline />
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: "24px", // keep right padding when drawer closed
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: "36px",
                                ...(open && { display: "none" }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            参考物件一覧
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        {mainListItems}
                        <Divider sx={{ my: 1 }} />
                        {secondaryListItems}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light"
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Toolbar />

                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                                <div>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <TableRegister rows={column1} />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <TableRegister rows={column2} />
                                            <TableRegister rows={column3}/>
                                        </Grid>
                                    </Grid>
                                </div>
                    <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
