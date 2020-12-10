/**
 * @export state变量定义和初始化
 * @class IHomeState
 */
export class IHomeState {
    location = "四川";
    currentLesson = 1;// 默认是科目1
    bannerList: []
}

export const iconsTitle  = {
    left: [{
        icon: require("../../asserts/1.png"),
        title: "图标学习",
        src: ""
    },
    {
        icon: require("../../asserts/2.png"),
        title: "图标学习",
        src: ""
    },
    {
        icon: require("../../asserts/1.png"),
        title: "图标学习",
        src: ""
    },
    {
        icon: require("../../asserts/2.png"),
        title: "图标学习",
        src: ""
    }],
    right: [{
        icon: require("../../asserts/1.png"),
        title: "图标学习",
        src: ""
    },
    {
        icon: require("../../asserts/2.png"),
        title: "图标学习",
        src: ""
    },
    {
        icon: require("../../asserts/2.png"),
        title: "图标学习",
        src: ""
    },
    {
        icon: require("../../asserts/1.png"),
        title: "图标学习",
        src: ""
    }]
}