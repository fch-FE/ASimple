import { IRadioGroupProps, RadioGroupPageState,  } from './radio-group.interface';
import { useStateStore } from '../../use-base-store';
import React, { useContext, useEffect, useCallback, useRef } from 'react';
import { Text} from 'react-native'

export function useRadioGroupStore(props: IRadioGroupProps) {
    const { state, setStateWrap } = useStateStore(new RadioGroupPageState());
    function chooseSelect(selectContent: string) {
        if(state.currentSelect) return;
        setStateWrap({currentSelect: selectContent})
        props.getUserChoose(selectContent)
    }
    return { state, chooseSelect }
}