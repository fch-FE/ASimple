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
		getLiveDetail();
	}, [])

	const getLiveDetail = () => {
        fetch('https://api.live.bilibili.com/room/v2/AppIndex/getAllList?device=phone&platform=ios&scale=3')
            .then((response) => response.json())//取数据
            .then(data => {//处理数据
                //通过setState()方法重新渲染界面
                if (data.code === 0) {
                    setStateWrap({
                        bannerList: data.data.module_list[0].list
                    })
                }
            })
    }

	async function getCurrentInfo() {
        try{
            //读
			const value = await AsyncStorage.getItem('location');
			if(!value) {
				navigation.replace("ChooseCity");
			} else {
				// 设置当前的地址
				setStateWrap({
					location: JSON.parse(value).name
				});
			}
        } catch(e) {
            Alert.alert('读取失败');
        }
	}

	function navigateToChooseCity() {
		navigation.push("ChooseCity");
	}

	async function setLesson(type: number) {
		// 全局缓存等到下次进入的时候获取
		await AsyncStorage.setItem('lesson', type + "");
		setStateWrap({
			currentLesson: type
		})
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
    return { state, statusBarHeight, setLesson, navigateToChooseCity, navigation };
};