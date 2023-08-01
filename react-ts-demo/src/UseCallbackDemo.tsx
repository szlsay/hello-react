import { FC, useCallback, useState } from "react";

const Demo: FC = () => {
  const [text, setText] = useState("st");
  const fn1 = () => {
    console.log("fn1-", text);
  };

  const fn2 = useCallback(() => {
    console.log("fn2-", text);
  }, [text]);
  return (
    <>
      <div>
        <button onClick={fn1}>fn1</button> &nbsp;{" "}
        <button onClick={fn2}>fn2</button>
      </div>
      <div>
        {/* form 组件，受控组件 */}
        <input onChange={(e) => setText(e.target.value)} value={text}></input>
      </div>
    </>
  );
};

export default Demo;
