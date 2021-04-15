import * as React from 'react';
import { styles } from './home.component.style';
import { View, Text, ScrollView, TouchableHighlight, Image, TouchableOpacity } from 'react-native';
import { useHomeStore } from './home.component.store';
import HomePageComponent from "../home-page-component/home-page.component"
import { Header, Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper';
import { iconsTitle, scrollerPic } from './home.interface';

export default function HomeComponent() {
  const { state, statusBarHeight, navigation, setLesson, navigateToChooseCity } = useHomeStore();
  const { location, currentLesson, bannerList } = state;
  const BannerHeight = 110;
  //轮播图部分
  function _renderBanner() {
    return (
        <View style={{height: BannerHeight,marginBottom: 10, borderRadius: 6, overflow: 'hidden' }}>
            <Swiper
                autoplay
                autoplayTimeout={4}
                dot={<View style={{ backgroundColor: '#fff', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                activeDot={<View style={{ backgroundColor: '#fb7b9e', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                paginationStyle={{
                    bottom: 0, left: undefined, right: 20
                }}
            >
                {bannerList && bannerList.length && bannerList.map((item: any, index: number) => {
                    return (
                        <TouchableHighlight
                            // onPress={() => toWebView(item.link, item.title)}
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

  function _renderBottom() {
    return <View style={{marginBottom: 10}}>
      <Text style={{fontWeight: "500", marginBottom: 20}}>摩托车 --- 路考视频</Text>
      <ScrollView horizontal={true}>
        {scrollerPic.map((pic, index) =>{ 
          return <View key={index}>
            <Image resizeMode="contain" style={styles.scrollerPicImage} source={pic.icon}></Image>
          </View>
        })}
      </ScrollView>
    </View>
  }

  function _renderMainContent() {
    return <View style={styles.mainContent}>
      <View>
      {iconsTitle.left.map((item) => {
        return <TouchableOpacity key={item.title} onPress={() => {
          navigation.push(item.src)
        }}>
          <View  style={styles.mainContentLeftIcon}>
            <Image style={styles.mainContentLeftImage} source={item.icon}></Image>
            <Text style={styles.mainContentLeftText} >{item.title}</Text>
          </View>
        </TouchableOpacity>
      })}
      </View>
      <View style={styles.shunxuExamMain}>
        <TouchableOpacity style={styles.shunxuExam} onPress={() => {
          navigation.push("AnswerQuestionMiddle",  {title: "顺序做题", action: "sort1"})
        }}>
          <View  style={styles.shunxuExam}>
            <Text style={{fontSize: 15, color: "white", marginBottom: 10}}>顺序做题</Text>
            <Text style={{fontSize: 12, color: "white"}}>1 / 10086</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {
          navigation.push("AnswerQuestionMiddle")
        }} >
           <View style={[styles.shunxuExam, { backgroundColor: "#7958fa", borderColor: "#7880fa"}]}>
            <Text style={{fontSize: 15, color: "white", marginBottom: 10}}>模拟做题</Text>
            <Text style={{fontSize: 12, color: "white"}}>未考试</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
      {iconsTitle.right.map((item) => {
        return <View key={item.title} style={styles.mainContentLeftIcon}>
          <Image style={styles.mainContentLeftImage} source={item.icon}></Image>
          <Text style={styles.mainContentLeftText} >{item.title}</Text>
        </View>
      })}
      </View>
    </View>
  }
  return <ScrollView>
    <Header
      centerComponent={{ text: '摩托车驾考题库', style: { color: '#fff' } }}
      rightComponent={<View style={styles.rightComponentStyle}><Icon onPress={navigateToChooseCity} name='enviromento' type="antdesign" size={18} color="white" /><Text style={styles.rightComponentTextStyle}>{location}</Text></View>}
    />
    <View  style={styles.scrollViewContent}>
      <View style={styles.chooseLesson}>
        <View style={[styles.lesson, currentLesson == 1 ? styles.choosedLesson : {}]}>
          <Text style={{color: "#2db7f5"}} onPress={() => setLesson(1)}>科目1</Text>
        </View>
        <View style={[styles.lesson, currentLesson == 2 ? styles.choosedLesson : {}]}>
         <Text style={{color: "#2db7f5"}} onPress={() => setLesson(2)}>科目2</Text>
        </View>
        <View style={[styles.lesson, currentLesson == 3 ? styles.choosedLesson : {}]}>
          <Text style={{color: "#2db7f5"}} onPress={() => setLesson(3)}>科目3</Text>
        </View>
        <View style={[styles.lesson, currentLesson == 4 ? styles.choosedLesson : {}]}>
         <Text style={{color: "#2db7f5"}} onPress={() => setLesson(4)}>科目4</Text>
        </View>
      </View>
      {bannerList && bannerList.length && _renderBanner()}
      {_renderMainContent()}
      {_renderBottom()}
    </View>

  </ScrollView>
}