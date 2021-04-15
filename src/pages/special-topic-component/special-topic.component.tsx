import * as React from 'react';
import {styles} from './special-topic.component.style';
import { useSpecialTopicStore } from './special-topic.component.store';
import { View, Text, Image } from 'react-native';
import { Badge, Header } from 'react-native-elements';

export default function SpecialTopicComponent() {
  const { state } = useSpecialTopicStore();
  const {location} = state;
  return <View style={{backgroundColor: "white", height: "100%"}}>
    <Header
      centerComponent={{ text: `${location}科目一专题练习`, style: { color: '#fff' } }}
    />
    <View style={[styles.specialTopicMain, {marginTop: 20}]}>
      <Text style={styles.specialTopicText}>试题类型</Text>
      <View style={styles.specialTopicCard}>
        <View style={[styles.specialTopicCardItem, {marginRight: "10%"}]}>
          <Badge value="1" status="error" textStyle={{fontSize: 12}} />
          <Text style={styles.specialTopicCardItemText}>判断题</Text>
        </View>
        <View style={styles.specialTopicCardItem}>
        <Badge value="2" status="error"  textStyle={{fontSize: 12}} />
          <Text style={styles.specialTopicCardItemText}>单选题</Text>
        </View>
      </View>
    </View>
    <View style={styles.specialTopicMain}>
      <Text style={styles.specialTopicText}>已做/未做</Text>
      <View style={styles.specialTopicCard}>
        <View style={[styles.specialTopicCardItem, {marginRight: "10%"}]}>
          <Badge value="1" status="error"  textStyle={{fontSize: 12}} />
          <Text style={styles.specialTopicCardItemText}>已做题</Text>
        </View>
        <View style={styles.specialTopicCardItem}>
        <Badge value="2" status="error"  textStyle={{fontSize: 12}} />
          <Text style={styles.specialTopicCardItemText}>未作题</Text>
        </View>
      </View>
    </View>
    <View style={styles.specialTopicMain}>
      <Text style={styles.specialTopicText}>难易程度</Text>
      <View style={styles.specialTopicCard}>
        <View style={[styles.specialTopicCardItem, {marginRight: "10%"}]}>
          <Badge value="1" status="error"  textStyle={{fontSize: 12}} />
          <Text style={styles.specialTopicCardItemText}>简单题</Text>
        </View>
        <View style={styles.specialTopicCardItem}>
        <Badge value="2" status="error"  textStyle={{fontSize: 12}} />
          <Text style={styles.specialTopicCardItemText}>容易题</Text>
        </View>
        <View style={styles.specialTopicCardItem}>
        <Badge value="3" status="error"  textStyle={{fontSize: 12}} />
          <Text style={styles.specialTopicCardItemText}>一般题</Text>
        </View>
      </View>
    </View>
    <View style={styles.specialTopicMain}>
      <Text style={styles.specialTopicText}>路考视频</Text>
      <View  style={styles.specialTopicCard}>
        <View style={[styles.specialTopicCardVedio,  {marginRight: "10%"}]}>
          <Text>两轮视频</Text>
          <Image style={styles.specialTopicCardVedioImage} resizeMode="contain" source={require("../../asserts/mtc_icon.png")}></Image>
        </View>
        <View style={styles.specialTopicCardVedio}>
          <Text>三轮视频</Text>
          <Image style={styles.specialTopicCardVedioImage} resizeMode="contain"  source={require("../../asserts/sanlunche_icon.png")}></Image>
        </View>
      </View>
    </View>
  </View>
}
