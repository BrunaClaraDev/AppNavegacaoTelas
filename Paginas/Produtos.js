import { View, Text, StyleSheet, Button, Image } from 'react-native';

export default function Galeria({ navigation }) {
  return (
    <View style={estilos.container}>
      <View style={estilos.linhaImagem}>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/ken1.png')}
            style={estilos.imagem}
          />
          <Button
            title="Comprar"
            color="salmon"
            onPress={() => navigation.navigate('Home')}></Button>
        </View>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/ken2.png')}
            style={estilos.imagem}
          />
          <Button
            title="Comprar"
            color="salmon"
            onPress={() => navigation.navigate('Home')}></Button>
        </View>
      </View>
      <View style={estilos.linhaImagem}>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/barbie1.png')}
            style={estilos.imagem}
          />
          <Button
            title="Comprar"
            color="salmon"
            onPress={() => navigation.navigate('Home')}></Button>
        </View>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/barbie2.png')}
            style={estilos.imagem}
          />
          <Button
            title="Comprar"
            color="salmon"
            onPress={() => navigation.navigate('Home')}></Button>
        </View>
      </View>
      <View style={estilos.linhaImagem}>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/barbie3.png')}
            style={estilos.imagem}
          />
          <Button
            title="Comprar"
            color="salmon"
            onPress={() => navigation.navigate('Home')}></Button>
        </View>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/barbie4.png')}
            style={estilos.imagem}
          />
          <Button
            title="Comprar"
            color="salmon"
            onPress={() => navigation.navigate('Home')}></Button>
        </View>
      </View>

      <View style={estilos.linhaImagem}>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/ken3.png')}
            style={estilos.imagem}
          />
          <Button
            title="Comprar"
            color="salmon"
            onPress={() => navigation.navigate('Home')}></Button>
        </View>
        <View style={estilos.borda}>
          <Image
            source={require('../Imagens/ken4.png')}
            style={estilos.imagem}
          />
          <Button
            title="Comprar"
            color="salmon"
            onPress={() => navigation.navigate('Home')}></Button>
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
    margin: '4px',
  },
});
