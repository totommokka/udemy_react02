import React, { useState } from "react";

// こっちはラムダ式
const ColorfulMessage = (props) => {
  //コンポーネント呼び出し側から設定するprops
  // console.log(props);

  // propsを毎回記述するのは面倒なので、分割代入
  const { color, children } = props;

  // こっちはラムダ式ではない。
  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  // return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{children}</p>;
};

export default ColorfulMessage;
