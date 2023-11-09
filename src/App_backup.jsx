import { useState } from 'react';
import { ColorMessage } from './components/ColordMessage';
import { StyledComponents } from './components/StyledComponents';

export const App = () => {
  const [num, setNum] = useState(0);

  const onclickButton = () => {
    setNum((prev) => prev + 1);
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>안녕하세요!</h1>
      <ColorMessage color="blue">잘 지내시죠?</ColorMessage>
      <ColorMessage color="pink">잘 지냅니다!</ColorMessage>
      <button onClick={onclickButton}>버튼</button>
      <p>{num}</p>
      <StyledComponents></StyledComponents>
      <h2 className="text-blue-500 text-xl font-bold">Hello, React!</h2>
      <p className="text-lg font-medium">Hello, Typescript!</p>
    </>
  );
};
