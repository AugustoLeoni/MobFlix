import { View, FlatList, StyleSheet, Image, Text, TouchableOpacity, Linking } from 'react-native';

import Header from "./Componentes/Header/header"
import Main from './Componentes/Main';

import '../../utilidades/listasVideos/programacao';
import '../../utilidades/encurtarurl'
import '../../utilidades/listasVideos/listavideos'
import Adicionar from './Componentes/Main/Componentes/adicionar';

const Item = ({ tumbnail, url, nome, backgroundColor }) => (
    <View style={style.container}>
        <View style={[style.containerText, backgroundColor]}>
            <Text style={style.text}>{ nome }</Text>
        </View>
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
                Linking.openURL(url)
            }}
        >
            <Image style={style.img} source={{ uri: tumbnail }} />
        </TouchableOpacity>
    </View>
);

export default () => {
    const renderItem = ({ item }) => {
        const tumbnail = url(item.url)
        const backgroundColor = item.color
        return(
            <Item 
                url={item.url}
                tumbnail={tumbnail}
                nome={item.nome}
                backgroundColor={{ backgroundColor }} 
            />
        )
    };

    return (
        <>
            <FlatList 
                showsVerticalScrollIndicator={false}
                data={listas}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ListHeaderComponent={() => {
                    return <>
                        <Header />
                        <Main />
                    </>
                }}
            />
            <Adicionar />
        </>
    )
}

const style = StyleSheet.create({
    text: {
        fontSize: 16,
        lineHeight: 19,
        color: "#EFEFEF",
        paddingHorizontal: 22,
        paddingVertical: 7,
    },
    containerText: {
        position: 'absolute',
        borderRadius: 12,
    },
    img: {
        height: 180,
        borderRadius: 8,
        marginTop: 42
    },
    container: {
        position: 'relative',
        marginHorizontal: 35,
        marginVertical: 10
    },
})
