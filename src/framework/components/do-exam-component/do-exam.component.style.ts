import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    imageField: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    IconLearningField: {
        marginBottom: 40
    },
    typeTitle: {
        backgroundColor: "#1890ff",
        width: 50,
        marginRight: 10,
        height: 20,
        borderRadius: 3
    },
    middlesContent: {
        backgroundColor: "#f2f4f5",
        flexDirection: "row",
        padding: 15,
        marginTop: 30,
        justifyContent: "space-between"
    },
    mainContent: {
        // width: "100%"
        padding: 10,
        backgroundColor: "#FFF",
    },
    header: {
        flexDirection: "row",
    },
    typeTitleSpan: {
        fontSize: 13,
        lineHeight:20,
        color: "#FFF",
        textAlign: "center",
        fontWeight: "300"
    },
    textDesc: { 
        flexDirection: "row",
        // width: "80%",
        display: "flex",
        alignSelf: "stretch"
    },
    textDescText: {
        lineHeight:20,
       
    }
});