import React from 'react';
import { View, Text, Button,StyleSheet ,Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';




export default function JornadaApresentacao() {

  const navigation  = useNavigation();

  function handleNavigate(){
    navigation.navigate('CadastroCrianca');
  }

	return(
  <View style={styles.container}>
      <View style={styles.div}>
        <Text  style={styles.text1}>OLÁ, BEATRIZ</Text>
        <Text style={styles.text2}>Para que possamos te ajudar de
              forma mais assertiva gostaríamos
              de pedir sua colaboração na
              criação do perfil da criança. </Text>
      </View>
          <View style={styles.nextButtonText}>
              <Button 
                title="Continuar"
                onPress={handleNavigate}
                >          
              </Button>
          </View>

  </View>

	);


}const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems:'center',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
    backgroundColor:'#ebf2f5',
    justifyContent: 'space-between',


  },

  image:{
    width: 115,
    height:133,
    left:60,
    top:-120,
    
  
  },
  div:{
    justifyContent: "flex-start",
    marginLeft: 25,
    marginTop:45,
    width: 160,
    height: 10,
    opacity:1,
    
    

  },
  nextButton:{
    flex:2,
    backgroundColor: '#FFAA00',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 56,
    marginTop: 10,
  },
  nextButtonText:{
    fontFamily: 'Poppins_300Light',
    fontSize: 16,
    marginStart: 0,
    marginTop:10,
    
  },
  text1:{
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 25,
    marginTop:24,
    width:146,
    height:26,
    fontSize:23,
    textAlign:"left",
    color:'#0BA1C3',
  },
  text2:{
    fontFamily: "Poppins_300Light",
    color:'#0BA1C3',
  }
  


})