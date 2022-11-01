import { Text, View, StyleSheet } from 'react-native';

export default () => {
    return <View style={style.container}>
            <Text style={style.titulo}>MOBFLIX</Text>
        </View>
}

const style = StyleSheet.create({
    container:{
        backgroundColor: "#1A1A1A",
        paddingTop: 38
    },
    titulo:{
        color: "#2478DF",
        textAlign: "center",
        fontSize: 32,
        lineHeight: 38,
        fontFamily: "Bebas Neue",
        margin: 5
    }
})