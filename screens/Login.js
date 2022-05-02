import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input,Text } from 'react-native-elements';
import styles from '../styles/MainStyles';


export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const entrar = () => {
      navigation.reset({
          index: 0,
          routes: [{name: "Principal"}]
      })
  }

  const criar = () => {
    navigation.navigate('NovoChamado')
  }
  return (
    <View style={styles.container}>
    <Image style={styles.imglogo} source={require('../assets/LogoFalcon.png')} />
      <Text style={styles.nomeFalcon}>FALCON</Text>
      <Text style={styles.nomeDex}>DEX </Text>
      <Input
      placeholder="E-mail"
      rightIcon={{ type: 'font-awesome', name: 'envelope' }}
      onChangeText={value => setEmail(value)}
      keyboardType="email-address"
      />
      <Input
      placeholder="Senha"
      rightIcon={{ type: 'font-awesome', name: 'lock' }}
      onChangeText={value => setPassword(value)}
      secureTextEntry={true}
      />
      <Button
              title="Entrar"
              icon={{
                name: 'check',
                type: 'font-awesome',
                size: 15,
                color: 'white',
              }}
              buttonStyle={specificStyle.button}
              onPress={() => entrar() }

            />
      <Button
              icon={
            
                <Icon
                  name='arrow-right'
                  size= {15}
                  color= 'white'
                />
              }
              title="Novo Chamado"
              buttonStyle={specificStyle.button}
              onPress={() => criar() }
        
          />
            
    </View>
  
  );
  
}
  const specificStyle = StyleSheet.create({
    specificContainer:  {
      backgroundColor:'#fff'
    },
    button: {
     // width: '100%',
      marginTop: 10,
    }
  })

