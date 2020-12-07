import * as React from 'react';
import { styles } from './home-page.style';
import { View, TouchableHighlight, Image, Text, Modal, Alert, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useHomePageStore } from "./home-page.component.store"
import { IHomePageProps } from './home-page.interface';
import { Header, Icon } from 'react-native-elements';
import Global from '../../framework/util/global';
export default function HomePageComponent(props: IHomePageProps) {
    const { state, changeTitle, onChooseSubject, closeModal } = useHomePageStore();
    const { bannerList = [], iconList, modalVisible }: any = state;
    const BannerHeight = 110;
    function toWebView(url: string, title: string) {
        // Actions.webView({ 'webUrl': url, title: title })
    }

    function _renderChangeTitle() {
        return <View style={styles.headerBox} >
            <Text style={styles.headerText}>{Global.currentSubject}</Text>
            <Icon name='down' type="antdesign" onPress={changeTitle} size={15} color="white" />
        </View>
    }

    function _renderHeader() {
        return <Header
            centerComponent={_renderChangeTitle()}
            rightComponent={<Icon name='enviromento' type="antdesign" size={18} color="white" />}
        />
    }

    //轮播图部分
    function _renderBanner() {
        return (
            <View style={{ marginTop: 10, marginLeft: 5, marginRight: 5, height: BannerHeight, borderRadius: 6, overflow: 'hidden' }}>
                <Swiper
                    autoplay
                    autoplayTimeout={4}
                    dot={<View style={{ backgroundColor: '#fff', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    activeDot={<View style={{ backgroundColor: '#fb7b9e', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                    paginationStyle={{
                        bottom: 0, left: undefined, right: 20
                    }}
                >
                    {bannerList && bannerList.map((item: any, index: number) => {
                        return (
                            <TouchableHighlight
                                onPress={() => toWebView(item.link, item.title)}
                                underlayColor="#f3f3f3"
                                key={index}>
                                <Image style={{ width: '100%', height: BannerHeight }} source={{ uri: item.pic }} />
                            </TouchableHighlight>
                        );
                    })}
                </Swiper>
            </View>
        )
    }

    //第二部分，图标
    function _renderIconList() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
                {iconList && iconList.map((item: any, index: number) => {
                    return (
                        <View style={styles.box} key={index}>
                            {/* <Image source={{ uri: "../" }} style={{ width: 45, height: 45 }}></Image> */}
                            <Text style={{ flex: 1, textAlign: 'center', fontSize: 12, color: '#888' }}>{item.title}</Text>
                        </View>
                    )
                })}
            </View>
        )
    }

    function _renderModal() {
        return (
            <View style={{ flex: 1 }}>
                <Modal
                    animationType={'fade'}
                    visible={modalVisible}
                    transparent={true}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <TouchableOpacity style={styles.container} activeOpacity={1} onPress={closeModal}>
                        <View style={styles.modalStyle}>
                            <View style={styles.optArea}>
                                {Global.allSubjects.map((subject) => {
                                    return <TouchableOpacity onPress={() => onChooseSubject(subject)} style={styles.item}>
                                        <Text style={styles.itemText}>{subject.title}</Text>
                                    </TouchableOpacity>
                                })}
                                <TouchableOpacity style={styles.item} onPress={closeModal}>
                                    <Text style={styles.itemText}>取消</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        )
    }

    return <View>
        {_renderHeader()}
        {_renderBanner()}
        {_renderIconList()}
        {_renderModal()}
    </View>
}
