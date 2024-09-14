import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("")
    const [roomId, setRoomId] = useState("")

    const handleCall = () => {
        console.log(name, roomId)
        navigation.navigate('Call', {
            name, roomId
        })
    };

    return (
        <View style={styles.container}>
            <Text>Name</Text>
            <TextInput placeholder='Name' style={styles.textInput} onChangeText={(val) => {
                setName(val)
            }} />
            <Text>Room No</Text>
            <TextInput placeholder='Room No' style={styles.textInput} onChangeText={(val) => {
                setRoomId(val)
            }} />
            <Button onPress={handleCall} title="Call" />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    textInput: {
        borderWidth: 1,
        borderColor: "black",
        marginVertical: 10
    }
})