import * as React from 'react';
import {styles} from './do-exam.component.style';
import { useDoExamStore } from './do-exam.component.store';
import { IDoExamProps, TYPE_ARRAY } from './do-exam.interface';
import { View, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';
import RadioGroupComponent from '../radio-group-component/radio-group.component';

export default function DoExamComponent(props: IDoExamProps) {
  const { state, getUserChoose } = useDoExamStore();
  const {type, desc, answer} = props;
  const {currentUserChoose} = state;
  
  function _header() {
    return <View style={styles.mainContent}>
      <View style={styles.header}>
        <Text style={styles.textDesc}>
          <Text>        </Text>
          <Text style={styles.textDescText}>{desc}</Text>
        </Text>
      </View>
      <RadioGroupComponent {...props} getUserChoose={getUserChoose}></RadioGroupComponent>
      {!!currentUserChoose && _middle_content()}
    </View>
  }

  function _middle_content() {
    return <View style={styles.middlesContent}>
        <View style={{flexDirection: "row"}}>
          <Text>答案:  </Text>
          <Text style={{color: "#1890ff", marginRight: 10}}>{answer}</Text>
          <Text>您选择:  </Text>
          <Text style={{color: "#1890ff"}}>{currentUserChoose.slice(0, 1)}</Text>
        </View>
        <View>
        <Text style={{color: "#1890ff"}}>速记秘籍</Text>
        </View>
    </View>
  }

  function _footer() {
    return <View>
      
    </View>
  }
  return <View>
    {_header()}
  
    {_footer()}
  </View>;
}
