import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeComponent from './pages/home-component/home.component';
import ChooseCityComponent from './pages/choose-city-component/choose-city.component';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SpecialTopicComponent from './pages/special-topic-component/special-topic.component';
import MineComponent from './pages/mine-component/mine.component';
import IconLeaningComponent from './pages/icon-leaning-component/icon-leaning.component';
import IconLeaningStop2Component from './pages/icon-leaning-component/icon-leaning-stop2-component/icon-leaning-stop2.component';
import IconLeaningStop1Component from './pages/icon-leaning-component/icon-leaning-stop1-component/icon-leaning-stop1.component';
import IconLeaningStep0Component from './pages/icon-leaning-component/icon-leaning-step0-component/icon-leaning-step0.component';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-home'
            : 'ios-home-outline';
        } else if (route.name === 'focusT') {
          iconName = focused ? 'ios-book' : 'ios-book-outline';
        } else if (route.name === 'mine') {
          iconName = focused ? 'ios-person' : 'ios-person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      labelStyle: {
        fontSize: 12
      },
      iconStyle: {
        fontSize: 14
      },
      activeTintColor: '#1890ff',
      inactiveTintColor: 'gray',
    }}>
      <Tab.Screen name="Home" component={HomeComponent} options={{title: "首页"}}/>
      <Tab.Screen name="focusT" component={SpecialTopicComponent} options={{title: "专题"}}/>
      <Tab.Screen name="mine" component={MineComponent} options={{title: "我的"}}/>
    </Tab.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Stack.Screen name="ChooseCity" component={ChooseCityComponent} options={{ title: '选择城市', headerBackTitle: " "}}/>
        <Stack.Screen name="IconLearning" component={IconLeaningComponent} options={{ title: '图标学习', headerBackTitle: " "} }/>
        <Stack.Screen name="IconLeaningStop2" component={IconLeaningStop2Component} options={({route}) => ({ title: (route.params as any).title, headerBackTitle: " "}) }/>
        <Stack.Screen name="IconLeaningStop1" component={IconLeaningStop1Component} options={({route}) => ({ title: (route.params as any).title, headerBackTitle: " "}) }/>
        <Stack.Screen name="IconLeaningStop0" component={IconLeaningStep0Component} options={({route}) => ({ title: (route.params as any).title, headerBackTitle: " "}) }/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;