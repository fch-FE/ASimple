import * as React from 'react';
import { style } from './icon-leaning.component.style';
import { useIconLeaningStore } from './icon-leaning.component.store';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { IconLearning } from './icon-leaning.interface';

export default function IconLeaningComponent() {
  const { state, onIconClick } = useIconLeaningStore();
  return <View style={{ padding: 30 }}>
    {IconLearning.map((item) => {
      return <View key={item.signTitle} style={style.IconLearningField}>
        <Text style={{ fontSize: 18, paddingBottom: 30 }}>{item.signTitle}</Text>
        <View style={style.imageField}>
          {item.signTps.map((itemChild) => {
            return <Avatar
              rounded
              onPress={() => onIconClick(item)}
              size="medium"
              source={{
                uri: itemChild
              }}
            />
          })}

        </View>
      </View>
    })}

  </View>
}
