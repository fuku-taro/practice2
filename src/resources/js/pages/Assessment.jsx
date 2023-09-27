import * as React from "react";
import Header from "../components/Header";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "../../sass/Assessment.module.scss";
export default function Assessment() {
    return (
        <div>
            <React.Fragment>
                <div>
                    <Header />
                </div>

                <div className={styles.main}>
                    <div className={styles.textContainer}>
                        <h1>
                            <div className={styles.text}>あなたの不動産</div>
                            <div className={styles.ima}>今、いくら？</div>
                        </h1>
                        <div className={styles.text}>
                            不動産選びで、数百万も
                            <span className={styles.span}>売却額</span>が変わる
                        </div>
                    </div>
                    <div className={styles.button}>
                        <Link to="/AssessmentContact">
                            <Button variant="contained">無料査定スタート</Button>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}
