import { Dimensions, StyleSheet } from "react-native";
import * as React from 'react';

export const styles = StyleSheet.create({
    minContent: {
        backgroundColor: "white",
        height: "100%"
    },
    headerLoginContent: {
        padding: 10,
        flexDirection: "row",
    },
    headerLoginContentDes: {
        marginLeft: 15,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: "column",
        justifyContent: "space-between"
    },
    mainContentLeftIcon: {
        marginBottom: 10,
        textAlign: "center",
        alignItems: "center"
    },
    mainContentLeftImage: {
        width: 40,
        height: 40
    },
    mainContentLeftText: {
        paddingTop: 10,
        fontSize: 12
    },
    mainContentLeftMain: {
        paddingLeft: 40,
        paddingRight: 40,
        marginTop: 15,
        flexDirection: "row",
        justifyContent:"space-between"
    }
});