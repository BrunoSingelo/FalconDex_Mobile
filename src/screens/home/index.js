import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import styles from "./styles";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.roundedButton}
        onPress={() => navigation.navigate("Call")}
      >
        <MaterialCommunityIcons
          style={styles.spacer}
          name="phone-classic"
          color={"#FFF"}
          size={30}
        />
        <Text style={styles.textButton}>Abrir chamados</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.roundedButton1}
        onPress={() => navigation.navigate("Listcall")}
      >
        <MaterialCommunityIcons
          style={styles.spacer}
          name="history"
          color={"#FFF"}
          size={30}
        />
        <Text style={styles.textButton}>Histórico de chamados</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundedButton2}>
        <MaterialCommunityIcons
          style={styles.spacer}
          name="account"
          color={"#FFF"}
          size={30}
        />
        <Text style={styles.textButton}>Minha conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundedButton3}>
        <MaterialCommunityIcons
          style={styles.spacer}
          name="exit-to-app"
          color={"#FFF"}
          size={30}
        />
        <Text style={styles.textButton} onPress={() => navigation.goBack()}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}
