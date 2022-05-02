
import React, { useState } from 'react';
import { Text, View,Image } from 'react-native';
import { Button, Input } from 'react-native-elements';

import styles from '../styles/MainStyles';
import {Picker} from '@react-native-picker/picker';

export default function NovoChamado({navigation}) {

  const [titulo, setTitulo] = useState(null)
  const [descricao, setDescricao] = useState(null)
  const [equipamento, setEquipamento] = useState(null)
  const [local, setLocal] = useState(null)
  const [prioridade, setPrioridade] = useState(null)

  return (
    <View style={styles.container}>

            <Text style={styles.novoChamado}>Novo chamado</Text>
            <Input
                maxLength={35}
                placeholder="Título"
                onChangeText={value => setTitulo(value)}
                keyboardType="Text"
                rightIcon={{ type: 'fontAwesome', name: 'comment' }}
            />
            <Input
                placeholder="Descrição"
                onChangeText={value => setDescricao({comment: value})}
                keyboardType="Text"
                rightIcon={{ type: 'font-awesome', name: 'comment' }}
                multiline={true}
                numberOfLines={3}
            />
            <Picker
                selectedValue={equipamento}
                style={{ height: 100, width: 200 }}
                onValueChange={(itemValue, itemIdex) => setEquipamento(itemValue)}
            >
                <Picker.Item label="Computador" value="computador" />
            </Picker>
            <Picker
                
                selectedValue={local}
                style={{ height: 80, width: 200 }}
                onValueChange={(itemValue) => setLocal(itemValue)}
            >
                <Picker.Item label="A1" value="A1" />
            </Picker>

            <Picker
                
                selectedValue={prioridade}
                style={{ height: 80, width: 200 }}
                onValueChange={(itemValue) => setPrioridade(itemValue)}
            >
                <Picker.Item label="Alta" value="alta" />
            </Picker>

            <Button
                title="Salvar"
                icon={{
                name: 'arrow-right',
                type: 'font-awesome',
                size: 15,
                color: 'white',
            }}
            onPress={() => salvar() }
        
            />
          
    </View>
  
  );
  
}


