import { Image, StyleSheet, View, TouchableOpacity, Text, Linking } from 'react-native';

import '../../../../../utilidades/encurtarurl'
import '../../../../../utilidades/listasVideos/programacao'

export default () => {

    return <View style={style.container}>
            <Image 
                style={style.img} 
                source={{
                    uri: url('https://www.youtube.com/watch?v=N3h5A0oAzsk')
                }}
            />
            <TouchableOpacity 
                style={style.button}
                activeOpacity={0.8}
                onPress={() => {
                    Linking.openURL('https://www.youtube.com/watch?v=N3h5A0oAzsk')
                }}
            >
                <Text style={style.textButton}>Assista agora</Text>
            </TouchableOpacity> 
        </View>
}

const style = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    img: {
        width: "100%",
        height: 142,
    },
    button: {
        position: 'absolute',
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: "#2478DF",
        top: 78,
        borderRadius: 8,
        paddingHorizontal: 9,
        paddingVertical: 11
    },
    textButton: {
        fontSize: 18,
        lineHeight: 21,
        color: '#FFFFFF'
    }
})