import { IMineState } from './mine.interface';
import { useStateStore } from '../../framework/use-base-store';
import { useNavigation } from '@react-navigation/native';

export function useMineStore() {
    const { state, setStateWrap } = useStateStore(new IMineState());
    const navigation: any = useNavigation();
    function onSettingClick() {
        navigation.replace("ChooseCity");
    }
    return { state, onSettingClick }
}