import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function Galeria({ navigation }) {
  return (
    <View style={estilos.container}>
      <Image source={require('../Imagens/ken3.png')} style={estilos.titulo} />
      <Text style={estilos.texto}>Nome: Ken Praia</Text>
      <Text style={estilos.texto}>Preço: R$109,90</Text>
      <Text style={estilos.texto}>Lançamento: 2019</Text>
      <Text style={estilos.texto}>Prazo de entrega: 20 dias úteis</Text>
      <Image
        source={require('../Imagens/estrelas.png')}
        style={estilos.estrelas}
      />
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
  },
  texto: {
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: '100px',
  },
  estrelas: {
    width: 330,
    height: 200,
  },
});
