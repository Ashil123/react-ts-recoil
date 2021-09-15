import * as React from 'react';
import {
  useRecoilValue,
  useRecoilState,
} from 'recoil';
import { buttonText, countArr } from './stateValues';

export default () => {
  const [selecterValue, setSelector] = useRecoilState(buttonText);
  const countValue = useRecoilValue(countArr);
  return (
    <div className="p-1 m-2 items-center border rounded border-green-500 py-1">
      <h1 className="text-black semibold hover">
        COMPONENT {selecterValue}!
      </h1>
      <button
        onClick={() => {
          setSelector('Edited from HEllo');
        }}
      >
        HELLO CLASS BUTTON
      </button>
    </div>
  );
}
