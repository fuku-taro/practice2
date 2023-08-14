import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import styles from '../../sass/Sidebar.module.scss';

function Sidebar() {

  return (
    <div>
      <Paper sx={{ bgcolor:'aliceblue' }}>
        <div className={styles.title}>
         絞り込み
        </div>
        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>物件種別</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="中古一戸建" />
                <FormControlLabel control={<Checkbox size='small' />} label="新築一戸建" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>価格</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="オーナチェンジを除く" />
                <FormControlLabel control={<Checkbox size='small' />} label="オーナーチェンジのみ" />
                <FormControlLabel control={<Checkbox size='small' />} label="賃貸中を除く" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>間取りタイプ</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="ワンルーム" />
                <FormControlLabel control={<Checkbox size='small' />} label="1 K" />
                <FormControlLabel control={<Checkbox size='small' />} label="1 DK" />
                <FormControlLabel control={<Checkbox size='small' />} label="1 LDK" />
                <FormControlLabel control={<Checkbox size='small' />} label="2 K" />
                <FormControlLabel control={<Checkbox size='small' />} label="2 DK" />
                <FormControlLabel control={<Checkbox size='small' />} label="2 LDK" />
                <FormControlLabel control={<Checkbox size='small' />} label="3 K" />
                <FormControlLabel control={<Checkbox size='small' />} label="3 DK" />
                <FormControlLabel control={<Checkbox size='small' />} label="3 LDK" />
                <FormControlLabel control={<Checkbox size='small' />} label="4 K" />
                <FormControlLabel control={<Checkbox size='small' />} label="4 DK" />
                <FormControlLabel control={<Checkbox size='small' />} label="4 LDK以上" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>土地面積</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="Label" />
                <FormControlLabel control={<Checkbox size='small' />} label="Label" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>建物面積</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="Label" />
                <FormControlLabel control={<Checkbox size='small' />} label="Label" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>築年数</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="指定なし" />
                <FormControlLabel control={<Checkbox size='small' />} label="1年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="2年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="3年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="4年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="5年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="6年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="7年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="8年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="9年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="10年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="15年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="20年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="25年以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="30年以内" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>最寄駅徒歩分</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="指定なし" />
                <FormControlLabel control={<Checkbox size='small' />} label="3分以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="5分以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="7分以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="10分以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="15分以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="20分以内" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>バス停徒歩分</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="指定なし" />
                <FormControlLabel control={<Checkbox size='small' />} label="3分以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="5分以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="7分以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="10分以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="15分以内" />
                <FormControlLabel control={<Checkbox size='small' />} label="20分以内" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>インスペクション</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="住まいの健康診断(検査日より1年未満)" />
                <FormControlLabel control={<Checkbox size='small' />} label="その他の住まいの健康診断" />
                <FormControlLabel control={<Checkbox size='small' />} label="住まいの健康診断以外のインスペクション(検査日より1年未満)" />
                <FormControlLabel control={<Checkbox size='small' />} label="その他のインスペクション" />
                <FormControlLabel control={<Checkbox size='small' />} label="瑕疵保険検査基準に適合" />
                <FormControlLabel control={<Checkbox size='small' />} label="耐震基準適合証明書" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>学校名検索</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="Label" />
                <FormControlLabel control={<Checkbox size='small' />} label="Label" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>駐車場・駐輪場</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="駐車場有（近隣含む）" />
                <FormControlLabel control={<Checkbox size='small' />} label="駐車場２台分" />
                <FormControlLabel control={<Checkbox size='small' />} label="駐車場３台分以上" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>建物構造</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="木造" />
                <FormControlLabel control={<Checkbox size='small' />} label="ブロック" />
                <FormControlLabel control={<Checkbox size='small' />} label="鉄構造" />
                <FormControlLabel control={<Checkbox size='small' />} label="RC" />
                <FormControlLabel control={<Checkbox size='small' />} label="SRC" />
                <FormControlLabel control={<Checkbox size='small' />} label="PC" />
                <FormControlLabel control={<Checkbox size='small' />} label="HPC" />
                <FormControlLabel control={<Checkbox size='small' />} label="軽量鉄骨" />
                <FormControlLabel control={<Checkbox size='small' />} label="ALC" />
                <FormControlLabel control={<Checkbox size='small' />} label="その他" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>位置</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="角地" />
                <FormControlLabel control={<Checkbox size='small' />} label="高台" />
                <FormControlLabel control={<Checkbox size='small' />} label="接道幅6m以上" />
                <FormControlLabel control={<Checkbox size='small' />} label="低層住居専用地域" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>設備</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="Label" />
                <FormControlLabel control={<Checkbox size='small' />} label="Label" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>条件</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="Label" />
                <FormControlLabel control={<Checkbox size='small' />} label="Label" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        <div className={styles.accordion}>
          <Accordion sx={{ bgcolor:'#f7f7f7' }}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>もっと詳しく</Typography>
            </AccordionSummary>
            <div className={styles.formGroup}>
              <FormGroup>
                <FormControlLabel control={<Checkbox size='small' />} label="Label" />
                <FormControlLabel control={<Checkbox size='small' />} label="Label" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        
      </Paper>
    </div>
  );
}



export default Sidebar;
