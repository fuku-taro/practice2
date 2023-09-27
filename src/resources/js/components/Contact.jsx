import React from "react";
import styles from "../../sass/Contact.module.scss";

export default function Contact() {
    return (
        <div>
            <div>
                <h4>お問い合わせ情報を入力してください</h4>
                <p className={styles.ptext}>
                    ※当ページは消費者の方からの物件問い合わせのため開設しております。不動産業者に対する営業目的のダイレクトメールはお控えください。
                </p>
            </div>
        </div>
    );
}
