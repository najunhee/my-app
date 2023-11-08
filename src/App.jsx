import { ColorMessage } from './components/ColordMessage';

export const App = () => {
  const onclickButton = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: 'red' }}>안녕하세요!</h1>
      <ColorMessage color="blue">잘 지내시죠?</ColorMessage>
      <ColorMessage color="pink">잘 지냅니다!</ColorMessage>
      <button onClick={onclickButton}>버튼</button>
    </>
  );
};
