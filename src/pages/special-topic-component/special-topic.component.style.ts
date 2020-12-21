import { Dimensions, StyleSheet } from "react-native";
import * as React from 'react';

export const styles = StyleSheet.create({
    specialTopicMain: {
        marginLeft: 20,
        marginRight: 20
      
    },
    specialTopicText: {
        fontWeight: "bold",
        marginBottom: 15,
        fontSize: 16
    },
    specialTopicCard: {
        flexWrap: "wrap",

        flexDirection: "row"
    },
    specialTopicCardItem: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#f0f0f0",
        borderRadius: 7,
        height: 70,
        marginBottom:15,
        width: "45%",
        alignItems: "center",
        justifyContent: "center"
    },
    specialTopicCardItemText: {
        marginLeft: 20
    },
    specialTopicCardVedio: {
        backgroundColor: "#f2f4f5",
        flexDirection: "column",
        borderWidth: 1,
        borderColor: "#f0f0f0",
        borderRadius: 10,
        height: 150,
        marginBottom:15,
        width: "45%",
        alignItems: "center",
        justifyContent: "center"
    },
    specialTopicCardVedioImage: {
        width: 100,
        height: 100
    }
});