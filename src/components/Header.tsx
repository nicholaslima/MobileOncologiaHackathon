import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

export default function Header({  showCancel = true }: HeaderProps) {
  const navigation = useNavigation();

  function handlerGoBackToAppHomepage() {
    navigation.navigate('')
  }
  
  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <img />
      </BorderlessButton>

      <Text style={styles.title}> ESTAMOS COM VOCÊS! </Text>

      { showCancel ? (
        <BorderlessButton onPress={handlerGoBackToAppHomepage}>
        <Feather name="x" size={24} color="#ff669d" />
      </BorderlessButton>
      ) : (
        <View />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding:24,
    backgroundColor: '#F57840',
    borderBottomWidth: 1,
    borderColor: '#dde3f0',
    paddingTop: 44,

    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#8fa7b3',
    fontSize: 16,
  },
})