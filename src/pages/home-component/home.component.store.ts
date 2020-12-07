import { IHomeState } from './home.interface';
import { useStateStore } from '../../framework/use-base-store';
import { useNavigation } from '@react-navigation/native';
import {
	Platform,
    NativeModules,
    StatusBar,
	Alert
} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import { useEffect } from 'react';
const { StatusBarManager } = NativeModules;
export function useHomeStore() {
	const { state, setStateWrap } = useStateStore(new IHomeState());
	const navigation: any = useNavigation();
	useEffect(() => {
		// 判断当前用户是否选择了城市
		getCurrentInfo();
	}, [])

	async function getCurrentInfo() {
        try{
            //读
			const value = await AsyncStorage.getItem('location');
			console.log("value", value);
			if(!value) {
				navigation.replace("ChooseCity");
			} else {
				// 设置当前的地址
			}
        } catch(e) {
            Alert.alert('读取失败');
        }
	}

	// 初始化首页
	function init() {
		
	}

    let statusBarHeight;
	if (Platform.OS === "ios") {
	     StatusBarManager.getHeight((height: string) => {
	         statusBarHeight = height;
	     });
	 } else {
	     statusBarHeight = StatusBar.currentHeight;
    }
    return { state, statusBarHeight };
};