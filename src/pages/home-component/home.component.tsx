import * as React from 'react';
import { styles } from './home.component.style';
import { View, Text, StatusBar, SafeAreaView } from 'react-native';
import { useHomeStore } from './home.component.store';
import HomePageComponent from "../home-page-component/home-page.component"
import ScrollableTabView, { ScrollableTabBar } from 'react-native-scrollable-tab-view';

export default function HomeComponent() {
  const { state, statusBarHeight } = useHomeStore();
  return <>
  {/* <StatusBar
    backgroundColor='#fb7b9e'
    translucent={true}
    hidden={true}
    barStyle={'light-content'}
    animated={true}
  />
    <ScrollableTabView
      initialPage={1}
      renderTabBar={() => <ScrollableTabBar
        style={{
          height: 38, width: '100%', borderWidth: 0.25
        }}
        tabStyle={styles.tabStyle}
      />}
      tabBarPosition="bottom"
      tabBarTextStyle={styles.tabTextStyle}
      tabBarUnderlineStyle={styles.tabBarUnderlineStyle} 
      tabBarActiveTextColor='#fb7b9e'
      tabBarInactiveTextColor='#666'
    >
      <HomePageComponent tabLabel='娱乐'></HomePageComponent>
      <HomePageComponent tabLabel='娱乐'></HomePageComponent>
      <HomePageComponent tabLabel='娱乐'></HomePageComponent>
      <HomePageComponent tabLabel='娱乐'></HomePageComponent>
    </ScrollableTabView> */}
  </>
}