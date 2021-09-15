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
    <div className="min-h-screen bg-gray-500 py-6 flex flex-col p-4 justify-center sm:py-12">
      <div className="p-2 m-2 bg-red-200 rounded">
        <input className="appearance-none border rounded py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
          value={inputValue}
          onChange={e => {
            const { value } = e.target;
            setInputValue(value);
          }}
        />
        <button className="bg-blue-500  font-semibold rounded p-1 m-2 hover:bg-blue-700 text-white border border-white"
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
            <div className="bg-white">
              <td className="p-1">{str}</td>
              <br />
            </div>
          ))}
        </th>
        <InnerFun {...{ text: text }} />
        <div className="items-center border-b border-teal-500 py-1" >
          <FaBeer />
        </div>
        <DiAppcelerator />
        <Hello />
      </div>
    </div>
  );
};

render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  document.getElementById('root')
);
