import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

export default function Header({  showCancel = true }: HeaderProps) {
  const navigation = useNavigation();

  function handlerGoBackToAppHomepage() {
    navigation.navigate('BemVindos')
  }
  
  return (

    <View style={styles.container}>

        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}}>
        </View>
        <View style={styles.title}>
        <Text > ESTAMOS COM VOCÊS! </Text>
        </View>
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}}>
        </View>
     </View>
    /*}
      <BorderlessButton onPress={navigation.goBack}>
        <img src='../images/imagemMascote@1X.png'/>
      </BorderlessButton>
    </View>
    <View>
      <Text style={styles.title}> ESTAMOS COM VOCÊS! </Text>
    </View>
    <View>
      { showCancel ? (
        <BorderlessButton onPress={handlerGoBackToAppHomepage}>
        <Feather name="x" size={24} color="#ff669d" />
      </BorderlessButton>
      ) : (
        
      )}
      </View>*/
  );
}
const styles = StyleSheet.create({
  container: { 
    justifyContent: 'space-between', 
    flexDirection: 'row', 
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#8fa7b3',
    fontSize: 16,
    width: 'auto', 
    height: 'auto', 
  },
})