import React from 'react';

import { 
  NavigationContainer, 
} from '@react-navigation/native';
import { 
  createStackNavigator } from '@react-navigation/stack';

const { 
		Navigator, 
    Screen, 
} = createStackNavigator();

import Header from './components/Header';

import	Index from './pages/index';
import JornadaApresentacao from './pages/populacao/1JornadaApresentacao';
import CadastroCrianca from './pages/populacao/2CadastroCrianca';
import BemVindos from './pages/populacao/4BemVindos';
import Confirmacao from './pages/populacao/3ConfirmacaoUsoePrivac';
import DetalhesTratamento from './pages/populacao/5DetDoTratamento';
import JornadaInicio from './pages/populacao/6JornadaInicio';
import ImagemMascote from './pages/populacao/7ImagemMascote';
import AvaliacaoOnco from './pages/populacao/8AvaliacaoOncoPediatra';


export default function Routes() {
	return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
				<Screen
				  name="Index!"
				  component={Index}
				
				/>

        <Screen
			    name="JornadaApresentacao"
          component={JornadaApresentacao}
          options={{
            headerShown: true,
            header: () => <Header title= "NOSSA JORNADA!" />
          }}
        />

        <Screen
			    name="CadastroCrianca"
          component={CadastroCrianca}
          options={{
            headerShown: true,
            header: () => <Header title= "NOSSA JORNADA!" />
          }}
        />

       <Screen
			    name="Confirmacao"
          component={Confirmacao}
          options={{
            headerShown: true,
            header: () => <Header title= "NOSSA JORNADA!" />
          }}
        />

        <Screen
			    name="BemVindos"
          component={BemVindos}
          options={{
            headerShown: true,
            header: () => <Header title= "NOSSA JORNADA!" />
          }}
        /> 

        <Screen
			    name="DetalhesTratamento"
          component={DetalhesTratamento}
          options={{
            headerShown: true,
            header: () => <Header title= "NOSSA JORNADA!" />
          }}
        />

        <Screen
			    name="JornadaInicio"
          component={JornadaInicio}
          options={{
            headerShown: true,
            header: () => <Header title= "NOSSA JORNADA!" />
          }}
        />

        <Screen
			    name="ImagemMascote"
          component={ImagemMascote}
          options={{
            headerShown: true,
            header: () => <Header title= "NOSSA JORNADA!" />
          }}
        /> 

        <Screen
		      name="AvaliacaoOnco"
          component={AvaliacaoOnco}
          options={{
            headerShown: true,
            header: () => <Header title= "NOSSA JORNADA!" />
          }}
        /> 

        


			</Navigator>



		</NavigationContainer>



	)


}
