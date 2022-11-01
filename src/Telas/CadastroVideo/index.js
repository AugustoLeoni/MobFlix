import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import '../../utilidades/encurtarurl'

export default () => {
    const [img, setImg] = useState('')
    const [categoria, setCategoria] = useState('Mobile')

    test = () => {
        if(img == "https://www.youtube.com/watch?v=N3h5A0oAzsk"){
            return img
        } else {
            //return 'img.youtube.com/'
            return "https://www.youtube.com/watch?v=N3h5A0oAzsk"
        }
    }
    return <ScrollView style={style.container}>
        <Text style={style.titulo}>Cadastre um vídeo</Text>
        <Text style={style.texto}>URL:</Text>
        <TextInput 
            style={style.input} 
            placeholder='Ex: 6v51rfed51v'
            placeholderTextColor={'#B0B0B0'}
            onChangeText={img => setImg(img)}  
        />
        <Text style={style.texto}>Categoria:</Text>
        <TextInput 
            style={style.input} 
            placeholder='Mobile, Front-end...'
            placeholderTextColor={'#B0B0B0'}
            onChangeText={categoria => setCategoria(categoria)}
        />
        <Text style={style.preview}>Preview</Text>
        <View style={style.teste}>
            <Text style={style.categoria}>{ categoria }</Text>
        </View>
        <Image 
            style={style.img} 
            source={{
                uri: url(test())
            }}
        />
        <TouchableOpacity 
                style={style.button}
                activeOpacity={0.8}
                onPress={() => {
                    Linking.openURL('https://www.youtube.com/watch?v=N3h5A0oAzsk')
                }}
            >
                <Text style={style.textButton}>Cadastrar</Text>
            </TouchableOpacity>
    </ScrollView>
}

const style = StyleSheet.create({
    container: {
        padding: 36
    },
    titulo: {
        fontSize: 32,
        lineHeight: 38,
        color: '#FFFFFF',
        marginBottom: 35,
        fontWeight: '700'
    },
    texto: {
        fontSize: 14,
        lineHeight: 16,
        color: '#FFFFFF',
        marginBottom: 8,
        fontWeight: '700'
    },
    input: {
        backgroundColor: '#275FA3',
        borderRadius: 8,
        paddingLeft: 16,
        fontSize: 16,
        lineHeight: 19,
        color: '#FFFFFF',
        marginBottom: 35,
    },
    preview: {
        fontWeight: '700',
        fontSize: 28,
        lineHeight: 33,
        color: '#FFFFFF',
        marginBottom: 13
    },
    categoria: {
        backgroundColor: '#D82D2D',
        borderRadius: 12,
        fontSize: 16,
        lineHeight: 19,
        color: '#EFEFEF',
        paddingVertical: 7,
        paddingHorizontal: 23,
        position: 'absolute'
    },

    img: {
        width: '100%',
        height: 180,
        borderRadius: 8,
        marginBottom: 32,
        marginTop: 40
    },
    button: {
        backgroundColor: '#2478DF',
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: 13,
        marginBottom: 100
    },
    textButton: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: '400',
        color: '#FFFFFF',
    }
})