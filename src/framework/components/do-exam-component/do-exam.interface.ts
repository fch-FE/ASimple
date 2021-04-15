/**
 * @export state变量定义和初始化
 * @class IDoExamState
 *  
*/
export class IDoExamState {
    currentUserChoose = ""
}

export interface IDoExamProps {
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

export const TYPE_ARRAY = ["判断题", "单选题"];