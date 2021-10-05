import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'
 
import MovieImg from '../../assets/netflix.svg'

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <MovieImg width="250" height="250"  />
      <Text style={styles.title}>Seu guia para FILMES e SERIES que estão em alta no momento em todo o mundo.</Text>
      <Text style={styles.subtitle}>Não perca mais seu tempo procurando o que assistir.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')} >
        <Text style={styles.buttonText}>COMEÇAR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  name: {
    textAlign: 'center',
    color: '#FFFFFF',
    backgroundColor: '#DB0000',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 14,
    borderRadius: 10,
    marginBottom: 30 
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    marginHorizontal: 16
  },
  subtitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16
  },
  button: {
    backgroundColor: '#DB0000',
    width: '80%',
    borderRadius: 10,
    padding: 16
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default Welcome;