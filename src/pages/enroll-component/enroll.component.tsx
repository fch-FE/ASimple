import * as React from 'react';
import {styles} from './enroll.component.style';
import { useEnrollStore } from './enroll.component.store';
import { View, Text } from 'react-native';

export default function EnrollComponent() {
  const { state } = useEnrollStore();
  return <View>
        <Text>4</Text>
    </View>;
}
