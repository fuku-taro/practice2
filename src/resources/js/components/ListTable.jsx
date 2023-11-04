import React from 'react';
import {
  styled, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, tableCellClasses,
} from '@mui/material';
import { PlusButton } from './PlusButton';
import { DeleteButton } from './DeleteButton';
import { AdminTableRow } from './/AdminTableRow';
import { AdminDialogFrame } from './AdminDialogFrame';
import { SuccessSnacbar } from './SuccessSnacbar';
import { IspAccountDeleteTemplate, IspAccountNoticeTemplate } from './adminDialogContext';
// import styles from '../../../sass/IspListTable.module.scss';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#8CD7E0',
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
}));

// テーブルヘッダーの両端を丸めるための値を返す処理
const returnRadius = (array, index) => {
  if (index === 0) return '10px 0 0 10px';
  if (index === array - 1) return '0 10px 10px 0';
  return 0;
};

export const ListTable = ({
  ispAccountList, isEdit, rows, handlePlusButton, handleDeleteButton,
  setRows, setIspAccountList, successEditName, handleSuccessEditName,
}) => {
  const minHeight = '20px'; // minHeightを定義

  let columns = [{ label: '物件番号' }, { label: '成約日' }, { label: '所在地' }, { label: '間取り' },
    { label: '築年月' }, { label: '価格' }];
  if (isEdit) { columns = [...columns, { label: '' }]; }

  return (
    <div>

      {ispAccountList ? (
        <Paper elevation={3} sx={{ width: '100%', overflow: 'hidden', borderRadius: '10px' }}>
          <TableContainer sx={{ display: 'flex', flexDirection: 'column' }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
                    <StyledTableCell
                      key={column.label}
                      sx={{ minWidth: '16px', textAlign: 'center', borderRadius: returnRadius(columns.length, index) }}
                    >
                      {column.label}
                    </StyledTableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {ispAccountList
                  .map((row, index) => (
                    !row.is_deleted ? (
                    // eslint-disable-next-line react/no-array-index-key
                      <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                        <AdminTableRow
                          row={row}
                          index={index}
                          isEdit={isEdit}
                          minHeight={minHeight}
                          setIspAccountList={setIspAccountList}
                        />

                        {/* 使用状況が「使用中」なら消せない旨のダイアログを表示する */}
                        {isEdit ? (
                          <TableCell sx={{ p: 0, textAlign: 'center' }}>
                            {!row.isp_status ? (
                              <AdminDialogFrame
                                btnComponent={<DeleteButton />}
                                dialogTitle={IspAccountDeleteTemplate.title}
                                dialogText={IspAccountDeleteTemplate.text}
                                agreeBtnText={IspAccountDeleteTemplate.button}
                                rowIndex={index}
                                clickEvent={handleDeleteButton}
                              />
                            ) : (
                              <AdminDialogFrame
                                btnComponent={<DeleteButton />}
                                dialogTitle={IspAccountNoticeTemplate.title}
                                dialogText={IspAccountNoticeTemplate.text}
                                agreeBtnText={IspAccountNoticeTemplate.button}
                                isCancelButton={false}
                              />
                            )}
                          </TableCell>

                        ) : null}
                      </TableRow>
                    ) : null
                  ))}
              </TableBody>

              {/* プラスボタンを押したら列を追加する */}
              {rows.map((row, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <TableBody key={index}>
                  <TableRow hover role="checkbox" tabIndex={-1}>
                    <AdminTableRow
                      row={row}
                      index={index}
                      isEdit={isEdit}
                      minHeight={minHeight}
                      setRows={setRows}
                    />
                    <TableCell sx={{ p: 0, textAlign: 'center' }}>
                      <DeleteButton onClick={handleDeleteButton} />
                    </TableCell>
                  </TableRow>
                </TableBody>
              ))}

            </Table>

            {/* 編集モードならプラスボタンを表示する */}
            {isEdit ? (
              <div className={styles.plusButton}>
                <PlusButton clickEvent={handlePlusButton} />
              </div>
            ) : null}

            <SuccessSnacbar open={successEditName} onClose={handleSuccessEditName}>
              正常に変更されました
            </SuccessSnacbar>
          </TableContainer>
        </Paper>
      ) : (
        <Paper elevation={3} sx={{ width: '100%', overflow: 'hidden', borderRadius: '10px' }}>
          <TableContainer
            sx={{
              height: 'calc(100vh - 90px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            ISP保有アカウントが見つかりません
          </TableContainer>
        </Paper>
      )}
    </div>
  );
};
