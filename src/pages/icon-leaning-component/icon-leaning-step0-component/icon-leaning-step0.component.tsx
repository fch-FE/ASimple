import * as React from 'react';
import {style} from './icon-leaning-step0.component.style';
import { useIconLeaningStep0Store } from './icon-leaning-step0.component.store';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';

export default function IconLeaningStep0Component({ navigation, route }) {
  const { state, onIconClick } = useIconLeaningStep0Store({ navigation, route });

  const {currentInfo} = state;
  return <ScrollView style={{padding: 30}}>
  {currentInfo.map((item, index) => {
    return <View key={item.signTitle} style={style.IconLearningField}>
      <Text style={{fontSize: 18, paddingBottom: 30}}>{item.signTitle}</Text>
      <View style={style.imageField}>
        {item.signTps.map((itemChild) => {
          return <Avatar
          rounded
          onPress={() => onIconClick(item, index)}
          size="medium"
          source={{
            uri:itemChild
          }}
        />
        })}
       
      </View>
    </View>
  })}
  
</ScrollView>;
}
