import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ZegoUIKitPrebuiltCall, ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn'
import { useNavigation } from '@react-navigation/native';

const CallScreen = ({ route }) => {
    const name = route.params.name;
    const roomId = route.params.roomId;
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ZegoUIKitPrebuiltCall
                appID={256538879}
                appSign={'16a3a734340b0f10381a0649f0fb415cb0cc1f324d468ad1a69409df645096f8'}
                userID={name + "userId"} // userID can be something like a phone number or the user id on your own user system. 
                userName={name}
                callID={roomId} // callID can be any unique string. 

                config={{
                    // You can also use ONE_ON_ONE_VOICE_CALL_CONFIG/GROUP_VIDEO_CALL_CONFIG/GROUP_VOICE_CALL_CONFIG to make more types of calls.
                    ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
                    onCallEnd: (callID, reason, duration) => { navigation.navigate('Home') },
                }}
            />
        </View>
    )
}

export default CallScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 0,
    },
})