import React from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TextInput,
  Button, 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { 
  RectButton 
} from 'react-native-gesture-handler';

export default function CadastroCrianca() {

 const navigation  = useNavigation();

 function handleNavigateJornada(){
   navigation.navigate('Confirmacao');
 }

 return(
  <View >
    <Text style={styles.label}>Nome Completo:</Text>
      <TextInput
        style={styles.input}
      />
      <Text style={styles.label}>Nascimento</Text>
      <TextInput
        style={styles.input}
        placeholder ="_ _/_ _/_____"
        
      />

<RectButton style={styles.nextButton} onPress={() => {}}>
        <Text style={styles.nextButtonText}>Cadastrar Nova Criança</Text>
      </RectButton>

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

label: {
  color: '#8fa7b3',
  fontFamily: 'Poppins_600SemiBold',
  marginBottom: 8,
},
input: {
  backgroundColor: '#fff',
  borderWidth: 1.4,
  borderColor: '#d3e2e6',
  borderRadius: 20,
  height: 56,
  paddingVertical: 18,
  paddingHorizontal: 24,
  marginBottom: 16,
  textAlignVertical: 'top',
},
nextButton: {
  backgroundColor: '#15c3d6',
  borderRadius: 20,
  justifyContent: 'center',
  alignItems: 'center',
  height: 56,
  marginTop: 32,
},

nextButtonText: {
  fontFamily: 'Poppins_800ExtraBold',
  fontSize: 16,
  color: '#FFF',
}

})

