import { View, StyleSheet } from 'react-native';

import Home from './src/Telas/Home';
import CadastroVideo from './src/Telas/CadastroVideo';

export default () => {
  return <View style={style.container}>
      <CadastroVideo />
    </View>
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222'
  }
})


