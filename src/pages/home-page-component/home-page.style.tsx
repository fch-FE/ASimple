import { Dimensions, StyleSheet } from "react-native";
import * as React from 'react';

const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
    box: {
        width: '20%',
        alignItems: 'center',
        marginTop: 5
    },
    headerText: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginRight: 10
    },
    headerBox: {
        alignItems: "center",
        flexDirection: "row"
    },
    modalStyle: {
        position: "absolute",
        left: 0,
        bottom: 0,
        width: width,
        flexDirection: "column",
        backgroundColor: '#ffffff',
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    optArea: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 12,
        marginBottom: 12,
    },
    item: {
        width: width,
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        alignItems: 'center',
    },
    itemText: {
        fontSize: 16,
    },
});