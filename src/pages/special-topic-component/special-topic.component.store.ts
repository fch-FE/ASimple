import { ISpecialTopicState } from './special-topic.interface';
import { useStateStore } from '../../framework/use-base-store';
import { useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import {
	Alert
} from "react-native";
export function useSpecialTopicStore() {
    const { state, setStateWrap } = useStateStore(new ISpecialTopicState());
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
				setStateWrap({
					location: JSON.parse(value).name
				});
			}
        } catch(e) {
            Alert.alert('读取失败');
        }
	}
    return { state }
}