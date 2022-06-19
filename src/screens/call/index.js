import React, { useState, useEffect } from "react";
import { Text, View, TextInput, Button } from "react-native";
import styles from "./styles";
import FalconDex from "../../services/Api";
import { useForm, Controller } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";

export default function Call() {
  const [equipamentos, setEquipamentos] = useState();
  const [local, setLocal] = useState([]);

  const {handleSubmit, control, formState: { errors } } = useForm( { 
    defaultValues: {
      Nome: "",
      titulo: "",
      Descricao: "",
      Equipamento: "",
      Local: "",
      Status: "",
      Data: "",
      Hora: "",
    }

  } );
  const onSubmit = (data) => console.log(data);

  useEffect(async () => {
    await FalconDex.get("equipamento")
      .then((response) => {
        setEquipamentos(response.data);
      })
      .catch((err) => {
        console.log("ops! ocorreu um erro: " + err);
      });
  }, []);
  useEffect(async () => {
    await FalconDex.get("local")
      .then((response) => {
        setLocal(response.data);
      })
      .catch((err) => {
        console.log("ops! ocorreu um erro: " + err);
      });
  }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abertura de chamado</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onblur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Digite o titulo do chamado"
            onChangeText={(value) => onChange(value)}
            onBlur={onblur}
            value={value}
          />
        )}
        name="titulo"
        rules={{ required: true }}
      />
      {errors.titulo && <Text style={styles.error}>Título é obrigatório</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onblur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Digite a descrição do chamado"
            onChangeText={(value) => onChange(value)}
            onBlur={onblur}
            value={value}
            multiline={true}
            numberOfLines={5}
          />
        )}
        name="descricao"
        rules={{ required: true }}
      />
      {errors.descricao && <Text style={styles.error}>Descrição é obrigatória!</Text>}
      <Controller
        control={control}
        render={({ field: { onChange, onblur, value } }) => (
          <Picker
            style={styles.input}
            onValueChange={(value) => onChange(value)}
            onBlur={onblur}
            value={value}
          >
            <Picker.Item label="Selecione o equipamento" value="" />
            {equipamentos?.map((equipamento) => (
              <Picker.Item
                
                key={equipamento.Id}
                label={equipamento.Nome}
                value={equipamento.Id}
              />
            ))}
          </Picker>
        )}
        name="equipamento"
        rules={{ required: true }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onblur, itemvalue } }) => (
          <Picker
            style={styles.input}
            placeholder="Selecione o local"
            onValueChange={(itemValue) => onChange(itemValue)}
            onBlur={onblur}
            value={itemvalue}
          >
            <Picker.Item label="Selecione o local" value="" />
            {local?.map((local) => (
              <Picker.Item key={local.Id} label={local.Nome} value={local.Id} />
            ))}
          </Picker>
        )}
        name="local"
        rules={{ required: true }}
      />
      <Controller
        control={control}
        render={({ field: { onChange, onblur, value } }) => (
          <Picker
            style={styles.input}
            placeholder="Selecione o tipo a prioridade"
            onChangeText={(value) => onChange(value)}
            onBlur={onblur}
            value={value}
          >
            <Picker.Item label="Selecione a prioridade" value="" />
            <Picker.Item label="Baixa" value="1" />
            <Picker.Item label="Média" value="2" />
            <Picker.Item label="Alta" value="3" />
            <Picker.Item label="Critica" value="4" />
          </Picker>
        )}
        name="prioridade"
        rules={{ required: true }}
      />

      <Button
        title="Enviar"
        color={"#4BBFE4"}
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}
