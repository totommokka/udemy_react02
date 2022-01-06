// こっちはラムダ式
export const ColorfulMessage = (props) => {
  //コンポーネント呼び出し側から設定するprops
  // console.log(props);

  // propsを毎回記述するのは面倒なので、分割代入
  const { color, children } = props;

  // スタイル定義
  // cssでは"font-size"だが、reactではキャメルケース記法なので、fontSizeにする。
  // const contentStyle = {
  //   color: "blue",
  //   fontSize: "18px"
  // };

  const contentStyle = {
    color: color,
    fontSize: "18px"
  };

  // return <p style={contentStyle}>{props.message}</p>;
  return <p style={contentStyle}>{children}</p>;
};
