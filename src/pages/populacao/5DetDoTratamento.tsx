import React from 'react';
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function JornadaApresentacao() {

  const navigation  = useNavigation();

  function handleNavigateJornada(){
    navigation.navigate('JornadaInicio');
  }

	return(
    <View>
    <View>    
        <Text>
        JORNADA PARA CÂNCER  XX
        </Text>
        <Text>
        13 | AVALIAÇÃO DO ONCO PEDIATRA
        </Text>
    </View>    

    <View>
        <Text>
        13.1 TRATAMENTO QUIMIOTERÁPICO
        </Text>
        <Text>
          Após discussão com o onco pediatra
          foi proposto tratamento adjuvante com:
        </Text>
    </View>


    

    <View>
          <Text>
          Sabemos que não é fácil a atual situação, mas estamos aqui para poder te ajudar.
          </Text>
          <View  style={styles.Button} >
            <Button 
              title="SAIBA COMO"
              onPress={()=>{}}>
            </Button>
          </View>
    </View>
        
    <View>
        <Text>
        UNIDADE DE TRATAMENTO
        </Text>
    </View>

    <View>
        <View  style={styles.ButtonSpecial} >
            <Button 
              title="SESCOLHA UNIDADE DE TRATAMENTO"
              onPress={()=>{}}>
            </Button>
            <Button 
              title="SAIBA MAIS"
              onPress={()=>{}}>
            </Button>
          </View>
    </View>
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

  container:{
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
  
  Button:{

  },
  ButtonSpecial:{

  }


})