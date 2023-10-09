import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function Galeria({ navigation }) {
  return (
    <View style={estilos.container}>
      <Image
        source={require('../Imagens/barbie1.png')}
        style={estilos.titulo}
      />
      <Text style={estilos.texto}>Nome: Joana da Silva</Text>
      <Text style={estilos.texto}>Email: joana123@gmail.com</Text>
      <Text style={estilos.texto}>Idade: 15 anos</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  titulo: {
    alignSelf: 'center',
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  texto: {
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: '100px',
  },
});
