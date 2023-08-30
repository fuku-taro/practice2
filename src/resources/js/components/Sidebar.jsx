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
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
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
                <RadioGroup>
                  <FormControlLabel value="0" control={<Radio size='small' />} label="指定なし" />
                  <FormControlLabel value="1" control={<Radio size='small' />} label="1年以内" />
                  <FormControlLabel value="2" control={<Radio size='small' />} label="2年以内" />
                  <FormControlLabel value="3" control={<Radio size='small' />} label="3年以内" />
                  <FormControlLabel value="4" control={<Radio size='small' />} label="4年以内" />
                  <FormControlLabel value="5" control={<Radio size='small' />} label="5年以内" />
                  <FormControlLabel value="6" control={<Radio size='small' />} label="6年以内" />
                  <FormControlLabel value="7" control={<Radio size='small' />} label="7年以内" />
                  <FormControlLabel value="8" control={<Radio size='small' />} label="8年以内" />
                  <FormControlLabel value="9" control={<Radio size='small' />} label="9年以内" />
                  <FormControlLabel value="10" control={<Radio size='small' />} label="10年以内" />
                  <FormControlLabel value="20" control={<Radio size='small' />} label="20年以内" />
                  <FormControlLabel value="25" control={<Radio size='small' />} label="25年以内" />
                  <FormControlLabel value="30" control={<Radio size='small' />} label="30年以内" />
                </RadioGroup>
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
                <RadioGroup>
                    <FormControlLabel value="0" control={<Radio size='small' />} label="指定なし" />
                    <FormControlLabel value="3" control={<Radio size='small' />} label="3分以内" />
                    <FormControlLabel value="5" control={<Radio size='small' />} label="5分以内" />
                    <FormControlLabel value="7" control={<Radio size='small' />} label="7分以内" />
                    <FormControlLabel value="10" control={<Radio size='small' />} label="10分以内" />
                    <FormControlLabel value="15" control={<Radio size='small' />} label="15分以内" />
                    <FormControlLabel value="20" control={<Radio size='small' />} label="20分以内" />
                </RadioGroup>
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
                <RadioGroup>
                  <FormControlLabel value="0" control={<Radio size='small' />} label="指定なし" />
                  <FormControlLabel value="3" control={<Radio size='small' />} label="3分以内" />
                  <FormControlLabel value="5" control={<Radio size='small' />} label="5分以内" />
                  <FormControlLabel value="7" control={<Radio size='small' />} label="7分以内" />
                  <FormControlLabel value="10" control={<Radio size='small' />} label="10分以内" />
                  <FormControlLabel value="15" control={<Radio size='small' />} label="15分以内" />
                  <FormControlLabel value="20" control={<Radio size='small' />} label="20分以内" />
                </RadioGroup>
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
                <FormControlLabel control={<Checkbox size='small' />} label="都市ガス" />
                <FormControlLabel control={<Checkbox size='small' />} label="プロパンガス" />
                <FormControlLabel control={<Checkbox size='small' />} label="上水道" />
                <FormControlLabel control={<Checkbox size='small' />} label="浄化槽" />
                <FormControlLabel control={<Checkbox size='small' />} label="側溝" />
                <FormControlLabel control={<Checkbox size='small' />} label="給湯" />
                <FormControlLabel control={<Checkbox size='small' />} label="24時間換気システム" />
                <FormControlLabel control={<Checkbox size='small' />} label="ロフト" />
                <FormControlLabel control={<Checkbox size='small' />} label="掘ごたつ" />
                <FormControlLabel control={<Checkbox size='small' />} label="複層ガラス" />
                <FormControlLabel control={<Checkbox size='small' />} label="エアコン" />
                <FormControlLabel control={<Checkbox size='small' />} label="床暖房" />
                <FormControlLabel control={<Checkbox size='small' />} label="地下室" />
                <FormControlLabel control={<Checkbox size='small' />} label="農地付" />
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
                <FormControlLabel control={<Checkbox size='small' />} label="即入居可" />
                <FormControlLabel control={<Checkbox size='small' />} label="内装リフォーム" />
                <FormControlLabel control={<Checkbox size='small' />} label="外装リフォーム" />
                <FormControlLabel control={<Checkbox size='small' />} label="平屋" />
                <FormControlLabel control={<Checkbox size='small' />} label="二世帯向き" />
                <FormControlLabel control={<Checkbox size='small' />} label="バリアフリー" />
                <FormControlLabel control={<Checkbox size='small' />} label="リゾート向き" />
                <FormControlLabel control={<Checkbox size='small' />} label="リノベーション" />
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
                <h5>キッチン</h5>
                <FormControlLabel control={<Checkbox size='small' />} label="システムキッチン" />
                <FormControlLabel control={<Checkbox size='small' />} label="カウンターキッチン" />
                <FormControlLabel control={<Checkbox size='small' />} label="食器洗浄乾燥機" />
                <FormControlLabel control={<Checkbox size='small' />} label="IHクッキングヒーター" />
                <FormControlLabel control={<Checkbox size='small' />} label="冷蔵庫" />
                <FormControlLabel control={<Checkbox size='small' />} label="浄水器" />
                <h5>エコ関連</h5>
                <FormControlLabel control={<Checkbox size='small' />} label="オール電化" />
                <FormControlLabel control={<Checkbox size='small' />} label="タンク式電気給湯器" />
                <FormControlLabel control={<Checkbox size='small' />} label="省エネ給湯器" />
                <FormControlLabel control={<Checkbox size='small' />} label="太陽光システム" />
                <FormControlLabel control={<Checkbox size='small' />} label="高気密高電熱住宅" />
                <h5>バス・トイレ・洗面</h5>
                <FormControlLabel control={<Checkbox size='small' />} label="温水洗浄便座" />
                <FormControlLabel control={<Checkbox size='small' />} label="シャンプードレッサー" />
                <FormControlLabel control={<Checkbox size='small' />} label="浴室乾燥機" />
                <FormControlLabel control={<Checkbox size='small' />} label="追焚機能" />
                <FormControlLabel control={<Checkbox size='small' />} label="トイレ２箇所" />
                <h5>テレビ・通信</h5>
                <FormControlLabel control={<Checkbox size='small' />} label="CATV" />
                <FormControlLabel control={<Checkbox size='small' />} label="BS端子" />
                <FormControlLabel control={<Checkbox size='small' />} label="CS" />
                <h5>セキュリティ</h5>
                <FormControlLabel control={<Checkbox size='small' />} label="TVモニタ付インターホン" />
                <FormControlLabel control={<Checkbox size='small' />} label="防犯カメラ" />
                <FormControlLabel control={<Checkbox size='small' />} label="防犯セキュリティ" />
                <FormControlLabel control={<Checkbox size='small' />} label="自動火災報知器" />
                <FormControlLabel control={<Checkbox size='small' />} label="24時間セキュリティ" />
                <h5>収納</h5>
                <FormControlLabel control={<Checkbox size='small' />} label="ウォークインクローゼット" />
                <FormControlLabel control={<Checkbox size='small' />} label="床下収納" />
                <FormControlLabel control={<Checkbox size='small' />} label="納戸" />
                <h5>バルコニー</h5>
                <FormControlLabel control={<Checkbox size='small' />} label="南庭" />
                <FormControlLabel control={<Checkbox size='small' />} label="ウッドデッキ・テラス" />
                <FormControlLabel control={<Checkbox size='small' />} label="ルーフバルコニー" />
                <FormControlLabel control={<Checkbox size='small' />} label="南面バルコニー" />
                <h5>環境</h5>
                <FormControlLabel control={<Checkbox size='small' />} label="日当たり良好" />
                <FormControlLabel control={<Checkbox size='small' />} label="閑静住宅街" />
                <h5>建築及び維持保全に関する書類</h5>
                <FormControlLabel control={<Checkbox size='small' />} label="住宅性能評価書" />
                <FormControlLabel control={<Checkbox size='small' />} label="法適合状況調査報告書" />
                <FormControlLabel control={<Checkbox size='small' />} label="建築確認完了検査済証" />
                <FormControlLabel control={<Checkbox size='small' />} label="新築時・増改築時の設計図書" />
                <h5>住宅性能等</h5>
                <FormControlLabel control={<Checkbox size='small' />} label="長期優良住宅認定通知書" />
                <FormControlLabel control={<Checkbox size='small' />} label="低炭素住宅" />
                <FormControlLabel control={<Checkbox size='small' />} label="BELS/省エネ基準適合認定" />
                <FormControlLabel control={<Checkbox size='small' />} label="フラット３５・S適合証明書" />
                <FormControlLabel control={<Checkbox size='small' />} label="安心R住宅" />
                <h5>修繕記録等</h5>
                <FormControlLabel control={<Checkbox size='small' />} label="修繕・点検の記録" />
                <FormControlLabel control={<Checkbox size='small' />} label="5年以内に水回り設備交換" />
                <FormControlLabel control={<Checkbox size='small' />} label="5年以内に内装リフォーム" />
                <FormControlLabel control={<Checkbox size='small' />} label="5年以内にその他リフォーム" />
                <h5>空き家バンク</h5>
                <FormControlLabel control={<Checkbox size='small' />} label="空き家バンク登録物件" />
              </FormGroup>
            </div>
          </Accordion>
        </div>

        
      </Paper>
    </div>
  );
}



export default Sidebar;
