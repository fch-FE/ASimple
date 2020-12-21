import * as React from 'react';
import {styles} from './mine.component.style';
import { useMineStore } from './mine.component.store';
import { View, Text, Image } from 'react-native';
import { Avatar, Header, Icon, ListItem } from 'react-native-elements';
import { list } from './mine.interface';

export default function MineComponent() {
  const { state, onSettingClick } = useMineStore();

  function _renderHeader() {
    return <Header
        centerComponent={{ text: `我的`, style: { color: '#fff' } }}
        rightComponent={<Icon name='setting' type="antdesign" size={18} onPress={onSettingClick} color="white" />}
    />
  }

  function _renderMineHeader() {
    return <View style={styles.headerLoginContent}>
      <Avatar
        rounded
        size="large"
        activeOpacity={0.7}
        source={{
          uri:
            'http://t11.baidu.com/it/u=474605492,1527225837&fm=58&app=87&f=JPEG?w=128&h=128'
        }}
      />
      <View style={styles.headerLoginContentDes}>
        <Text style={{fontSize: 16}}>立即登录</Text>
        <Text style={{fontSize: 14}}>注册登录，获取VIP题库</Text>
      </View>
    </View> 
  }

  function _renderMainFunction() {
    return <View style={styles.mainContentLeftMain}>
      <View style={styles.mainContentLeftIcon}>
          <Image style={styles.mainContentLeftImage} source={require("../../asserts/home_me_error.png")}></Image>
          <Text style={styles.mainContentLeftText} >错题集</Text>
      </View>
      <View style={styles.mainContentLeftIcon}>
          <Image style={styles.mainContentLeftImage} source={require("../../asserts/home_me_shouchangjia.png")}></Image>
          <Text style={styles.mainContentLeftText} >收藏夹</Text>
      </View>
      <View style={styles.mainContentLeftIcon}>
          <Image style={styles.mainContentLeftImage} source={require("../../asserts/home_me_share.png")}></Image>
          <Text style={styles.mainContentLeftText} >分享给好友</Text>
      </View>
    </View>
  }

  function getAllFunction() {
    return <View>
      {
        list.map((item, i) => (
          <ListItem key={i} bottomDivider>
            <Icon name={item.icon} type="antdesign" />
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        ))
      }
    </View>
  }

  return <View>
     {_renderHeader()}
     <View style={styles.minContent}>
     {_renderMineHeader()}
     {_renderMainFunction()}
     <View style={{height: 10, backgroundColor: "#eef0f2", marginBottom: 10}}></View>
     {getAllFunction()}
     </View>
   
  </View>;
}
