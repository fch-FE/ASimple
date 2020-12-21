import * as React from 'react';
import {style} from './icon-leaning-stop1.component.style';
import { useIconLeaningStop1Store } from './icon-leaning-stop1.component.store';
import { View, Image, TouchableHighlight, ScrollView, Text } from 'react-native';
const BannerHeight = 110;
export default function IconLeaningStop1Component({ navigation, route }) {
  const { state } = useIconLeaningStop1Store({ navigation, route });
  const {currentInfo} = state;
  const { title,  childIndex} = route.params;
  return <ScrollView >
    <View style={{flexWrap: "wrap", flexDirection: "row", width: "100%"}}>
      {currentInfo && currentInfo.map((item, index) => {
          return <TouchableHighlight
              underlayColor="#f3f3f3"
              key={item.signTp}
              onPress={() => {
                navigation.push("IconLeaningStop2", {
                  title,
                  index, 
                  childIndex
                })
              }}
              style={{width: "50%"}}>
                <View style={{alignItems: "center", borderWidth: 0.5,borderColor: "#ced4d9", paddingBottom: 10, paddingTop: 15}}>
                  <Image resizeMode="contain" style={{width:150, height: BannerHeight, marginBottom: 20 }} source={{ uri: item.signTp }} />
                  <Text>{item.signName}</Text>
                </View>
          </TouchableHighlight>
      })}
    </View>
  </ScrollView>
}
