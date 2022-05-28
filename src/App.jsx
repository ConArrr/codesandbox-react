import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => console.log("test");

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      {/* <ColorfulMessage color="blue" message="お元気ですか？" /> */}
      {/* <ColorfulMessage color="pink" message="元気です！" /> */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
