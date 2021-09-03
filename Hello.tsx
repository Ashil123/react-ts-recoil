import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import { textState } from './index.tsx';
export default ({ name }) => {
  
  const selecterValue = useRecoilValue(textState);
  console.log(selecterValue);
return (<h1>Hello {name}!</h1>);
}
