import { IIconLeaningStop2State } from './icon-leaning-stop2.interface';
import { useStateStore } from '../../../framework/use-base-store';
import { useEffect } from 'react';
import { IconLearning } from '../icon-leaning.interface';

export function useIconLeaningStop2Store({ navigation, route }) {
    const { state, setStateWrap } = useStateStore(new IIconLeaningStop2State());

    useEffect(() => {

        const { title, index } = route.params;
        navigation.setParams({title})
        IconLearning && IconLearning.forEach((item,) => {
            if(item.signTitle == title && !item.children.length) {
                setStateWrap({
                    currentInfo: item.data,
                    index
                })
            } else if(item.children.length && route.params.childIndex != undefined) {
                console.log(route.params.childIndex);
                
                setStateWrap({
                    currentInfo: item.children[route.params.childIndex].data,
                    index
                })
            }
        })
    }, [])  
    return { state }
}