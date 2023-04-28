import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Contatos from './src/pages/Contatos';
import Informacoes from './src/pages/Informacoes';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contatos" component={Contatos}/>
        <Stack.Screen name="Informações" component={Informacoes}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
