import { IDoExamState } from './do-exam.interface';
import { useStateStore } from '../../use-base-store';

export function useDoExamStore() {
    const { state, setStateWrap } = useStateStore(new IDoExamState());
    function getUserChoose(value: string) {
        setStateWrap({currentUserChoose: value})
    }
    return { state, getUserChoose }
}