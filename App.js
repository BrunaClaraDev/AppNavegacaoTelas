import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Paginas/Home';
import Galeria from './Paginas/Galeria';
import Login from './Paginas/Login';
import Sobre from './Paginas/Sobre';
import Detalhes1 from './Paginas/Detalhes1';
import Detalhes2 from './Paginas/Detalhes2';
import Detalhes3 from './Paginas/Detalhes3';
import Detalhes4 from './Paginas/Detalhes4';
import Informacoes from './Paginas/Informacoes';
import Produtos from './Paginas/Produtos';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: { backgroundColor: 'salmon' },
          headerTintColor: '#FFF',
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Galeria"
          component={Galeria}
          options={{ title: 'Galeria' }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ title: 'Sobre' }}
        />
        <Stack.Screen
          name="Detalhes1"
          component={Detalhes1}
          options={{ title: 'Barbie Careca' }}
        />
        <Stack.Screen
          name="Detalhes2"
          component={Detalhes2}
          options={{ title: 'Barbie Acessórios' }}
        />
        <Stack.Screen
          name="Detalhes3"
          component={Detalhes3}
          options={{ title: 'Ken Praia' }}
        />
        <Stack.Screen
          name="Detalhes4"
          component={Detalhes4}
          options={{ title: 'Ken Moreno' }}
        />
        <Stack.Screen
          name="Informacoes"
          component={Informacoes}
          options={{ title: 'Informacoes' }}
        />
        <Stack.Screen
          name="Produtos"
          component={Produtos}
          options={{ title: 'Produtos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
