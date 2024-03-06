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
import TableRegister2 from "../components/TableRegister2";

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
    const [open, setOpen] = useState(true);
    const [data, setData] = useState([]);
    const newRow = {
        location1: '',
        location2: '',
        address: '',
        vehicle: 'バス',
        station: '',
        walk_time: '',
        floor_plan: '',
        front_direction: '',
        front_direction_way: '',
        land_area: '',
        driveway_area: '',
        building_ex_area: '',
        land_rights: '',
        build_date: '',
        land_extention: '',
        topography: '長方形',
      };
    const [estate, setEstate] = useState([]);
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
    const postData = async () => {
        try{
            setIsLoading(true); // データの取得が始まったことを示す
            await axios.post('/api/createEstateInfos',{ estate });
        }catch(e){
            console.error(e);
        } finally {
            setIsLoading(false); // データの取得が完了したことを示す
        }
    };

  const column1 =[
    { label: '成約日' }, 
    { label: '成約価格' }, 
    { label: '所在地(市村島)' }, 
    { label: '所在地(町)' }, 
    { label: '近隣モノレール駅' }, 
    { label: '近隣バス停' }, 
    { label: '間取り' }, 
    { label: '間取り内訳' }, 
    { label: '土地面積' }, 
    { label: '私道面積' }, 
    { label: '建物面積' }, 
    { label: '小学校区' }, 
    { label: '中学校区' }, 
    { label: '階建' }, 
    { label: '土地権利' }, 
    { label: '借地代' }, 
    { label: '借地期間' }, 
    { label: '保証金(万円)' }, 
    { label: '権利金' }, 
    { label: '築年月(年)' }, 
    { label: '建物建造' }, 
    { label: '駐車場' }, 
    { label: '駐車場料金' }, 
    { label: '都市計画' }, 
    { label: '地目' }, 

  ];
  const column2 =[
    { label: '建・容率' }, 
    { label: '地勢' }, 
    { label: '傾斜地面積' }, 
    { label: '接道状況詳細' }, 
    { label: '建築確認・建築確認番号' }, 
    { label: '国土法' }, 
    { label: '法令制限等' }, 
    { label: '現況' }, 
    { label: '条件等' }, 
    { label: '再建築' }, 
    { label: '土地形状' }, 
    { label: '敷地延長' }, 
    { label: '付帯権利' }, 
    { label: '引渡し可能時期' }, 
    { label: '分譲概要' }, 
    { label: '設備' }, 
    { label: '特記事項' }, 
    { label: '取引態様' }, 
    { label: '担当者' }, 
    { label: '担当者連絡先' }, 
    { label: 'その他一時金' }, 
    { label: 'その他費用' }, 
    { label: '備考' }, 
  ];

  const objKeys1 = [
    "closing_date",// 成約日
    "closing_price",// 成約価格
    "location1",// 所在地
    "location2",// 所在地
    "station",// 所在地モノレール
    "vehicle",// バス停
    "floor_plan",// 間取り
    "floor_plan_kind",// 間取り内訳
    "land_area",// 土地面積
    "driveway_area",// 私道面積
    "building_ex_area",// 建物面積
    "child_school",// 小学校
    "middle_school",//　中学校
    "ground_level",//階建て
    "land_rights",//土地権利
    "lease_fee",//借地代
    "lease_span",//借地期間
    "deposit_price",//保証金
    "key_money",//権利金
    "build_year",// 築年月
    "building_const",//建物建造
    "parking",//駐車場
    "parking_price", //駐車場料金
    "city_plan",// 都市計画
    "landmark",// 地目
  ]
  const objKeys2 =[
    //２列目
    "building_ratio",// 建・要率
    "topography",//地勢
    "slope_area",//傾斜地面積
    "way_situation",//接道状況詳細
    "building_number",//建築番号
    "land_law",//国土法
    "law_limit",//法令制限
    "current_situation",//現況
    "conditions",//条件
    "re_building",//再構築
    "land_shape",//土地形状
    "land_extention",//敷地延長
    "incidental_rights",//付帯権利
    "possible_delivery_date",//引渡し可能時期
    "sale_overview",//分譲概要
    "facility",//設備
    "special_features",//特記態様
    "transaction",//特記態様
    "salesman",//担当者
    "salesman_tel",//担当者連絡先
    "other_lump_payments",//その他一時金
    "other_expenses",//その他費用
    "remarks",//備考
  ]
console.log(estate);
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
                                    
                        <div>
                        <Grid container sx={{ mb:  1, justifyContent: 'right'}} >
                        <Button onClick={postData} variant="contained">登録</Button>
                        </Grid>
                        </div>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6} sx={{ height: 'auto', overflow: 'auto' }}>
                                            <TableRegister columns={column1} setEstate={setEstate} estate={estate} objKeys={objKeys1}/>
                                        </Grid>
                                        <Grid item xs={12} md={6} sx={{ height: 'auto', overflow: 'auto' }}>
                                            <TableRegister2 columns={column2} setEstate={setEstate} estate={estate} objKeys={objKeys2}/>
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
