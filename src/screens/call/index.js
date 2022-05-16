import * as React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import styles from './styles';

export default function Call() {
  const[data,setData] = React.useState({
    title:'',
    desc:'',
    local:'',
    equipament:'',
    priority:''
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abertura de chamado</Text>
      <TextInput style={styles.input} value={data.title} onChange={text=>setData({
      ...data,
      title:text  
    })}
    placeholder={'Digite titulo do chamado'} />
       <TextInput style={styles.input} value={data.local} onChange={text=>setData({
      ...data,
      local:text  
    })}
    placeholder={'Digite o local do chamado'} />
     <TextInput style={styles.input} value={data.equipament} onChange={text=>setData({
      ...data,
      equipament:text  
    })}
    placeholder={'Digite o equipamento a ser utilizado'} />
        <TextInput style={styles.inputArea} value={data.desc} onChange={text=>setData({
      ...data,
      desc:text  
    })}
    placeholder={'Digite descrição do chamado'} 
    multiline={true}
    numberOfLines={5}
    />
    <Button 
    title='Cadastrar chamado'
    color={'#4BBFE4'}
    />
    </View>
  );
}