import { useRef, useState } from "react";

const Lesson3_3 = () => {
// const [inputText, setInputText] = useState("");
//useRefの時の型は？
// const inputRef = useRef<>(null);
  const handleClick = () => {
    // alert(inputText);
    // alert(inputRef.current?.value);
  };
//useStateを使う場合
//useRefを使う場合
  return (
    <div>
      <input
      ref = {inputRef}
      type="text"
//ここに記入
      className="border-b" />
      <button onClick={handleClick}>input入力値を見る</button>
    </div>
  );
};

export default Lesson3_3;
