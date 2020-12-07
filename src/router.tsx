import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeComponent from './pages/home-component/home.component';
import ChooseCityComponent from './pages/choose-city-component/choose-city.component';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeComponent} options={{ title: '首页' }}/>
        <Stack.Screen name="ChooseCity" component={ChooseCityComponent} options={{ title: '选择城市' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;