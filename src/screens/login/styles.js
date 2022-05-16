import { StyleSheet, Dimensions, Planform } from "react-native";


const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
        backgroundColor: 'white'
      },
      forgotButton: {
        alignSelf: "flex-end",
        marginTop: 5,
      },
      fontButton: {
        color: "#4BBFE4",
      },
      spacer: {
        marginBottom: 30,
      },
      inputPass:{
        flexDirection:'row',    
        padding: 10,
        borderRadius: 5
      },
      inputPassword:{
        paddingLeft: 10,
        width: '75%',
        color: '#b4c0ce'
      },
      passButton:{
        display:'flex',
        alignItems:'center',
        alignContent:'center',
        width: '15%'
      },
      title:{
        fontSize:30,
        padding: 10,
        fontWeight: 'bold'
      },
      
    });

export default styles;