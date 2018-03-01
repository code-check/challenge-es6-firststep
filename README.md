# ECMAScript 2015(ES6) Challenge

## まずはじめに

この問題のゴールは、簡単な実装をECMAScript 2015(ES6)を用いて実装することで、ES6の理解を深める事です。

実装する機能の詳細スペックは既に'api-first-spec'を用いて定義されています。（testフォルダ内をご確認ください）  
正しく問題を回答するため、それぞれの問題のSpecを読みながら回答してみてください。  
例えば、Step1の詳細は、[es6/test/hello.spec.js](es6/test/hello.spec.js)に記載されています。  

- 悩んだことやメモ
- 回答した内容がどのように動くか、どのような実装をしたか
- 工夫したところやSpecの改善提案
等、表現したいことがございましたら、[Comments.md](Comments.md)にご自由にお書きください。

## Step1. Hello worldを実装してみましょう

[hello.js](es6/src/hello.js)を編集して、HelloWorldを実装してください。  
[test](es6/test/hello.spec.js)を読んで、正しく仕様を満たすものを実装してください。

## Step2. クラスを実装してみましょう

[person.js](es6/src/person.js)を編集して、HelloWorldを実装してください。  
[test](es6/test/person.spec.js)を読んで、正しく仕様を満たすものを実装してください。

## Step3. クラスの継承を実装してみましょう

Polygonはある多角形の面積を計算してくれるシンプルなクラスです。
また、以下のサブクラスをもっています。  

- Rectangle
- Square
- Circle

現在、SquareとCircleクラスは実装されていません。  
継承を活用して、[polygon.js](es6/src/polygon.js)を完成させてください。  
[test](es6/test/polygon.spec.js)を読んで、正しく仕様を満たすものを実装してください。

### それぞれの詳細の仕様
それぞれのクラスは以下の仕様を満たします。

Square
- 横幅を表すコンストラクターの値は1です。

Circle
- 円の半径を表すコンストラクターの値は1です。
- 円の高さ(height)は半径*2です。
- 円の長さ(width)は半径*2です。


## Step4. Promise(非同期処理)を利用しよう
Promiseとは、非同期処理を抽象化したオブジェクトとそれを操作する仕組みのことです。  
複雑な非同期処理等をうまくパターン化できるというのがPromiseの役割です。

Promiseを活用した[promise.js](es6/src/promise.js)を完成させてください。  
[test](es6/test/promise.spec.js)を読んで、正しく仕様を満たすものを実装してください。

### 詳細の仕様
- sleep functionは特定の時間の値をもったPromiseを返します。  
- sleep functionは時間を特定すると非同期で終了します。
- もし、特定された時間が0よりも少ない場合、Promiseはリジェクトされます。
- sleep function内ではsetTimeを活用することが出来ます。

## Step5. Caesar cipher(シーザー暗号)を利用しよう
[Caesar cipher(シーザー暗号)](https://ja.wikipedia.org/wiki/%E3%82%B7%E3%83%BC%E3%82%B6%E3%83%BC%E6%9A%97%E5%8F%B7)とは、単一換字式暗号の一種で、平文の各文字を辞書順に3文字だけシフトして暗号文をつくる暗号アルゴリズムです。  

Caesar cipherを活用した[cipher.js](es6/src/cipher.js)を完成させてください。  
[test](es6/test/cipher.spec.js)を読んで、正しく仕様を満たすものを実装してください。

### 詳細の仕様
- 利用できる文字列は"abcdefghijklmnopqrstuvwxyz"です。
- もし、利用できない文字列が入力された場合、その文字列は変換されずにそのままの値で結果の文字列に返されます。

### 制約条件
- for文は利用出来ません。
- もしfor文を利用した場合は、テストは通過できません。

### Step6. 大文字に対応させてみよう(応用問題)
Step5で実装してきたものを大文字に対応させてみましょう。  
それぞれの文字は小文字と同様とみなされて変換されます。  
[test](es6/test/cipher_extra.spec.js)を読んで、正しく仕様を満たすものを実装してください。
