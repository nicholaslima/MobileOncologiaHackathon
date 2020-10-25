import React from 'react';
import { View, Text, StyleSheet, Dimensions, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton }from 'react-native-gesture-handler';
import ImageLogo from '../images/LOGO-03@1X.png';

export default function Index() {

  const navigation  = useNavigation();

  function handleNavigateJornada(){
    navigation.navigate('JornadaApresentacao');
  }

	return(
  <View style={styles.container}>
        <View style={styles.div}>
          <Text style={styles.text1}>
            ESTAMOS JUNTOS!!
          </Text>
          <Text style={styles.text2}>
            Jornada do Paciente
            Câncer Infantil
          </Text>
        </View>

        <View style={styles.image}>
          <img src={ImageLogo} alt='Logo'/>
        </View>
            <View style={styles.nextButtonText}>
              <Button 
                title="Continuar"
                onPress={handleNavigateJornada}
                >          
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
    left:60,
    top:-120,
    
  
  },
  div:{
    justifyContent:'space-between',
    marginLeft:11,
    marginTop:349,
    width: 162,
    height: 20,
    opacity:1,
    color: '#a8a8b3',
    

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
    marginStart: 0,
    marginTop:60,
    
  },
  text1:{
    fontFamily: "Poppins_500Medium",
  },
  text2:{
    fontFamily: "Poppins_300Light",
  }
  


})