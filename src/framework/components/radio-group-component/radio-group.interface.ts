
/**
 * @export state变量定义和初始化
 * @class IFeedState
 * @declaration TabParamList： Tab页面； RootStackParamList：普通页面
 *  
*/

export class RadioGroupPageState  {
    modalVisible = false
    currentSelect = "";

}

export enum ACTION_TYPE {
    MODAL,
    TOAST
}
 
export interface IRadioGroupProps {
    getUserChoose: (value: string) => void;
    answer: string;
    BaseID: string;
    img: string;
    title: string;
    subjecttype: string;
    location: number;
    type: number;
    desc: string;
    easylevel: number;
    selection: string;
    kmtype: string;
    locationtype: number;
}