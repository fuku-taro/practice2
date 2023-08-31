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
          <Container maxWidth="md">
            <div className={styles.buttonsContainer}>
              <div className={styles.buttons}>
                <p className={styles.p}>福岡の不動産・賃貸情報</p>
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
                      backgroundColor:"#ffc107",
                      fontSize:"1.2em",
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
                      backgroundColor:"#ffc107",
                      fontSize:"1.2em",
                    }}
                  >
                    買う
                  </Button>
                  </Link>
                </div>
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
