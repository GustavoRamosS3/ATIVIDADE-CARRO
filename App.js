import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';

import Home from './components/Home';
import Veiculo from './components/Veiculos';
import Detalhes from './components/Detalhes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'ecedf2',
          height: 50,
        },
        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: '500',
        },
		tabBarActiveTintColor: '#e11138',
		tabBarInactiveTintColor: '#7a7a7a', 
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ) 
        }} 
      />
      <Tab.Screen 
        name="Veículos" 
        component={Veiculo} 
        options={{ 
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="car" size={size} color={color} />
          ) 
        }} 
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Tabs"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tabs" component={MyTabs} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
