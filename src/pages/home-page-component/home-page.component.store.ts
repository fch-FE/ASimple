import { IHomePageState } from './home-page.interface';
import { useStateStore } from '../../framework/use-base-store';
import { useEffect } from 'react';
import Global from '../../framework/util/global';
export function useHomePageStore() {
    const { state, setStateWrap } = useStateStore(new IHomePageState());
    useEffect(() => {
        getLiveDetail();
    }, [])
    
    const getLiveDetail = () => {
        fetch('https://api.live.bilibili.com/room/v2/AppIndex/getAllList?device=phone&platform=ios&scale=3')
            .then((response) => response.json())//取数据
            .then(data => {//处理数据
                //通过setState()方法重新渲染界面
                if (data.code === 0) {
                    setStateWrap({
                        bannerList: data.data.module_list[0].list
                    })
                }
            })
    }

    function onChooseSubject(subject: {title: string}) {
        Global.currentSubject = subject.title;
        setStateWrap({
            modalVisible: false
        })
    }

    function closeModal() {
        setStateWrap({
            modalVisible: false
        })
    }

    function changeTitle() {
        // 弹窗
        setStateWrap({
            modalVisible: true
        })
    }
    return { state, changeTitle, onChooseSubject, closeModal }
}