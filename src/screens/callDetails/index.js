import * as React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { Button, Title, Paragraph } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { format, parseISO } from "date-fns";

export default function CallDetails({ route }) {
  const navigation = useNavigation();
  const  data = route.params?.Data ;

  return (
    <View style={styles.container}>
      <Title style={styles.title}>{route.params?.Nome}</Title>
      <Title style={styles.id}>Número do chamado: {route.params?.Id}</Title>
      <Text style={styles.label}>Descrição:</Text>
      <Paragraph style={styles.Descricao}>{route.params?.Descricao}</Paragraph>
      <Text style={styles.label}>Aberto por:</Text>
      <Text style={styles.abridor}> {route.params?.abridor.Nome} </Text>
      <Text style={styles.label}>Equipamento:</Text>
      <Text style={styles.abridor}> {route.params?.equipamento.Nome} </Text>
      <Text style={styles.label}>Local:</Text>
      <Text style={styles.abridor}> {route.params?.Local.Nome}</Text>
      <Text style={styles.label}>
        Responsavel:
      </Text>
      <Text style={styles.abridor}>{route.params?.Responsavel.Nome}</Text>
      <Text style={styles.label}>
        Prioridade:
      </Text>
      <Text style={styles.abridor}>{route.params?.prioridade.Nome}</Text>
      <Text style={styles.label}>
        Data de abertura:
      </Text>
      <Text style={styles.abridor}>{format(parseISO(data), 'dd/MM/yyyy')}</Text>
      <Text style={styles.label}>
        Status: <Text style={styles.abridor}>{route.params?.status.Nome}</Text>
      </Text>
      <Text style={styles.label}>
        Feed:<Text style={styles.abridor}> {route.params?.Feed} estrelas</Text>
      </Text>

      <Button
        style={styles.button}
        color={"#FFF"}
        onPress={() => navigation.goBack()}
      >
        Voltar
      </Button>
    </View>
  );
}
