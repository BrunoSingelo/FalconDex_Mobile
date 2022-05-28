import React from "react";
import { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  Modal,
  Button,
} from "react-native";
import { Status } from "../../utils/status";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AirbnbRating } from "react-native-ratings";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import results from "../../services/results";
import ListItem from "./components/ListItem";
import FalconDex from "../../services/Api";

export default function Listcall() {
  const [search, setSearch] = useState("");
  //deixando dinamico
  const [list, setList] = useState([]);
  // const [openModal, setOpenModal] = React.useState(false);

//  useEffect(() => {
//    FalconDex.get("chamado") // aqui chamo especificamente os chamados conforme o nome da API
//      .then((response) => setList(response.data))
//      .catch((err) => {
//        console.log("ops! ocorreu um erro: " + err);
//      });
//  }, []);
  useEffect(() => {
    if (search === "") {
      FalconDex.get("chamado")
      .then((response) => setList(response.data))
      .catch((err) => {
        console.log("ops! ocorreu um erro: " + err);
      });
  
    } else {
      FalconDex.get("chamado")
      .then((response) =>
      setList(
        (response.data).filter(
          (item) =>
            item.Nome.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
            item.Descricao.toLowerCase().indexOf(search.toLowerCase()) > -1
        ))
      )
      .catch((err) => {
        console.log("ops! ocorreu um erro: " + err);
      })
    }
  }, [search]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Histórico de chamados</Text>

        <TextInput
          style={styles.Input}
          placeholder="Pesquisar"
          value={search}
          onChangeText={(t) => setSearch(t)}
        />
        <FlatList
          data={list}
          renderItem={({ item }) => <ListItem data={item} />}
          keyExtractor={(item) => item.Id}
          initialNumToRender={8}
        />
      </View>
    </SafeAreaView>
  );
}
