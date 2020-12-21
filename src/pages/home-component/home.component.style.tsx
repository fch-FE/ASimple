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
    mainContentLeftIcon: {
        marginBottom: 30,
        textAlign: "center",
        alignItems: "center"
    },
    mainContentLeftImage: {
        width: 40,
        height: 40
    },
    shunxuExamMain: {
        justifyContent: "space-between",
        padding: 40,
        paddingLeft: 0,
        paddingTop: 10,
        paddingRight: 0
    },
    mainContentLeftText: {
        paddingTop: 10,
        fontSize: 12
    },
    shunxuExam: {
        width: 120,
        borderColor: "#18c0ff",
        borderWidth: 10,
        color: "white",
        height:120,
        backgroundColor: "#1890ff",
        textAlign: "center",
        borderRadius: 60,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    scrollerPics: {
        flexDirection: "row"
    },
    scrollerPicImage: {
        height: 100,
        width: 200,
        marginRight: 30
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