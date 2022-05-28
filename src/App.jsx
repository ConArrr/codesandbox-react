import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // stateを変更するので、無限再レンダリングでNG
  // if (num % 3 === 0) {
  //   setFaceShowFlag(true);
  // } else {
  //   setFaceShowFlag(false);
  // }

  // 第二引数：[] -> 最初の一回だけ
  // 第二引数:[任意のstate] -> そのstateが変わったときにのみ動く
  // -> on/offでは下の処理を通らないため、純粋なon/offが可能になる(numの制約を受けない)
  useEffect(() => {
    if (num > 0 && num % 3 === 0) {
      faceShowFlag || setFaceShowFlag(true);
    } else {
      faceShowFlag && setFaceShowFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* <ColorfulMessage color="blue" message="お元気ですか？" /> */}
      {/* <ColorfulMessage color="pink" message="元気です！" /> */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <p>{num}</p>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>( ´∀｀)</p>}
    </>
  );
};

export default App;
