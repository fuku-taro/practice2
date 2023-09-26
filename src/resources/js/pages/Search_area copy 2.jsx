import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styles from "../../sass/Search_area.module.scss";
import AreaAccordion from "../components/AreaAccordion";
import Tizu from "../components/Tizu";
import { Grid } from "@mui/material";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();
export default function Search_area() {
    const [label, setLabel] = useState(""); // labelの初期値を設定
    const [labels, setLabels] = useState([]); // 複数のラベルを格納する配列
    const [isButtonDisabled, setButtonDisabled] = useState(true);
    const [fukuokaAreaData, setFukuokaAreaData] = useState([]);
    const [kitakyusyuAreaData, setKitakyusyuAreaData] = useState([]);
    const [chikuhouAreaData, setChikuhouAreaData] = useState([]);
    const [chikugoAreaData, setChikugoAreaData] = useState([]);
    const [hokubuAreaData, setHokubuAreaData] = useState([]);
    const [chubuAreaData, setChubuAreaData] = useState([]);
    const [nanbuAreaData, setNanbuAreaData] = useState([]);
    const [ritouAreaData, setRitouAreaData] = useState([]);

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        let updatedLabels = [];

        if (checked) {
            updatedLabels = [...labels, name];
        } else {
            updatedLabels = labels.filter((label) => label !== name);
        }

        setLabel(event.target.name);
        setLabels(updatedLabels);

        // チェックボックスがチェックされた場合はボタンの disabled を解除し、チェックが外れた場合は disabled を設定します
        setButtonDisabled(updatedLabels.length === 0);
    };
    return (
        <ThemeProvider theme={defaultTheme}>
            <Header />
            <div className={styles.main}>
                <Container>
                    <div className={styles.contents}>
                        <div className={styles.content}>
                            <Grid
                                container
                                xs={12}
                                md={8}
                                sx={{
                                    // display: { xs: "none", sm: "block" },
                                    height: "auto",
                                    mr: 2,
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                    }}
                                >
                                    <Container
                                        maxWidth="md"
                                        sx={{
                                            backgroundColor: "#ffc107",
                                            py: 4,
                                            display: "flex",
                                            flexDirection: "column",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexWrap: "wrap",
                                                gap: 2,
                                                justifyContent: "center",
                                                flexDirection: "column",
                                            }}
                                        >
                                            <Typography variant="h5">
                                                エリアを選んで下さい
                                            </Typography>
                                            <AreaAccordion
                                                fukuokaAreaData={
                                                    fukuokaAreaData
                                                }
                                                kitakyusyuAreaData={
                                                    kitakyusyuAreaData
                                                }
                                                chikuhouAreaData={
                                                    chikuhouAreaData
                                                }
                                                chikugoAreaData={
                                                    chikugoAreaData
                                                }
                                                handleCheckboxChange={
                                                    handleCheckboxChange
                                                }
                                                label={label}
                                                labels={labels}
                                                isButtonDisabled={
                                                    isButtonDisabled
                                                }
                                            />
                                        </Box>
                                        <Button
                                            variant="contained"
                                            component={Link}
                                            to={`/Result/${labels.join("&")}`} // 複数のラベルを&で繋げてURLに追加
                                            startIcon={<SearchIcon />}
                                            sx={{ margin: "0 auto", mt: 2 }}
                                            disabled={isButtonDisabled}
                                        >
                                            検索する
                                        </Button>
                                    </Container>
                                </Box>
                            </Grid>
                        </div>
                        <div className={styles.img}>
                            <Grid
                                container
                                xs={12}
                                sx={{ display: { xs: "none", md: "block" } }}
                            >
                                <Tizu />
                            </Grid>
                        </div>
                        <div className={styles.img}>
                            <Grid
                                container
                                xs={12}
                                sx={{ display: { xs: "block", sm: "none" } }}
                            >
                                <div className={styles.imageContainer}>
                                    <div className={styles.imageHover}>
                                        <img
                                            src="/svg/okinawa_tizu_test01_hover.svg"
                                            alt=""
                                            className={styles.image}
                                        />
                                    </div>
                                    <div className={styles.imageNormal}>
                                        <img
                                            src="/svg/okinawa_tizu_test01.svg"
                                            alt=""
                                            className={styles.image}
                                        />
                                    </div>
                                </div>
                            </Grid>
                        </div>
                    </div>
                </Container>
            </div>
            <Footer
                title="Footer"
                description="Something here to give the footer a purpose!"
            />
        </ThemeProvider>
    );
}
