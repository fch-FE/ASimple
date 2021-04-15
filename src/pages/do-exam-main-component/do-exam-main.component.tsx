import * as React from 'react';
import { View, Text } from 'react-native';
import { useDoExamMainStore } from './do-exam-main.component.store';
import {styles} from './do-exam-main.component.style';
import { Header, ButtonGroup, Icon, Button } from 'react-native-elements';
import DoExamComponent from '../../framework/components/do-exam-component/do-exam.component';
export default function DoExamMainComponent() {
  const { state, navigateToChooseCity, updateIndex, goBack } = useDoExamMainStore();
  const {selectedIndex} = state;
  
  function _titleGroup() {
      return  <ButtonGroup
      onPress={updateIndex}
      selectedIndex={selectedIndex}
      buttons={["答题", "背题"]}
      textStyle={{fontSize: 12, fontWeight: "400"}}
      containerStyle={{height: 25, width: 150}}
      selectedButtonStyle={{
        backgroundColor: '#1890ff',
      }}
    />
  }
  const DoExamComponentProps = {
    "answer" : "C",
    "BaseID" : "376b0",
    "img" : "",
    "title" : "大雾天行驶，以下做法正确的是？",
    "subjecttype" : "216",
    "location" : 0,
    "type" : 2,
    "desc" : "在雾中行车时，不要猛踩或快松油门，更不能紧急制动和急打方向盘。如果认为确需降低车速时，先放缓油门，然后连续几次轻踩刹车，以防追尾、侧滑。",
    "easylevel" : 3,
    "selection" : "[\"A、可以紧急制动刹车\",\"B、可以紧急制动刹车，但是需要停到紧急停车带上\",\"C、不可以紧急制动刹车，因为会造成后面的车辆追尾\",\"D、以上说法都不对\"]",
    "kmtype" : "kms",
    "locationtype" : 1520
  }
  return <View>
      <Header
           containerStyle={{
            backgroundColor: '#FFFFFF',
          }}
          leftComponent={<View style={styles.rightComponentStyle}><Icon onPress={goBack} name='left' type="antdesign" size={18} color="#3D6DCC" /></View>}
          centerComponent={_titleGroup()}
          rightComponent={<View style={styles.rightComponentStyle}><Icon onPress={navigateToChooseCity} name='setting' type="antdesign" size={18} color="#3D6DCC" /></View>}
      />
      <DoExamComponent {...DoExamComponentProps}></DoExamComponent>
    </View>;
}
