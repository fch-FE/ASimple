/**
 * @export state变量定义和初始化
 * @class IHomePageState
 */
export class IHomePageState {
    bannerList = undefined;
    modalVisible = false;
    iconList = [
        {
            id: 1,
            url: "",
            title: "英雄联盟"
        },
        {
            id: 2,
            url: "http://i0.hdslb.com/bfs/vc/c666c6dc2d5346e0d3cfda7162914d84d16964dd.png",
            title: "lol云顶之弈"
        },
        {
            id: 3,
            url: "http://i0.hdslb.com/bfs/vc/8f7134aa4942b544c4630be3e042f013cc778ea2.png",
            title: "王者荣耀"
        },
        {
            id: 4,
            url: "http://i0.hdslb.com/bfs/live/827033eb0ac50db3d9f849abe8e39a5d3b1ecd53.png",
    
            title: "单机"
        },
        {
            id: 5,
            url: "http://i0.hdslb.com/bfs/live/a7adae1f7571a97f51d60f685823acc610d00a7e.png",
            title: "电台"
        },
        {
            id: 6,
            url: "http://i0.hdslb.com/bfs/vc/9bfde767eae7769bcaf9156d3a7c4df86632bd03.png",
            title: "怪物猎人"
        },
        {
            id: 7,
            url: "http://i0.hdslb.com/bfs/vc/973d2fe12c771207d49f6dff1440f73d153aa2b2.png",
            title: "无主之地3"
        },
        {
            id: 8,
            url: "http://i0.hdslb.com/bfs/vc/976be38da68267cab88f92f0ed78e057995798d6.png",
            title: "第五人格"
        },
        {
            id: 9,
            url: "http://i0.hdslb.com/bfs/live/8fd5339dac84ec34e72f707f4c3b665d0aa41905.png",
            title: "娱乐"
        },
        {
            id: 10,
            url: "https://i0.hdslb.com/bfs/vc/ff03528785fc8c91491d79e440398484811d6d87.png",
            title: "全部标签"
        },
    
    ]
}

export interface IHomePageProps {
    tabLabel: string; 
}   