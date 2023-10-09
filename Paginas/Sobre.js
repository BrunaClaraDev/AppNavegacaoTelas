import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function Galeria({ navigation }) {
  return (
    <View style={estilos.container}>
      <Image
        source={require('../Imagens/barbieSobre.png')}
        style={estilos.imagem}
      />
      <Text style={estilos.titulo}>BarbieShop</Text>
      <Text style={estilos.texto}>Somos uma loja que vende barbies</Text>
      <Text style={estilos.texto}>Estamos no mercado desde 2021</Text>
      <Text style={estilos.texto}>Estamos localizados em Fortaleza-CE</Text>
      <Text style={estilos.texto}>Entregamos pra todo Brasil</Text>
      <Image source={require('../Imagens/mapa.png')} style={estilos.imagem} />
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
    fontSize: 47,
    letterSpacing: '10px',
    color: 'deeppink',
  },
  imagem: {
    width: 330,
    height: 200,
  },
  texto: {
    alignSelf: 'center',
    fontSize: 20,
    lineHeight: '70px',
  },
});
