import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import styles from '../../sass/footer.module.scss'

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Footer(props) {
  const { description, title } = props;

  return (
    <div className={styles.footer}>
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h8" align="center" gutterBottom>
        このサイトの利用について | ご利用条件 | リンクについて | サイトマップ | プライバシーポリシー | お問い合わせ | 障害報告 | サイトへのご意見・ご要望 | 掲載情報に関するご意見受付 | 利用規約 | で〜じハウジング使い方ガイド
 
 で〜じハウジングを利用して送信されるお客様の情報は
 SSL暗号化通信により保護されています。
        </Typography>
        {/* <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography> */}
        {/* <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          {description}
        </Typography> */}
        <Copyright />
      </Container>
    </Box>
    </div>
  );
}

Footer.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Footer;
