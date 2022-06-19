import { StyleSheet, Dimensions, Planform } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 8,
    backgroundColor: "#DCDCDC",
    borderColor: "#000",
    borderWidth: 1,
    borderRadius: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 8,
    borderBottomWidth: 1,
    borderColor: "#DDD",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#1E90FF",
    marginBottom: 10,
    alignItems: "center",
  },
  Descricao: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1C1C1C",
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1C1C1C",
    marginTop: 10,
  },

  abridor: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#1E90FF",

    marginTop: 10,
    alignContent: "center",
  },

  button: {
    color: "#FFF",
    backgroundColor: "#4BBFE4",
    borderRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: "100%",
    alignContent: "center",
  },
});

export default styles;
