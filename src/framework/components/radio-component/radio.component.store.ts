import { RadioPageState,  } from './radio.interface';
import React, { useContext, useEffect, useCallback, useRef } from 'react';
import { useStateStore } from '../../use-base-store';

export function useRadioStore() {
    const { state, setStateWrap } = useStateStore(new RadioPageState());
      
    return { state }
}