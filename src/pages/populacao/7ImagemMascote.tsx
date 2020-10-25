import React from 'react';
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Caminho from '../../images/Caminho 2053@1X.png'


export default function JornadaApresentacao() {

  const navigation  = useNavigation();

  function handleNavigateJornada(){
    navigation.navigate('AvaliacaoOnco');
  }

	return(
  <View >
    <Text>
      
    </Text>
    <Text>
      
    </Text>
    <Text>
      
    </Text>

    <View  style={styles.nextButton} >
        <Button 
          title="Continuar"
          onPress={handleNavigateJornada}>
          
        </Button>
      </View>
  </View>

	);


}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems:'center',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    backgroundColor:'#ebf2f5',

  },

  image:{
    width: 115,
    height:133,
  
  },
  textocentro:{
    justifyContent:'space-between',
    marginLeft:117,
    marginTop:349,
    width: 162,
    height: 20,
    opacity:1,
    color: '#a8a8b3',
    fontFamily: 'Poppins_300Light',

  },
  nextButton:{
    flex:2,
    backgroundColor: '#FFAA00',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 56,
    marginTop: 32,
  },
  nextButtonText:{
    fontFamily: 'Poppins_300Light',
    fontSize: 16,
    color: '#FFF',
  },
  


})