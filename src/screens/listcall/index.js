import React from "react";
import { useState } from "react";
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

export default function Listcall() {
  const Index = () => {
    const [search, setSearch] = useState("");
  };
  const data = [
    {
      date: new Date().toLocaleDateString(),
      title: "teste",
      desc: "descrição",
      rating: null,
      status: Status.StatusLabels.finished,
      statusColor: Status.StatusColor.finished,
    },
    {
      date: new Date().toLocaleDateString(),
      title: "teste",
      desc: "descrição",
      status: Status.StatusLabels.canceled,
      rating: 1,
      statusColor: Status.StatusColor.canceled,
    },
  ];
  const [openModal, setOpenModal] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Histórico de chamados</Text>
        <TextInput style={styles.Input} placeholder="Pesquisar" />
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <View key={index} style={[styles.card, styles.shadowProp]}>
              <View style={styles.row}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                {(item.status == Status.StatusLabels.finished &&
                  item.rating != undefined) ||
                  (item.rating != null && (
                    <View
                      style={[
                        styles.rounded,
                        {
                          backgroundColor: item.statusColor,
                        },
                      ]}
                    ></View>
                  )) || (
                    <TouchableOpacity
                      style={styles.passButton}
                      onPress={() => setOpenModal(true)}
                    >
                      <MaterialCommunityIcons
                        color={"#b4c0ce"}
                        name="star-half-full"
                        size={25}
                      />
                    </TouchableOpacity>
                  )}
              </View>
              <View>
                <Text>{item.status}</Text>
              </View>
              <Text style={styles.cardDesc}>{item.desc}</Text>
              <Text style={styles.cardDate}>{item.date}</Text>
              <AirbnbRating
                defaultRating={item.rating || 0}
                size={12}
                isDisabled={true}
                reviewSize={0}
                reviews={[]}
              />
            </View>
          )}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={openModal}
          presentationStyle={"overFullScreen"}
          supportedOrientations={["landscape", "portrait"]}
          onRequestClose={() => {
            setOpenModal(false);
          }}
        >
          <View style={[styles.modalContainer, styles.shadowProp]}>
            <Text>Como você avalia o chamado?</Text>
            <AirbnbRating
              size={20}
              reviewSize={20}
              reviews={["Pessimo", "Ruim", "Mediano", "Bom", "Excelente"]}
            />
            <Button
              title="Confirmar avaliação"
              onPress={() => {
                setOpenModal(false);
              }}
            />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
