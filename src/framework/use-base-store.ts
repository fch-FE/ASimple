import React, { useState } from 'react';
type Partial<T> = {
  [P in keyof T]?: T[P];
};
export function useStateStore<T>(initialState?: T) {
  const [state, setState] = useState(initialState);
  let newState: any = state;
  const setStateWrap = (value: Partial<T>, callback?: Function) => {
    setState(state => {
      newState = { ...state, ...value };
      callback && callback(newState);
      return newState;
    });
    return newState;
  };

  const getState = () => newState;

  return {
    state,
    setStateWrap,
    getState
  };
}