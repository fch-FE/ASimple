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
        icon: require("../../asserts/ic_tpjq.png"),
        title: "图标学习",
        src: "IconLearning"
    },
    {
        icon: require("../../asserts/home_wzlx.png"),
        title: "未做练习",
        src: ""
    },
    {
        icon: require("../../asserts/home_kqcs.png"),
        title: "考前冲刺",
        src: ""
    },
    {
        icon: require("../../asserts/index_pfbz.png"),
        title: "错题本",
        src: ""
    }],
    right: [{
        icon: require("../../asserts/random_exam.png"),
        title: "随机练习",
        src: ""
    },
    {
        icon: require("../../asserts/home_cjd.png"),
        title: "成绩单",
        src: ""
    },
    {
        icon: require("../../asserts/home_kqmj.png"),
        title: "考前密卷",
        src: ""
    },
    {
        icon: require("../../asserts/favorite_ti.png"),
        title: "收藏夹",
        src: ""
    }]
}

export const scrollerPic = [{
    icon: require("../../asserts/ic_index_video1.png"),
}, {
    icon: require("../../asserts/ic_index_video2.png"),
},
{
    icon: require("../../asserts/ic_index_video3.png"),
},
{
    icon: require("../../asserts/ic_index_video4.png"),
},{
    icon: require("../../asserts/ic_index_video5.png"),
}]