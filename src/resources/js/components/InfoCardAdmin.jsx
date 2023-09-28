import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import Table from "./Table2";
import styles from "../../sass/InfoCardAdmin.module.scss"

export default function InfoCardAdmin(props) {
    console.log(props);
    return (
        <Container
            sx={{
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Grid container justifyContent="center">
                <Grid item xs={12}>
                    {props.currentData.map((item) => (
                      <>
                        <Link
                            key={item.id}
                            //   to={`/Estate?uid=${item.id}`}
                            to={`/Estate/${item.id}`}
                            style={{ textDecoration: "none" }} // 下線を消すスタイルを追加
                        >
                            <Card
                                sx={{
                                    display: { xs: "block", sm: "flex" },
                                    height: { xs: "auto", sm: "270px" },
                                    mb: 3,
                                    bgcolor: "#19ff19",
                                }}
                            >
                                {/* <CardActionArea sx={{ flexBasis: "35%" }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        src={`/images/${item.images[0]}`}
                                        alt="green iguana"
                                    />
                                </CardActionArea> */}
                                <Box sx={{ flex: 1 }}>
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="div"
                                        >
                                            {item.location2}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            //   color="text.secondary"
                                            sx={{
                                                display: {
                                                    xs: "block",
                                                    sm: "none",
                                                },
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                }}
                                            >
                                                <b>価格</b>
                                                <span style={{ color: "red" }}>
                                                    {item.price}万円
                                                </span>
                                                <br />
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                }}
                                            >
                                                <b>間取り</b>
                                                <span>{item.floor_plan}</span>
                                                <br />
                                            </Box>
                                            {item.location1}
                                            {item.location2}
                                            {item.address}
                                            <br />
                                            {item.nearest_line} {item.station}駅
                                            徒歩{item.walk_time}(分)
                                        </Typography>

                                        <Table item={item} />
                                    </CardContent>
                                </Box>
                            </Card>
                        </Link>
                        <div className={styles.btnDiv}>
                                <div className={styles.btn}>
                                    <Button variant="outlined">編集</Button>
                                </div>
                                <div className={styles.btn}>
                                    <Button variant="outlined" color="error">削除</Button>
                                </div>
                        </div>
                        </>
                    ))}
                </Grid>
            </Grid>
        </Container>
    );
}
