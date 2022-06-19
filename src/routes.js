//Rotas para acesso as paginas

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/login/index";
import Home from "./screens/home/index";
import Call from "./screens/call/index";
import Listcall from "./screens/listcall/index";
import CallDetails from "./screens/callDetails";

const Stack = createStackNavigator();
export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Call"
        component={Call}
        options={{ title: "Novo chamado" }}
      />
      <Stack.Screen
        name="Listcall"
        component={Listcall}
        options={{ title: "Histórico de chamados" }}
      />
      <Stack.Screen
        name="callDetails"
        options={{ headerShown: false }}
        component={CallDetails}
      />
    </Stack.Navigator>
  );
}
