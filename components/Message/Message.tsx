import React from "react";
import { StyleSheet, Text, View } from "react-native";

const grey = 'lightgrey'
const blue = '#3777f0'

export default function Message() {
    const isMe = false;
    return (
        <View style={[styles.container,{backgroundColor:isMe?grey:blue,marginLeft:isMe?'auto':10}]}>

            <Text style={{color:isMe?'black':'white'}}>
                hello
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        maxWidth: '75%',
        padding: '10',
        margin:'10'
    }
})