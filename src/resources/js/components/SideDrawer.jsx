import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Sidebar from "./Sidebar";
import styles from "../../sass/MenuDrawer.module.scss";

export default function SideDrawer() {
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
        <div>
            <React.Fragment>
                {/* Drawerを開くボタン */}
                {/* <Button onClick={openDrawerHandler}>aaa</Button> */}
                {/* ウィンドウ幅がsm以上の場合に表示されるボタン */}
                <Button
                    onClick={openDrawerHandler}
                    sx={{ display: { xs: "block", sm: "none" } }}
                >
                    詳しい条件で絞り込む
                </Button>
                {/* CloseIconをDrawerの外に配置 */}
                {openDrawer ? (
                    <div className={styles.close}>
                        <CloseIcon
                            sx={{
                                position: "absolute",
                                right: "calc(250px - 0px)",
                                top: "5px",
                                cursor: "pointer",
                                color: "#fff",
                                zIndex: 999, // 適切な値を設定してアイコンを前面に表示
                            }}
                            onClick={closeDrawerHandler}
                        />
                    </div>
                ) : (
                    ""
                )}
                {/* Drawerコンポーネント */}
                <Drawer
                    anchor="right"
                    open={openDrawer}
                    onClose={closeDrawerHandler}
                    sx={{ zIndex: 998 }}
                >
                    <div style={{ width: "250px" }}>
                        <Sidebar />
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
