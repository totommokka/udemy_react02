import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("さいしょ");

  // State
  const [num, setNum] = useState(10);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  // ボタン押下時のアクション
  const onClickCountup = () => {
    setNum(num + 1);
  };

  const onClickFaceShow = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEffect
  // 関心の分離？
  // 第2引数で指定した変数がかわったときだけ実行される。
  // 教材の方だと、numの変更検知して、showFaceFlagも変更しているので、ぐちゃぐちゃに。
  useEffect(() => {
    console.log("useEffect!");
  }, [num]);

  // スタイル定義
  // cssでは"font-size"だが、reactではキャメルケース記法なので、fontSizeにする。
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px"
  // };

  return (
    <>
      {/* h1タグに直接スタイル定義。reactのオブジェクトを設定するのでカッコ２つ。 */}
      <h1 style={{ color: "red" }}>こんにちは</h1>
      {/* pタグには、定数化したstyleを設定する。 */}
      {/* <p style={contentStyle}>寒いですね</p> */}
      <ColorfulMessage color="black" message="Hello" />
      <ColorfulMessage color="pink" message="World!" />
      <ColorfulMessage color="blue">Hello World.</ColorfulMessage>
      <ColorfulMessage color="pink">React</ColorfulMessage>
      <button onClick={onClickCountup}>カウントアップ</button>
      <button onClick={onClickFaceShow}> on/off </button>
      <p>{num}</p>
      {/* &&演算子は、左側がtrueだったら、右側返される */}
      {faceShowFlag && num % 3 === 0 && <p>＼(^o^)／</p>}
    </>
  );
};

// このファイル外でも参照できるように、exportする。defaultの意味は不明。
export default App;
