import { IAnswerQuestionMiddleState } from './answer-question-middle.interface';
import { useStateStore } from '../../framework/use-base-store';

export function useAnswerQuestionMiddleStore() {
    const { state, setStateWrap } = useStateStore(new IAnswerQuestionMiddleState());
    return { state }
}