import * as React from 'react';
import {style} from './choose-city.component.style';
import { useChooseCityStore } from './choose-city.component.store';
import { ScrollView, Text, View } from 'react-native';
import { CheckBox, ListItem, Header } from 'react-native-elements';
import { ProvinceArray } from './choose-city.interface';

export default function ChooseCityComponent() {
  const { state, checkedCity } = useChooseCityStore();
  const { currentCheckedName } = state;
  console.log(currentCheckedName);
  
  return <View>
    <ScrollView>
  {
    ProvinceArray.map((l, i) => (
      <ListItem key={l.ProID} bottomDivider onPress={() => {checkedCity(l)}}>
        <ListItem.CheckBox
          onPress={() => {checkedCity(l)}}
          center
          checkedIcon='dot-circle-o'
          uncheckedIcon='circle-o'
          checked={currentCheckedName && (currentCheckedName.name == l.name)}
        />

        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    ))
  }
</ScrollView>
  </View>

}
