import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { AirbnbRating } from "react-native-ratings";
import {
  Button,
  Card,
  Title,
  Text,
  Paragraph,
  Modal,
} from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { format, parseISO } from "date-fns";

const ListItem = ({ data }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const date = data.Data;

 const [rating, setRating] = useState(0);

  return (
    <>
      <Card styles={styles.item}>
        <Card.Content style={styles.card}>
          <Title>{data.Nome}</Title>
          <Paragraph>{data.Descricao}</Paragraph>
          <Text style={styles.data}>
            <Icon name="calendar" style={styles.icon} />
            {format(parseISO(date), "dd/MM/yyyy")}
          </Text>
          <Card.Actions style={styles.actions}>
            <Button onPress={() => navigation.navigate("callDetails", data)}>
              Visualizar
            </Button>
              <Button onPress={() => {setModalVisible(true)}}>Avaliar</Button>
          </Card.Actions>
        </Card.Content>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          presentationStyle={"overFullScreen"}
          supportedOrientations={["landscape", "portrait"]}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={[styles.modalContainer, styles.shadowProp]}>
            <Text>Como você avalia o chamado?</Text>
            <AirbnbRating
              defaultRating={data.Feed}
              size={20}
              onFinishRating={(rating)}
              reviewSize={20}
              reviews={["Pessimo", "Ruim", "Mediano", "Bom", "Excelente"]}
            />
            <Button onPress={() => setModalVisible(false)}>Fechar</Button>
          </View>
        </Modal>
      </Card>
    </>
  );
};
const styles = StyleSheet.create({
  card: {
    display: "flex",
    backgroundColor: "#DCDCDC",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
  actions: {
    justifyContent: "space-between",
  },
  icon: {
    marginLeft: 10,
    fontSize: 25,
    color: "#000",
  },
  data: {
    fontSize: 15,
    marginVertical: 10,
    color: "#000",
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 1,
    shadowColor: "#52006A",
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    borderRadius: 20,
    height: "90%",
    width: "90%",
    left: "5%",
    paddingBottom: 20,
  },
});
export default ListItem;

// <View key={index} style={[styles.card, styles.shadowProp]}>
//<View style={styles.row}>
//<Text style={styles.cardTitle}>{item.Nome}</Text>
//{(item.status == Status.StatusLabels.finished &&
//  item.rating != undefined) ||
//  (item.rating != null && (
//    <View
//      style={[
//        styles.rounded,
//        {
//          backgroundColor: item.statusColor,
//        },
//      ]}
//    ></View>
//  )) || (
//    <TouchableOpacity
//      style={styles.passButton}
//      onPress={() => setOpenModal(true)}JJ
//    >
//      <MaterialCommunityIcons
//        color={"#b4c0ce"}
//        name="star-half-full"
//        size={25}
//      />
//    </TouchableOpacity>
//  )}
//</View>
//<View>
//<Text>{item.status}</Text>
//</View>
//<Text style={styles.cardDesc}>{item.desc}</Text>
//<Text style={styles.cardDate}>{item.date}</Text>
//<AirbnbRating
//defaultRating={item.rating || 0}
//size={12}
//isDisabled={true}
//reviewSize={0}
//reviews={[]}
///>
//</View>
