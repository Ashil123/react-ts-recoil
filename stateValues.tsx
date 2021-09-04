import * as react from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState
} from 'recoil';

const buttonText = atom({
  key: 'buttonText',
  default: 'haha its just a default text'
});

const countArr = atom({
  key: 'countArr',
  default: []
});

const colorObj = atom({
  key: 'colorObj',
  default: {
    name: '',
    style: ''
  }
});

const charCountState = selector({
  key: 'buttonTextLength',
  get: ({ get }) => {
    const text = get(buttonText);
    console.log(text);
    return text.length;
  }
});

export { buttonText, charCountState, countArr, colorObj };
