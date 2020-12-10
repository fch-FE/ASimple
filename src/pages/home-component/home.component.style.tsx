import { StyleSheet } from "react-native";
import * as React from 'react';
import { color } from "react-native-reanimated";
export const styles = StyleSheet.create({
    tabBarUnderlineStyle: {
        backgroundColor: '#fb7b9e',
        marginLeft: '4%',
        height: 5,
        width: 20
    },
    tabStyle: {
        height: 37,
        paddingLeft: 17,
        paddingRight: 17,
    },
    tabTextStyle: {
        fontSize: 16,
    },
    textStyle: {
        flex: 1,
        fontSize: 20,
        marginTop: 20,
        textAlign:'center'
    },
    rightComponentStyle: {
        flexDirection: "row",
        alignItems: "center"
    },
    rightComponentTextStyle: {
        color: "white",
        marginLeft: 10,
        fontSize: 15
    },
    chooseLesson: {
        flexDirection: "row"  
    },
    mainContent:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30
    },
    mainContentLeft: {
       
    },
    mainContentLeftIcon: {
        marginBottom: 20
    },
    mainContentLeftImage: {
        width: 40,
        height: 40
    },
    mainContentLeftText: {
        paddingTop: 10
    },
    shunxuExam: {
        marginTop: 20,
        width: 130,
        borderColor: "#18c0ff",
        borderWidth: 10,
        color: "white",
        height:130,
        backgroundColor: "#1890ff",
        textAlign: "center",
        borderRadius: 65,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    moniExam: {},
    lesson: {
        margin: 20,
        color: "#1890ff",
        paddingBottom: 10,
        marginBottom: 5
    },
    choosedLesson: {
        borderBottomColor: "#7958fa",
        borderBottomWidth: 2,
        borderStyle: "solid",
    },
    scrollViewContent: {
        padding: 20,
        paddingTop: 0,
        paddingBottom: 0
    }
});