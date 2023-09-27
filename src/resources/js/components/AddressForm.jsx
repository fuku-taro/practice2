import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { FormGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import styles from "../../sass/AddressForm.module.scss";

export default function AddressForm() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                お問い合わせ情報を入力してください
            </Typography>
            <div className={styles.label}>①お名前</div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="sei"
                        name="sei"
                        label="姓"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="mei"
                        name="mei"
                        label="名"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="seiFuri"
                        name="seiFuri"
                        label="せい"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="meiFuri"
                        name="meiFuri"
                        label="めい"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                    />
                </Grid>
            </Grid>

            <div className={styles.label}>②お問い合わせ内容</div>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="詳しい資料が欲しい"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="物件が見たい"
                        />
                    </FormGroup>
                    <div>
                        <h5>内見希望日時</h5>
                    </div>
                    <TextField
                        required
                        id="zip"
                        name="zip"
                        label="第一希望"
                        placeholder="例) 2023/1/1 14時"
                        fullWidth
                        autoComplete="shipping postal-code"
                        variant="standard"
                    />
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address1"
                            name="address1"
                            label="第二希望"
                            placeholder="例) 2023/1/2 14時"
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ mb:2 }}>
                        <TextField
                            id="address2"
                            name="address2"
                            label="第三希望"
                            placeholder="例) 2023/1/3 14時"
                            fullWidth
                            autoComplete="shipping address-line2"
                            variant="standard"
                        />
                    </Grid>
                    <FormGroup>
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="担当者に話を聞きたい"
                        />
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="その他お問い合わせ"
                        />
                    </FormGroup>
                    <textarea
                        className={styles.textarea}
                        placeholder="例) 資金計画などのアドバイスが欲しい/近隣での物件情報も欲しい"
                        name=""
                        id=""
                        cols="30"
                        rows="3"
                    ></textarea>
                </Grid>
            </Grid>

            <div className={styles.label}>③連絡方法・連絡先</div>
            <div className={styles.kome}>※メール・電話・ファックス・郵送の連絡方法のチェックをいれて、連絡先を入力してください。（複数選択可）</div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                <FormGroup>
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="メール"
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <TextField
                        required
                        id="mail"
                        name="mail"
                        label="メールアドレス"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        sx={{ mb:1 }}
                        />
                    <TextField
                        sx={{ mb:1 }}
                        required
                        id="mailk"
                        name="mailk"
                        label="メールアドレス再確認"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                    <p>メールアドレスは間違い防止のため２度入力となります。</p>
                    <p>連絡先等の入力内容に誤りがないか、再度ご確認ください。</p>
                    <p>※入力内容に誤りがある場合、連絡が取れない場合があります。</p>
                    <p className={styles.kome}>携帯電話のメールの場合、受信設定でメールが受信できるように設定してください</p>
                </Grid>
                <Grid item xs={12} sm={3}>
                <FormGroup>
                        <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="メール"
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={12} sm={9} sx={{ paddingLeft:'5px' }}>
                    <TextField
                        required
                        id="mail"
                        name="mail"
                        label="メールアドレス"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        sx={{ mb:1 }}
                        />
                    <TextField
                        sx={{ mb:1 }}
                        required
                        id="mailk"
                        name="mailk"
                        label="メールアドレス再確認"
                        fullWidth
                        autoComplete="given-name"
                        variant="standard"
                    />
                    <p>メールアドレスは間違い防止のため２度入力となります。</p>
                    <p>連絡先等の入力内容に誤りがないか、再度ご確認ください。</p>
                    <p>※入力内容に誤りがある場合、連絡が取れない場合があります。</p>
                    <p className={styles.kome}>携帯電話のメールの場合、受信設定でメールが受信できるように設定してください</p>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}
