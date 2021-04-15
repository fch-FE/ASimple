import * as React from 'react';
import { useRadioGroupStore } from './radio-group.component.store';
import { IRadioGroupProps, ACTION_TYPE } from './radio-group.interface'
import styles from './radio-group.component.style'
import { View, Text, TouchableOpacity } from 'react-native';
import RadioComponent from '../radio-component/radio.component';
export default function RadioGroupComponent(props: IRadioGroupProps) {
  
  const { state, chooseSelect } = useRadioGroupStore(props);
  const selection = JSON.parse(props.selection);
  const {currentSelect} = state;
  return <View style={{marginTop: 10}}>
    {selection.map((item, index) => {
       return <RadioComponent key={item} rightAnswer={props.answer} chooseSelect={chooseSelect} currentSelect={currentSelect} selectContent={item}></RadioComponent>
    })}
  </View>
}
