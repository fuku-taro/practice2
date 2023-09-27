import * as React from "react";
import Header from "../components/Header";
import { Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
// import Paper from '@mui/material/Paper';
import styles from "../../sass/AssessmentContact.module.scss";
import Contact from "../components/Contact";

export default function AssessmentContact() {
    return (
        <div>
            <React.Fragment>
                <div>
                    <Header />
                </div>

                <div className={styles.main}>
                    <div className={styles.textContainer}>
                        <h1>
                            <div className={styles.text}>お問い合わせ</div>
                        </h1>
                        <div className={styles.text}></div>
                    </div>
                    <div className={styles.paper}>
                        <Paper>
                            <Contact/>
                        </Paper>
                    </div>
                    <div className={styles.paper}>
                        <Paper>aaa</Paper>
                    </div>
                    <div className={styles.button}>
                        <Link to="/AssessmentContact">
                            <Button variant="contained">
                                無料査定スタート
                            </Button>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        </div>
    );
}
