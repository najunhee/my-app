import { useState, memo } from 'react';
import { Child1 } from './components/Child1';
import { Child4 } from './components/Child4';

export const App = memo(() => {
  console.log('App 랜더링');

  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum((prog) => prog + 1);
  };

  return (
    <>
      <button onClick={onClickButton}>버튼</button>
      <p>{num}</p>
      <Child1 />
      <Child4 />
    </>
  );
});
