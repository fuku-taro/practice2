import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MyCustomCarousel from "../components/MyCustomCarousel";
import Table from "../components/Table";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import MainFeaturedPost from "../components/MainFeaturedPost";
import FeaturedPost from "../components/FeaturedPost";
import Main from "../components/Main";
import SidebarDummy from "../components/SidebarDummy";
import Footer from "../components/Footer";
import Circular from "../components/Circular";
import { Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import styles from "../../sass/Estate.module.scss";

const sidebar = {
    title: "About",
    description:
        "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
    archives: [
        { title: "March 2020", url: "#" },
        { title: "February 2020", url: "#" },
        { title: "January 2020", url: "#" },
        { title: "November 1999", url: "#" },
        { title: "October 1999", url: "#" },
        { title: "September 1999", url: "#" },
        { title: "August 1999", url: "#" },
        { title: "July 1999", url: "#" },
        { title: "June 1999", url: "#" },
        { title: "May 1999", url: "#" },
        { title: "April 1999", url: "#" },
    ],
    social: [
        { name: "GitHub", icon: GitHubIcon },
        { name: "Twitter", icon: TwitterIcon },
        { name: "Facebook", icon: FacebookIcon },
    ],
};

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Estate() {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // ローディング状態を管理
    const { uid } = useParams(); // uidパラメーターを取得
    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}年${month}月${day}日`;
    };
    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
    }

    useEffect(() => {
        fetchData();
    }, [uid]); // パラメーターの変更時に再度データを取得

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
    // const uids = uid.split('&'); // パラメーターを&で分割して配列にする
    console.log(data);
    const filteredData = data.filter((item) => item.id === parseInt(uid));
    console.log(filteredData);
    let rows = [];
    let rows2 = [];
    let rows3 = [];

    if (!isLoading && data.length > 0) {
      rows = [
        createData("物件番号", `${data[0].estate_id}`),
        createData("情報更新日", formatDate(data[0].created_at)),
        createData("次回更新予定日", formatDate(data[0].created_at)),
        createData(
            "所在地",
            `${data[0].location1}${data[0].location2}${data[0].address}`
        ),
        createData(
            "沿線・駅・交通",
            `${data[0].nearest_line}${data[0].station}駅 徒歩${data[0].walk_time}分`
        ),
        createData("間取り", `${data[0].floor_plan}`),
        createData("間取り内訳", `${data[0].floor_plan_kind}`),
        createData("サービスルーム数", ``),
        createData(
            "土地面積",
            `${data[0].measurement_method}${data[0].land_area}㎡`
        ),
        createData("私道面積", `${data[0].driveway_area}`),
        createData("建物面積", `${data[0].building_ex_area}㎡`),
        createData("小学校区", `${data[0].child_school}`),
        createData("中学校区", `${data[0].middle_school}`),
        createData("階建", ``),
        createData("土地権利", `${data[0].land_rights}`),
        createData("借地代", `${data[0].lease_fee}`),
        createData("借地期間", ``),
        createData("その他一時金", ``),
        createData("施設費用", ``),
        createData("その他費用", ``),
      ];

      rows2 = [
        createData("保証金", `${data[0].deposit_price}`),
        createData("権利金", `${data[0].key_money}`),
        createData(
            "築年月",
            `${data[0].build_year}年${data[0].build_mounth}月`
        ),
        createData("建物建造", `${data[0].building_const}`),
        createData("建物工法", ``),
        createData("駐車場", `${data[0].parking}`),
        createData("駐車場・形式", ``),
        createData("駐車場・状況", ``),
        createData("駐車場備考", ``),
        createData("都市計画", `${data[0].city_plan}`),
        createData("用途地域", `${data[0].use_area}`),
        createData("地目", `${data[0].landmark}`),
        createData(
            "建・容率",
            `${data[0].building_ratio}${data[0].floor_area_ratio}`
        ),
        createData("地勢", ``),
        createData("地域地区", ``),
        createData("傾斜地面積", ``),
        createData("接道状況詳細", ``),
        createData("建築確認・建築確認番号", ``),
        createData("国土法", `${data[0].land_law}`),
        createData("法令制限等", ``),
        createData("現況", `${data[0].current_situation}`),
        createData("条件等", `${data[0].conditions}`),
        createData("再建築", ``),
        createData("土地形状", ``),
        createData("敷地延長", ``),
        createData("付帯権利", ``),
        createData("引渡し可能時期", `${data[0].delivery_time}`),
      ];

      rows3 = [
        createData("分譲概要", ``),
        createData("設備", ``),
        createData("特記事項", `${data[0].notice1}`),
        createData("備考", `${data[0].remarks}`),
        createData("取引態様", `${data[0].transaction}`),
        createData("担当者", ``),
        createData("担当者連絡先", ``),
      ];
  }
    // const rows = [
    //     createData("物件番号", `${data[0].estate_id}`),
    //     createData("情報更新日", formatDate(data[0].created_at)),
    //     createData("次回更新予定日", formatDate(data[0].created_at)),
    //     createData(
    //         "所在地",
    //         `${data[0].location1}${data[0].location2}${data[0].address}`
    //     ),
    //     createData(
    //         "沿線・駅・交通",
    //         `${data[0].nearest_line}${data[0].station}駅 徒歩${data[0].walk_time}分`
    //     ),
    //     createData("間取り", `${data[0].floor_plan}`),
    //     createData("間取り内訳", `${data[0].floor_plan_kind}`),
    //     createData("サービスルーム数", ``),
    //     createData(
    //         "土地面積",
    //         `${data[0].measurement_method}${data[0].land_area}㎡`
    //     ),
    //     createData("私道面積", `${data[0].driveway_area}`),
    //     createData("建物面積", `${data[0].building_ex_area}㎡`),
    //     createData("小学校区", `${data[0].child_school}`),
    //     createData("中学校区", `${data[0].middle_school}`),
    //     createData("階建", ``),
    //     createData("土地権利", `${data[0].land_rights}`),
    //     createData("借地代", `${data[0].lease_fee}`),
    //     createData("借地期間", ``),
    //     createData("その他一時金", ``),
    //     createData("施設費用", ``),
    //     createData("その他費用", ``),
    // ];

    // const rows2 = [
    //     createData("保証金", `${data[0].deposit_price}`),
    //     createData("権利金", `${data[0].key_money}`),
    //     createData(
    //         "築年月",
    //         `${data[0].build_year}年${data[0].build_mounth}月`
    //     ),
    //     createData("建物建造", `${data[0].building_const}`),
    //     createData("建物工法", ``),
    //     createData("駐車場", `${data[0].parking}`),
    //     createData("駐車場・形式", ``),
    //     createData("駐車場・状況", ``),
    //     createData("駐車場備考", ``),
    //     createData("都市計画", `${data[0].city_plan}`),
    //     createData("用途地域", `${data[0].use_area}`),
    //     createData("地目", `${data[0].landmark}`),
    //     createData(
    //         "建・容率",
    //         `${data[0].building_ratio}${data[0].floor_area_ratio}`
    //     ),
    //     createData("地勢", ``),
    //     createData("地域地区", ``),
    //     createData("傾斜地面積", ``),
    //     createData("接道状況詳細", ``),
    //     createData("建築確認・建築確認番号", ``),
    //     createData("国土法", `${data[0].land_law}`),
    //     createData("法令制限等", ``),
    //     createData("現況", `${data[0].current_situation}`),
    //     createData("条件等", `${data[0].conditions}`),
    //     createData("再建築", ``),
    //     createData("土地形状", ``),
    //     createData("敷地延長", ``),
    //     createData("付帯権利", ``),
    //     createData("引渡し可能時期", `${data[0].delivery_time}`),
    // ];

    // const rows3 = [
    //     createData("分譲概要", ``),
    //     createData("設備", ``),
    //     createData("特記事項", `${data[0].notice1}`),
    //     createData("備考", `${data[0].remarks}`),
    //     createData("取引態様", `${data[0].transaction}`),
    //     createData("担当者", ``),
    //     createData("担当者連絡先", ``),
    // ];
    // console.log(data[0].estate_id);
    return (
        <ThemeProvider theme={defaultTheme}>
            <Header />
            <CssBaseline />
            {isLoading ? (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Circular size="5rem" />
                </div>
            ) : (
                <>
                    <Container maxWidth="lg">
                        <main>
                            <div className={styles.button}>
                                <Button
                                    variant="contained"
                                    startIcon={<MailIcon />}
                                >
                                    お問い合わせ
                                </Button>
                            </div>
                            {filteredData.map((item) => (
                                <div key={item.id}>
                                    <MyCustomCarousel item={item} />
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <Table item={item} rows={rows} />
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <Table item={item} rows={rows2} />
                                        </Grid>
                                    </Grid>
                                    <Grid container sx={{ mt: 2 }}>
                                        <Table item={item} rows={rows3} />
                                    </Grid>
                                </div>
                            ))}

                            <div className={styles.button}>
                                <Button
                                    variant="contained"
                                    startIcon={<MailIcon />}
                                >
                                    お問い合わせ
                                </Button>
                            </div>
                        </main>
                    </Container>
                    <Footer
                        title="Footer"
                        description="Something here to give the footer a purpose!"
                    />
                </>
            )}
        </ThemeProvider>
    );
}
