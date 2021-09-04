import * as React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';
import 'tailwindcss/tailwind.css';
import { FaBeer } from 'react-icons/fa';
import { DiAppcelerator } from 'react-icons/di';
import { buttonText, countArr } from './stateValues';

const InnerFun = ({ text }) => {
  return <div>--- {text} ---</div>;
};

export const App = () => {
  const [text, setText] = useRecoilState(buttonText);
  const [count, setCount] = useRecoilState(countArr);
  const [inputValue, setInputValue] = React.useState('');
  return (
    <div>
      <input
        value={inputValue}
        onChange={e => {
          const { value } = e.target;
          setInputValue(value);
        }}
      />
      <button
        onClick={() => {
          setText('Edited value');
          setCount(old => {
            return [...old, inputValue];
          });
        }}
      >
        Click To submit{' '}
      </button>
      <th>
        {count.map(str => (
          <div>
            <td>{str}</td>
            <br />
          </div>
        ))}
      </th>
      <InnerFun {...{ text: text }} />
      <FaBeer />
      <DiAppcelerator />
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
