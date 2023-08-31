import React from "react";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import styles from "../../sass/top.module.scss";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const defaultTheme = createTheme();

export default function Top() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Header />
      <div className={styles.mainVisual}>
        {/* 背景画像の上に要素を配置 */}
        <div className={styles.mainMask}>
          {/* <Container maxWidth="md"> */}
          <Container maxWidth="md" sx={{ marginTop: "80px" }}>
            <div className={styles.buttonsContainer}>
              <div className={styles.buttons}>
                <p className={styles.p}><span className={styles.span}>沖縄の不動産・賃貸情報</span></p>
                <p className={styles.p}>どのような物件をお探しですか？</p>
                <div className={styles.buttonGroup}>
                <Link to="/Search_area">
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      width: "150px",
                      height: "150px",
                      mr: 3,
                      backgroundColor:"#078dff",
                      fontSize:"1.2em",
                      color: "#fee3fa",
                    }}
                    // href="/Search_area"
                  >
                    借りる
                  </Button>
                </Link>
                <Link to="/Search_area">
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      width: "150px",
                      height: "150px",
                      backgroundColor:"#1aff07",
                      fontSize:"1.2em",
                      color: "#fee3fa",
                    }}
                  >
                    買う
                  </Button>
                  </Link>
                </div>
                <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      width: "320px",
                      height: "80px",
                      backgroundColor:"#ff0000",
                      fontSize:"1.2em",
                      color: "#fee3fa",
                      mt:2,
                    }}
                  >
                    不動産業者様専用会員ページ
                  </Button>
              </div>
            </div>
          </Container>
        </div>
      </div>
      <Container>
        <main className={styles.main}>
          <div className={styles.content}></div>
        </main>
      </Container>
      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
        sx={{ mt: "auto" }}
      />
    </ThemeProvider>
  );
}
