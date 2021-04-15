import * as React from 'react';
import { Button } from 'react-native-elements';
import {styles} from './answer-question-middle.component.style';
import { useAnswerQuestionMiddleStore } from './answer-question-middle.component.store';
import { Text, View, Image, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AnswerQuestionMiddleComponent() {
  // const { state } = useAnswerQuestionMiddleStore();
  const navigation: any = useNavigation();
  return <View style={styles.pageContent}>
      <View style={styles.content}>
        <Text style={styles.headerText}>目前刷题率</Text>
        <ImageBackground resizeMode={"contain"} source={require("../../asserts/ic_jifenqi.png")} style={styles.mainImage}>
          <View style={styles.dataImageContentInfo}>
            <Text style={styles.mainImageText1}>1%</Text>
            <Text style={styles.mainImageText2}>已练习</Text>
          </View>
        </ImageBackground>
        <View style={styles.dataContent}>
          <View style={styles.dataContentInfo}>
            <Text style={styles.dataContentInfoText1}>396</Text>
            <Text style={styles.dataContentInfoText2}>未作题</Text>
          </View>
          <View style={styles.dataContentInfo}>
            <Text style={styles.dataContentInfoText1}>4</Text>
            <Text style={styles.dataContentInfoText2}>错题集</Text>
          </View>
          <View style={styles.dataContentInfo}>
            <Text style={styles.dataContentInfoText1}>0</Text>
            <Text style={styles.dataContentInfoText2}>收藏数</Text>
          </View>
        </View>
        <Button
            title="继续做题"
            style={styles.button}
            onPress={() =>{navigation.push("DoExamMain")}}
        />
      </View>
  </View>;
}
