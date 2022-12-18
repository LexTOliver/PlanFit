import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicon from '@expo/vector-icons/Ionicons';


import LoginScreen from './src/screens/LoginScreen';
import FirstAccessScreen from './src/screens/FirstAcessScreen';
import PlanScreen from './src/screens/PlanScreen';
import SearchPlans from './src/screens/SearchPlanScreen';
import SearchPersonal from './src/screens/SearchPersonalScreen';
import OptionScreen from './src/screens/OptionScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='FirstAccess' component={FirstAccessScreen} />
        <Stack.Screen name='Logged' component={BottomTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Tab = createBottomTabNavigator();
const tabNavigationOptions = ({ route }) => ({
  headerShown: false,
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    if (route.name === 'MyPlans') {
      iconName = focused ? 'train' : 'train-outline';
    } else if (route.name === 'SearchPlans') {
      iconName = focused ? 'search' : 'search-outline';
    } else if (route.name === 'SearchPersonal') {
      iconName = focused ? 'person' : 'person-outline';
    } else if (route.name === 'Options') {
      iconName = focused ? 'list' : 'list-outline';
    }

    return <Ionicon name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#D10A16',
  tabBarInactiveTintColor: '#002353',
});

function BottomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={tabNavigationOptions}>
      <Tab.Screen name='MyPlans' component={PlanScreen}/>
      <Tab.Screen name='SearchPlans' component={SearchPlans} />
      <Tab.Screen name='SearchPersonal' component={SearchPersonal} />
      <Tab.Screen name='Options' component={OptionScreen} />
    </Tab.Navigator>
  );
}

export default App;