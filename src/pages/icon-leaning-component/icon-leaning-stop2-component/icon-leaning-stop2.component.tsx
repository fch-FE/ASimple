import * as React from 'react';
import { style } from './icon-leaning-stop2.component.style';
import { useIconLeaningStop2Store } from './icon-leaning-stop2.component.store';
import { View, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native-gesture-handler';

export default function IconLeaningStop2Component({ navigation, route }) {
  const { state } = useIconLeaningStop2Store({ navigation, route });
  const { currentInfo, index } = state;

  const renderPagination = (index, total) => {
    return (
      <View style={style.paginationStyle}>
        <Text style={{ color: 'grey', fontSize: 20, paddingTop: 10 }}>
          <Text style={style.paginationText}>{index + 1}</Text>/{total}
        </Text>
      </View>
    )
  }

  return <View style={{height: "100%"}}>
      <Swiper renderPagination={renderPagination} index={index} loadMinimalSize={1}>
        {currentInfo.map((item: any) => {
          return <View key={item.signName}  style={{alignItems: "center", margin: 20, backgroundColor: "white", height: "60%", padding: 15,borderRadius: 10}}>
            <Image resizeMode="contain" style={{ width: 150, height: 200 }} source={{ uri: item.signTp }} />
            <Text style={{fontSize: 18, fontWeight: "500", paddingBottom: 20}}>{item.signName}</Text>
            <Text  style={{fontSize: 16, paddingBottom: 20}}>{item.signDesc}</Text>
          </View>
        })}
      </Swiper>
  </View>
}
