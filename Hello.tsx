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
    <div>
      <h1>
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
