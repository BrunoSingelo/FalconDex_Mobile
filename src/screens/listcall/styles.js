import { StyleSheet, Dimensions, Planform } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#FFF",
  },
  Input:{
    marginTop: 85,
    borderWidth: 2,
    borderColor: "#4BBFE4",
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
    width: "100%",
  },
  Select:{
    backgroundColor: "#f4f4f4",
     width: "100%",
     padding: 5,

    },
  card: {
    display: "flex",
    backgroundColor: "#696969",
    borderRadius: 8,
    paddingVertical: 5,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 10,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
    shadowColor: "#52006A",
  },
  cardTitle: {
    fontSize: 20,
  },
  cardDesc: {
    fontSize: 15,
    marginVertical: 10,
  },
  cardDate: {
    alignSelf: "flex-end",
    marginBottom: 5,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    justifyContent: "space-between",
  },
  rounded: {
    width: 10,
    height: 10,
    backgroundColor: "grey",
    borderRadius: 100,
  },
  modalContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#FFF",
    borderRadius: 20,
    height: 200,
    width: 300,
    top: "30%",
    left: "10%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4BBFE4",
  },
  

});

export default styles;
