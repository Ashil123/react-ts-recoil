import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import './style.css';

const InnerFun = ({ text }) => {
  return <div>{text}</div>;
};

export const textState = atom({
  key: 'key1',
  default: 'haha its a default text'
});

export const App = () => {
  const [text, setText] = useRecoilState(textState);
  // console.log('---textState', text, textState);

  const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
      const text = get(textState);
      console.log(text);
      return text.length;
    },
    set: ({set}) => set(textState, 'asd'),
  });
  const todoListState = atom({
    key: 'todoListState',
    default: [],
  });
  const selecterValue = useRecoilValue(charCountState);

  const todoList = useRecoilValue(todoListState);
  console.log('toDo list', todoList);

  const setValue = useSetRecoilState(todoListState);

  return (
    <div>
      <button
        onClick={() => {
          setText('Edited value');
          setValue((old) => [...old,{
            a: 'nameee',
            new: 'idx'
          }])
        }}
      >
        BTN CLICK{' '}
      </button>
      <InnerFun {...{ text: text}}/>
      <Hello />
    </div>
  );
};

render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);
