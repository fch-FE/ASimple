import { IDoExamMainState } from './do-exam-main.interface';
import { useStateStore } from '../../framework/use-base-store';
import { useNavigation } from '@react-navigation/native';

export function useDoExamMainStore() {
    const { state, setStateWrap } = useStateStore(new IDoExamMainState());
    const navigation = useNavigation();
    function navigateToChooseCity() {

    }

    function goBack() {
        navigation.goBack();
    }

    function updateIndex(value) {
        setStateWrap({selectedIndex: value})
    }
    return { state, navigateToChooseCity, updateIndex, goBack }
}