<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ImportPostalCodeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:postal-code';//コマンド実行名

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Import postal-code';//コマンドの説明内容

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        try {
        // return Command::SUCCESS;

        // 登録処理の前にテーブルを一旦、空にする
        \App\Models\PostalCode::truncate();

        // DBトランザクション開始
        DB::beginTransaction();

        // CSVファイルの文字コード変換
        //先程ダウンロードしたCSVファイルのパスを書く
        $csv_path = storage_path('app/csv/40fukuok.csv');
        //CSVファイルの文字コードをSJIS-winからUTF-8に変換した後のファイル名を指定
        $converted_csv_path = storage_path('app/csv/postal_code_utf8.csv');
        file_put_contents(
            $converted_csv_path,
            mb_convert_encoding(
                file_get_contents($csv_path),
                'UTF-8',
                'SJIS-win'
            )
        );

        // 文字コードを変換したCSVファイルから郵便データを取得してDBへ保存
        $file = new \SplFileObject($converted_csv_path);
        $file->setFlags(\SplFileObject::READ_CSV);

        $skipFirst = true;
        foreach ($file as $row) {
            if ($skipFirst) {
                $skipFirst = false;
                continue; // 1回目の処理をスキップ
            }
            //空行の場合、登録処理の際にエラーが発生することがあるので条件分岐させる
            if (!is_null($row[0])) { 
                if($row[5] == 1){
                    continue;
                }
                // 与えられた文字列からハイフンを取り除く
                $postal_code = str_replace('-', '', $row[4]);
                \App\Models\PostalCode::create([
                    'code' => $row[4],
                    'first_code' => intval(substr($postal_code, 0, 3)),
                    'last_code' => substr($postal_code, -4),
                    'ken' => $row[7],
                    'ken_furi' => $row[8],
                    'city' => $row[9],
                    'city_furi' => $row[10],
                    'town' => $row[11],
                    'town_furi' => $row[12],
                    'azachoume' => $row[15],
                    'azachoume_furi' => $row[16],
                    // 'address' => (str_contains($row[8], '（')) ? current(explode('（', $row[8])) : $row[8]
                ]);
            }
        }

        // トランザクションコミット
        DB::commit();

    } catch (\Exception $e) {
        // トランザクションロールバック（エラー時に元の状態に戻す）
        DB::rollBack();
        // エラー処理
        // 例：ログ出力やエラーメールの送信などを行う
        Log::error('Error occurred during data import: ' . $e->getMessage());
    }

    }
}
