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

export default function Admin() {
    const [open, setOpen] = React.useState(true);
    const [data, setData] = useState([]);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    const [isEdit, setIsEdit] = useState(false);
    const [rows, setRows] = useState([]);
    const [isValid, setIsValid] = useState(false);
    const [isDistinctError, setIsDistinctError] = useState(false);
    const [ispAccountList, setIspAccountList] = useState([]);
    const [successEditName, setSuccessEditName] = useState(false);

    const getIspAccountList = async () => {
        const response = await callApi("GET", "/api/getIspAccountList");

        // 一覧の要素に削除フラグのis_deletedを付与
        if (response) {
            const resultArray = response.data;
            resultArray.map((element) => {
                // eslint-disable-next-line no-param-reassign
                element.is_deleted = false;
                return element;
            });
            setIspAccountList(resultArray);
        }
    };

    useEffect(() => {
        getIspAccountList();
    }, []);

    // 更新ボタンがクリックされた時に実行される関数
    const handleUpdateAgree = async () => {
        // 入力した行をまとめる
        const updateIspAccountList = [...ispAccountList, ...rows];

        // ここでAPIにデータを送信
        await callApi("POST", "/api/updateIspAccount", {
            updateIspAccountList,
        });

        getIspAccountList();

        setIsEdit(false);

        setSuccessEditName(true);
    };

    const handleSuccessEditName = () => {
        setSuccessEditName(false);
    };

    // 更新ボタン押下時のバリデーションをチェックする関数
    const handleAlert = () => {
        // 入力した行をまとめる
        const updatedList = [...ispAccountList, ...rows];

        // isp_user_idとisp_global_ipが空白のステータスを探す。見つけたらtrue。
        const hasEmptyIspFields = updatedList.find(
            (item) => item.isp_user_id === "" || item.isp_global_ip === ""
        );

        // isp_user_idとisp_global_ipの値をそれぞれのキーの配列に入れていく
        const ispUserIdList = updatedList.map((item) => item.isp_user_id);
        const ispGlobalIpList = updatedList.map((item) => item.isp_global_ip);

        // Setで重複を削除し、元の配列の差を調べる
        const hasDuplicateIspUserId =
            new Set(ispUserIdList).size !== ispUserIdList.length;
        const hasDuplicateIspGlobalIp =
            new Set(ispGlobalIpList).size !== ispGlobalIpList.length;

        // どちらかがtrueならtrueを返して、重複の差でフラグを立てる
        const hasDistinctError =
            hasDuplicateIspUserId || hasDuplicateIspGlobalIp;

        if (hasDistinctError) {
            setIsDistinctError(true);
        } else {
            setIsDistinctError(false);
        }

        if (hasEmptyIspFields) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    };

    const handlePlusButton = () => {
        handleAlert();
        // 新しい行のデータを初期化
        const newRow = {
            isp_status: false,
            isp_user_id: "",
            isp_password: "",
            plan: "",
            isp_global_ip: "",
            location_name: "",
            is_deleted: false,
        };
        setIspAccountList([...ispAccountList, newRow]);
    };

    const handleDeleteButton = (rowIndex) => {
        // 指定された行を削除するための関数
        const newispAccountList = [...ispAccountList];
        newispAccountList[rowIndex].is_deleted = true;

        // isp_global_ip、isp_user_idが空文字かつ、is_deletedがtrueの場合は物理的に入れるの要素を消す
        if (
            newispAccountList[rowIndex].isp_global_ip === "" &&
            newispAccountList[rowIndex].isp_user_id === "" &&
            newispAccountList[rowIndex].is_deleted
        ) {
            newispAccountList.splice(rowIndex, 1);
        }

        setIspAccountList(newispAccountList);
    };

    // 右上のボタン
    let headerButtons;

    // 編集モード、かつ、空白のバリデーションがあるか
    if (isEdit && isValid) {
        headerButtons = [
            {
                text: "更新",
                color: "blue",
                dialog: IspAccountValidationTemplate,
                event: handleAlert,
            },
            {
                text: "キャンセル",
                event: () => {
                    setIsEdit(false);
                    setRows([]);
                },
                color: "red",
            },
        ];
        // 編集モード、かつ、重複のバリデーションがあるか
    } else if (isEdit && isDistinctError) {
        headerButtons = [
            {
                text: "更新",
                color: "blue",
                dialog: IspAccountIsDistinctTemplate,
                event: handleAlert,
            },
            {
                text: "キャンセル",
                event: () => {
                    setIsEdit(false);
                    setRows([]);
                },
                color: "red",
            },
        ];
        // 編集モードか
    } else if (isEdit) {
        headerButtons = [
            {
                text: "更新",
                color: "blue",
                dialog: IspAccountUpdateTemplate,
                agreeEvent: handleUpdateAgree,
                event: handleAlert,
            },
            {
                text: "キャンセル",
                event: () => {
                    setIsEdit(false);
                    setRows([]);
                },
                color: "red",
            },
        ];
    } else {
        headerButtons = [
            {
                text: "編集",
                event: () => {
                    setIsEdit(true);
                },
                color: "blue",
            },
        ];
    }
    useEffect(() => {
        // fetchData();
    }, []); // パラメーターの変更時に再度データを取得

    console.log(data);
    const fetchData = async () => {
        try {
            const response = await axios.get("/api/getAllEstateInfos");
            setData(response.data.data);
        } catch (error) {
            console.error(error);
        }
    };

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
                            ダッシュボード
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
                        <Grid container spacing={3}>
                        <ListTable
        rows={rows}
        setRows={setRows}
        ispAccountList={ispAccountList}
        setIspAccountList={setIspAccountList}
        handlePlusButton={handlePlusButton}
        handleDeleteButton={handleDeleteButton}
        handleSuccessEditName={handleSuccessEditName}
        isEdit={isEdit}
        handleAlert={handleAlert}
        successEditName={successEditName}
      />
                            {/* Recent Orders */}
                            <Grid item xs={12}></Grid>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}
