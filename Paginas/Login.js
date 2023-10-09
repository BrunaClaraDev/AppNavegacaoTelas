import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';
import Home from './Home';

export default function Login({ navigation }) {
  return (
    <View style={estilos.container}>
      <Image source={require('../Imagens/logo.png')} style={estilos.titulo} />
      <View style={estilos.subTela}>
        <Text style={estilos.tituloLogin}>LOGIN</Text>
        <TextInput style={estilos.campoInput} placeholder="usuário"></TextInput>
        <TextInput style={estilos.campoInput} placeholder="senha"></TextInput>
        <View style={estilos.botao}>
          <Button
            title="OK"
            color="salmon"
            onPress={() => navigation.navigate('Home')}></Button>
        </View>
      </View>

      <View style={estilos.galeria}></View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  titulo: {
    alignSelf: 'center',
    width: 150,
    height: 150,
  },
  subTela: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 20,
  },
  tituloLogin: {
    margin: 20,
    fontSize: 20,
    fontFamily: 'arial',
    color: 'salmon',
    alignSelf: 'center',
  },
  campoInput: {
    margin: 5,
    height: 65,
    padding: 10,
    borderRadius: 10,
    border: 'solid pink',
    color: 'firebrick',
  },
  botao: {
    margin: 20,
    borderRadius: 10,
  },
  galeria: {
    flex: 1,
    margin: 10,
    alignItems: 'center',
  },
});
