import * as React from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
// import Link from '@mui/material/Link';
import styles from "../../sass/header.module.scss";
import { Link } from "react-router-dom";

function Header(props) {
    const sections = [
        { title: "Topページへ", url: "/" },
        { title: "エリアから探す", url: "/Search" },
        { title: "地図から探す", url: "/Search" },
        { title: "駅・路線から探す", url: "/Search" },
    ];

    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: "divider", justifyContent: 'center'}}>
                <div className={styles.group}>
                    <div className={styles.icon}>
                        <Link to="/">
                            <img src="/images/logo_okinawa2.png" alt="" />
                        </Link>
                    </div>
                    <div className={styles.button}>
                        <Link to="/Login">
                            <Button variant="outlined" size="small">
                                ログイン
                            </Button>
                        </Link>
                    </div>
                </div>
            </Toolbar>
        </React.Fragment>
    );
}
export default Header;
