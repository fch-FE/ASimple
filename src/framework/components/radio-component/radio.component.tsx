import * as React from 'react';
import { useRadioStore } from './radio.component.store';
import { IRadioProps, RADIO_TYPE } from './radio.interface'
import styles from './radio.component.style'
import { View, Text, TouchableOpacity, Image, TouchableHighlight, Alert } from 'react-native';

export default function RadioComponent(props: IRadioProps) {
  
  const { state } = useRadioStore();
  const {currentSelect, rightAnswer, chooseSelect, selectContent} = props;
  console.log();
  
  return <TouchableHighlight activeOpacity={0.9}
  underlayColor="#e6f7ff"
  onPress={() => {chooseSelect(selectContent)}}>
      <View style={styles.btn}>
          <Image style={styles.img} source={( currentSelect == selectContent || (currentSelect && !selectContent.indexOf(rightAnswer)) ? (!selectContent.indexOf(rightAnswer) ? RADIO_TYPE.RIGHTCHECK : RADIO_TYPE.ERRORCHECK) :RADIO_TYPE.NOTCHECK)}/>
          <Text style={styles.text}>{props.selectContent}</Text>
      </View>
    </TouchableHighlight>
}
