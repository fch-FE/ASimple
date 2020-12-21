import { IIconLeaningState } from './icon-leaning.interface';
import { useStateStore } from '../../framework/use-base-store';
import { useNavigation } from '@react-navigation/native';

export function useIconLeaningStore() {
    const { state, setStateWrap } = useStateStore(new IIconLeaningState());
    const navigation: any = useNavigation();

    function onIconClick(item) {
        if(item.children.length) {
            navigation.push("IconLeaningStop0", {title: item.signTitle})
        } else {    
        navigation.push("IconLeaningStop1", {title: item.signTitle})

        }
    }
    return { state, onIconClick }
}