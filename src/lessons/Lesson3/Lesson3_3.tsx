import { useRef, useState } from "react";

const Lesson3_3 = () => {
// const [inputText, setInputText] = useState("");
const inputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    // alert(inputText);
    alert(inputRef.current?.value);
  };

  return (
    <div>
      <input
      ref = {inputRef}
      type="text"
      // value={inputText}
      // onChange={(e)=>{setInputText(e.target.value)}}
      className="border-b" />
      <button onClick={handleClick}>input入力値を見る</button>
    </div>
  );
};

export default Lesson3_3;
