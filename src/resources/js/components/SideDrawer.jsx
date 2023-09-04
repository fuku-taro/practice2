import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Sidebar from "./Sidebar";

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
                {/* Drawerコンポーネント */}
                <Drawer anchor="right" open={openDrawer} onClose={closeDrawerHandler}>
                    <div style={{ width: "250px" }}>
                        <Sidebar />
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
