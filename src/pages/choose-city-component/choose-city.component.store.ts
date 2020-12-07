import { IChooseCityState, TProvince } from './choose-city.interface';
import { useStateStore } from '../../framework/use-base-store';
import { useEffect } from 'react';
import  AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

export function useChooseCityStore() {
    const { state, setStateWrap } = useStateStore(new IChooseCityState());
    const navigation: any = useNavigation();
    useEffect(() => {
        getCurrentInfo()
    }, [])

    async function getCurrentInfo() {
        try{
            //读
            const value: any = await AsyncStorage.getItem('location')
			setStateWrap({currentCheckedName: value})
        } catch(e) {
            console.log(e);
        }
	}

    async function checkedCity( cityItem: TProvince) {
        setStateWrap({
            currentCheckedName: cityItem
        })
        const value: any = await AsyncStorage.setItem('location', JSON.stringify(cityItem));
        navigation.replace("Home");
    }
    return { state, checkedCity }
}