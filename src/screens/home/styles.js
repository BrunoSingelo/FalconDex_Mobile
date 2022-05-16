import { StyleSheet, Dimensions, Planform } from "react-native";


const { width, height} = Dimensions.get('window');

const styles = StyleSheet.create({

    container: {
        flex: 1,
        flexDirection:'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        padding: 8,
      },
      roundedButton:{
        backgroundColor: '#4BBFE4',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        alignItems: 'center',
        padding: 20,
        width: 300,
        borderRadius: 15
      },
      roundedButton1:{
        backgroundColor: '#04DE22',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        alignItems: 'center',
        padding: 20,
        width: 300,
        borderRadius: 15
      },
      roundedButton2:{
        backgroundColor: '#DE7204',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        alignItems: 'center',
        padding: 20,
        width: 300,
        borderRadius: 15
      },
      roundedButton3:{
        backgroundColor: '#FA0547',
        display: 'flex',
        flexDirection:'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        alignItems: 'center',
        padding: 20,
        width: 300,
        borderRadius: 15
      },
      textButton:{
        color: '#FFF',
        fontWeight: 'bold',
        width: '80%',
        marginLeft: 30
      },
      spacer:{
        marginLeft:30,
        width: '20%'
      }
 });

export default styles;