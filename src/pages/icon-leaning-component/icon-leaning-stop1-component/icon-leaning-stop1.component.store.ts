import { IIconLeaningStop1State } from './icon-leaning-stop1.interface';
import { useStateStore } from '../../../framework/use-base-store';
import { useEffect } from 'react';
import { IconLearning } from '../icon-leaning.interface';

export function useIconLeaningStop1Store({ navigation, route }) {
    const { state, setStateWrap } = useStateStore(new IIconLeaningStop1State());
    useEffect(() => {

        const { title } = route.params;
        navigation.setParams({title})
        IconLearning && IconLearning.forEach((item) => {
            if(item.signTitle == title && !item.children.length) {
                setStateWrap({
                    currentInfo: item.data,
                })
            } else if(item.children.length) {
                item.children.forEach((item) => {
                    if(item.signTitle == title) {
                        setStateWrap({
                            currentInfo: item.data,
                        })
                    }
                })
            }
        })
    }, [])  
    return { state }
}