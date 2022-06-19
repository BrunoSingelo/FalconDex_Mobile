import React from "react";
import { useState, useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { Status } from "../../utils/status";

import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import ListItem from "./components/ListItem";
import FalconDex from "../../services/Api";
import { Picker } from "@react-native-picker/picker";
export default function Listcall() {
  //deixando dinamico
  const [list, setList] = useState([]);
  const [listSelect, setListSelect] = useState("");
  const [search, setSearch] = useState("");

  useEffect(async () => {
    if (search === "" && listSelect === "") {
      await FalconDex.get("chamado")
        .then((response) => {
          setList(response.data);
        })
        .catch((err) => {
          console.log("ops! ocorreu um erro: " + err);
        });
    } else if (search !== "" && listSelect === "") {
      await FalconDex.get("chamado")
        .then((response) => {
          setList(
            response.data.filter(
              (item) =>
                item.Nome.toLowerCase().indexOf(search.toLowerCase()) > -1 ||
                item.Descricao.toLowerCase().indexOf(search.toLowerCase()) > -1
            )
          );
        })
        .catch((err) => {
          console.log("ops! ocorreu um erro: " + err);
        });
    } else if (search === "" && listSelect !== "") {
      await FalconDex.get("chamado")
        .then((response) => {
          setList(
            response.data.filter((item) => item.status.Id == listSelect)

          );
        })
        .catch((err) => {
          console.log("ops! ocorreu um erro: " + err);
        });
    }
  }, [listSelect, search]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={styles.Input}
          placeholder="Pesquisar"
          value={search}
          onChangeText={(t) => setSearch(t)}
        />
        <Picker
        style={styles.Select}
          selectedValue={listSelect}
          onValueChange={value => setListSelect(value)} 
        >
          <Picker.Item label="Selecione status de chamados" value="" />
          <Picker.Item label="Ativo" value="1" />
          <Picker.Item label="Inativo" value="2" />
          <Picker.Item label="Encerrado" value="3" />
          <Picker.Item label="Cancelado" value="4" />
          <Picker.Item label="Em atendimento" value="5" />
        </Picker>
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
