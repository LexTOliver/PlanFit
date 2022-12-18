// import { StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from './src/screens/LoginScreen';
import FirstAccessScreen from './src/screens/FirstAcessScreen';

const Stack = createNativeStackNavigator();
const navigationOptions = ({ route }) => ({
  headerShown: false
});

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={navigationOptions}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='FirstAccess' component={FirstAccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;