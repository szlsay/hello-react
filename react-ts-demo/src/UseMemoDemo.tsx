import { FC, useMemo, useState } from "react";

const Demo: FC = () => {
  const [num1, setNum1] = useState(10);
  const [num2, setNum2] = useState(10);
  const [text, setText] = useState('hello') // 更新，导致组件 rerender
  const sum = (a: number, b: number) => {
    console.log('sum')
    return a + b;
  };
  const sumMemo = useMemo(() => {
    console.log('sumMemo')
    return num1 + num2
  }, [num1, num2])
  return (
    <>
      <p>{sum(num1, num2)}</p>
      <p>{sumMemo}</p>
      <p>
        {num1} <button onClick={() => setNum1(num1 + 1)}>add num1</button>
      </p>
      <p>
        {num2} <button onClick={() => setNum2(num2 + 1)}>add num2</button>
      </p>
      <div>
        {/* form 组件，受控组件 */}
        <input onChange={e => setText(e.target.value)} value={text}></input>
      </div>
    </>
  );
};

export default Demo;
