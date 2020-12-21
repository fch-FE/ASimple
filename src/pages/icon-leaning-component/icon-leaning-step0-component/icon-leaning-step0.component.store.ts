import { IIconLeaningStep0State } from './icon-leaning-step0.interface';
import { useStateStore } from '../../../framework/use-base-store';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { IconLearning } from '../icon-leaning.interface';

export function useIconLeaningStep0Store({ navigation, route }) {
    const { state, setStateWrap } = useStateStore(new IIconLeaningStep0State());
    useEffect(() => {
        const { title } = route.params;
        IconLearning && IconLearning.forEach((item) => {
            if(item.signTitle == title) {
                setStateWrap({
                    currentInfo: item.children,
                })
            }
        })
    }, [])  

    function onIconClick(item, childIndex) {
        navigation.push("IconLeaningStop1", {title: item.signTitle, childIndex})
    }
    return { state, onIconClick }
}