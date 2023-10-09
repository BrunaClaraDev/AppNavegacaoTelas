import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={estilos.container}>
      <View style={estilos.linhaImagem}>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/sobre.png')}
            style={estilos.imagem}
          />
          <Button
            title="Sobre"
            color="salmon"
            onPress={() => navigation.navigate('Sobre')}></Button>
        </View>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/galeria.jpg')}
            style={estilos.imagem}
          />
          <Button
            title="Galeria"
            color="salmon"
            onPress={() => navigation.navigate('Galeria')}></Button>
        </View>
      </View>
      <View style={estilos.linhaImagem}>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/produtos.png')}
            style={estilos.imagem}
          />
          <Button
            title="Produtos"
            color="salmon"
            onPress={() => navigation.navigate('Produtos')}></Button>
        </View>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/informacoes.png')}
            style={estilos.imagem}
          />
          <Button
            title="Informações"
            color="salmon"
            onPress={() => navigation.navigate('Informacoes')}></Button>
        </View>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  imagem: {
    width: 150,
    height: 150,
  },
  linhaImagem: {
    display: 'flex',
    flexDirection: 'row',
  },
  borda: {
    margin: '10px',
  },
});
