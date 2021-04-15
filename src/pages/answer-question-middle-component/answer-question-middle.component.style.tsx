import * as React from 'react';
import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    pageContent: {
        height: "100%",
        backgroundColor: "#F9F9F9"
    },
    content: {
        flexDirection: "column",
        margin: 50,
        flex: 1,
        borderColor: "blue",
        backgroundColor: "white",
        alignItems: "center",
        textAlign: "center"
    },
    headerText: {
        fontSize: 17,
        paddingTop: 30,
        fontWeight: "bold",
        marginBottom:30
    },
    dataImageContentInfo: {
       flexDirection: "column",
       alignItems: "center"
    },
    mainImageText1: {
        fontSize: 15,
        paddingTop: 30,
        fontWeight: "bold",
       
    },
    mainImageText2: {
        marginTop: 10
    },
    mainImage: {
        width: 160,
        height: 160,
        justifyContent: "center",
        flexDirection: "column"
    },
    mainText: {
        fontSize: 18
    },
    dataContent: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%", 
        padding: 50,
      
    },
    dataContentInfo: {
    },
    dataContentInfoText1: {
         textAlign: "center",
         fontSize: 18,
         fontWeight: "bold",
         marginBottom:20
    },
    dataContentInfoText2: {
        textAlign: "center",
        fontSize: 18,
        color: "#97A0B0"
    },
    button: {
        width: 200
    }
});