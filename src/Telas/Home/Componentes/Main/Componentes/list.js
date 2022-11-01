import { Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import '../../../../../utilidades/listaCategorias/categorias'


const Item =({ title, backgroundColor, marginLeft, marginRight }) => (
    <TouchableOpacity
        style={[style.listButton, backgroundColor, marginLeft, marginRight]}
        activeOpacity={0.8}
        onPress={console.log(backgroundColor)}
    >
        <Text style={style.list}>{ title }</Text>
    </TouchableOpacity>

);

export default () => {
    let teste = 0
    
    const renderItem =({ item }) => {
        if(item.id == 1){
            marginLeft = 35
        } else {
            marginLeft = 9
        }
        if(item.id == 6){
            marginRight = 35
        } else {
            marginRight = 9
        }
        const backgroundColor = DATA[teste].color
        teste++
        
        return(
            <Item 
                title={item.title} 
                backgroundColor={{ backgroundColor }}
                marginLeft = {{ marginLeft }}
                marginRight = {{ marginRight }}
            />
        )
    }; 

    return (
        <FlatList 
            showsHorizontalScrollIndicator={false}
            data={DATA}
            horizontal
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    )
}

const style = StyleSheet.create({
    list: {
        fontSize: 16,
        lineHeight: 19,
        color: "#FFFFFF",
    },
    listButton: {
        paddingVertical: 7,
        paddingHorizontal: 22,
        borderRadius: 12,
        marginTop: 28,
        marginBottom: 14,
    }
})
