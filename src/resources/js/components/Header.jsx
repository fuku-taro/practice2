import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
// import Link from '@mui/material/Link';
import DehazeIcon from "@mui/icons-material/Dehaze";
import styles from "../../sass/header.module.scss";
import { Link } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";

function Header() {
    const [openDrawer, setOpenDrawer] = React.useState(false);

    // Drawerを開く関数
    const openDrawerHandler = () => {
        setOpenDrawer(true);
    };

    // Drawerを閉じる関数
    const closeDrawerHandler = () => {
        setOpenDrawer(false);
    };

    return (
        <React.Fragment>
            <Toolbar
                sx={{
                    borderBottom: 1,
                    borderColor: "divider",
                    justifyContent: "center",
                }}
            >
                <div className={styles.group}>
                    <div className={styles.icon}>
                        <Link to="/">
                            <img
                                className={styles.img}
                                src="/images/logo0921_w300.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <div className={styles.button}>
                        <Link to="/Login">
                            <Button variant="outlined" size="small">
                                ログイン
                            </Button>
                        </Link>
                    </div>
                    <div className={styles.toggle}>
                        <DehazeIcon
                            onClick={openDrawerHandler}
                            sx={{ display: { xs: "block", sm: "none" } }}
                        />
                    </div>
                    <MenuDrawer
                        openDrawer={openDrawer}
                        openDrawerHandler={openDrawerHandler}
                        closeDrawerHandler={closeDrawerHandler}
                    />
                </div>
            </Toolbar>
        </React.Fragment>
    );
}
export default Header;
