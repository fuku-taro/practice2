import * as React from "react";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";
import styles from "../../sass/MenuDrawer.module.scss";

export default function MenuDrawer(props) {
    return (
        <div>
            <React.Fragment>
                {/* CloseIconをDrawerの外に配置 */}
                {props.openDrawer ? (
                    <div className={styles.close}>
                        <CloseIcon
                            sx={{
                                position: "absolute",
                                right: "calc(250px - 10px)",
                                top: "5px",
                                cursor: "pointer",
                                color: "#fff",
                                zIndex: 999, // 適切な値を設定してアイコンを前面に表示
                            }}
                            onClick={props.closeDrawerHandler}
                        />
                    </div>
                ) : (
                    ""
                )}
                {/* Drawerコンポーネント */}
                <Drawer
                    anchor="right"
                    open={props.openDrawer}
                    onClose={props.closeDrawerHandler}
                    sx={{ zIndex: 998 }}
                >
                    <div style={{ width: "250px" }}>
                        <Link to="/">
                            <div>
                                <Button sx={{ justifyContent: "left" }}>
                                    ホーム
                                </Button>
                            </div>
                        </Link>
                        <Divider />
                        <Link to="/Search_area">
                            <div>
                                <Button sx={{ justifyContent: "left" }}>
                                    借りる
                                </Button>
                            </div>
                        </Link>
                        <Divider />
                        <Link to="/Search_area">
                            <div>
                                <Button sx={{ justifyContent: "left" }}>
                                    買う
                                </Button>
                            </div>
                        </Link>
                        <Divider />
                        <Link to="/Assessment">
                            <div>
                                <Button>安心売却査定依頼</Button>
                            </div>
                        </Link>
                        <Divider />
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
