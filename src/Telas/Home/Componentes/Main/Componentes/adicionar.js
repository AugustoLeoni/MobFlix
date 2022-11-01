import { Image, TouchableOpacity, StyleSheet } from 'react-native'

import ButtonImg from '../../../../../assets/Button.png'

export default () => {
    return <TouchableOpacity
                style={style.button}
                activeOpacity={0.8}
                onPress={console.log('teste')}
            >
            <Image source={ButtonImg}/>
        </TouchableOpacity>
}

const style = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 35,
        right: 35
    }
})