import { IEnrollState } from './enroll.interface';
import { useStateStore } from '../../framework/use-base-store';

export function useEnrollStore() {
    const { state, setStateWrap } = useStateStore(new IEnrollState());
    
    return { state }
}