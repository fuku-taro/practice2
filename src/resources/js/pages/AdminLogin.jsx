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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function AdminLogin() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // First, make a request to get the CSRF cookie
            const sanctum = await axios.get("/sanctum/csrf-cookie");

            const response = await axios.post("/api/Login", formData);
            // const { name } = response.data.user; // ユーザーの名前を取得

            // ログイン成功の場合、トークンを保存などの処理を実行

            // ログイン成功後、遷移先のURLにリダイレクト
            console.log(sanctum);
            console.log(response.data);
            navigate("/Admin");
        } catch (error) {
            // ログインエラーの処理
            if (error.response.status === 401) {
                setError(
                    "認証エラー: メールアドレスまたはパスワードが正しくありません。"
                );
            } else {
                setError("ログインエラーが発生しました。");
            }
            console.error("ログインエラー:", error);
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
                        ログイン
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
                            id="email"
                            label="メールアドレス"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={handleChange} // 追加
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
                            onChange={handleChange} // 追加
                        />
                        {error && (
                            <Typography variant="body2" color="error">
                                {error}
                            </Typography>
                        )}
                        {/* <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="メールとパスワードを記憶"
                        /> */}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            ログイン
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    パスワードをお忘れの方
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to="/Signup">新規会員登録</Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default AdminLogin;
