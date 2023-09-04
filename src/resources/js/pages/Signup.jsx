import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import styles from "../../sass/Signup.module.scss";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
    const [validationErrors, setValidationErrors] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const name = data.get("name");
        const email = data.get("email");
        const password = data.get("password");

        try {
            const response = await axios.post("/api/register", {
                name,
                email,
                password,
            });

            // Check if registration was successful
            if (response.status === 200) {
                // Registration was successful
                console.log(response.data);

                // Redirect the user to the login page or perform other actions as needed.
                // Example: Redirect to the login page
                navigate('/Done');
                // history.push('/Login');
            } else {
                // Handle unexpected response status
                console.error("Unexpected response status:", response.status);
            }
        } catch (error) {
            // Handle registration error here (e.g., display error messages).
            if (error.response && error.response.status === 422) {
                // Validation error occurred, extract error messages and display them
                const validationErrorsData = error.response.data.errors;

                setValidationErrors({
                    name: validationErrorsData.name
                        ? validationErrorsData.name[0]
                        : "",
                    email: validationErrorsData.email
                        ? validationErrorsData.email[0]
                        : "",
                    password: validationErrorsData.password
                        ? validationErrorsData.password[0]
                        : "",
                });

                console.error(validationErrorsData);
            } else {
                console.error(error);
            }
        }
    };

    return (
        <ThemeProvider theme={createTheme()}>
            <Header />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        新規登録
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="お名前"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        helperText={validationErrors.name}
                        error={!!validationErrors.name}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="メールアドレス"
                        name="email"
                        autoComplete="email"
                        helperText={validationErrors.email}
                        error={!!validationErrors.email}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="パスワード"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText={validationErrors.password}
                        error={!!validationErrors.password}
                    />
                        <div className={styles.a}>
                            <p>サービス利用規約 会員規約</p>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 2 }}
                            >
                                規約に同意して登録
                            </Button>
                        </div>
                        <Grid container></Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default Signup;
