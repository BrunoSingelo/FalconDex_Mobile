import { StyleSheet, Dimensions, Planform } from "react-native";


const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({

      container:{
        flex: 1,
        justifyContent: 'center',
        padding: 8,
        backgroundColor:'#FFF'
      },
      input:{
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:5,
        marginBottom: 10,
        marginTop: 10
      },
      inputArea:{
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius:5,
        marginBottom: 10,
        marginTop: 10
      },
      title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#4BBFE4'
      }
 });

export default styles;