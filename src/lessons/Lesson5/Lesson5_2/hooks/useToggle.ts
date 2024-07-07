import { useState } from "react";

export const useToggle = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);

  const toggle = ()=>{
    console.log('render');
    setState((state) => !state);
  };

  return [state, toggle];
};
