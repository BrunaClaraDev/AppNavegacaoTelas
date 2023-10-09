import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function Galeria({ navigation }) {
  return (
    <View style={estilos.container}>
      <Image
        source={require('../Imagens/barbie4.png')}
        style={estilos.titulo}
      />
      <Text style={estilos.texto}>Nome: Barbie Acessórios</Text>
      <Text style={estilos.texto}>Preço: R$235,00</Text>
      <Text style={estilos.texto}>Lançamento: 2023</Text>
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
