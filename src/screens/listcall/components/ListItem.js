import React from "react";
import { StyleSheet } from "react-native";
import  Icon  from "react-native-vector-icons/AntDesign";
import { Button, Card, Title, Paragraph } from 'react-native-paper';

const ListItem = ({ data }) => {
  return (
    <Card styles={styles.item}>
      <Card.Content>
        <Title>{data.Nome}</Title>
        <Paragraph>{data.Descricao}</Paragraph>
        <Icon name="calendar" size={25} color='#000'/>
      </Card.Content>
      <Card.Actions>
        <Button>Visualizar</Button>
        <Button> Avaliar</Button>
      </Card.Actions>
    </Card>
  );
};
const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginLeft: 25,
    marginRight: 25
  }
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
//      onPress={() => setOpenModal(true)}
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