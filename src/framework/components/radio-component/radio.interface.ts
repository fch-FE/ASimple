
/**
 * @export state变量定义和初始化
 * @class IFeedState
 * @declaration TabParamList： Tab页面； RootStackParamList：普通页面
 *  
*/
import { RouteProp, } from '@react-navigation/native';

export class RadioPageState  {
    modalVisible: boolean = false
}
 
export interface IRadioProps {
    selectContent: string;
    chooseSelect: (selectContent: string) => void;
    rightAnswer: string;
    currentSelect: string;
}

export enum RADIO_TYPE {
     NOTCHECK = require("../../../asserts/button_mxuanding.png"),
     RIGHTCHECK = require("../../../asserts/zhengque.png"),
     ERRORCHECK = require("../../../asserts/cuowu.png"),
}