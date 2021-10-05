import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const MovieDetails = ({ route }) => {
  const navigation = useNavigation();

  const [data, setData] = useState([]);

  useEffect(() => {
    if (route.params) {
      const { id, name, overview, image, vote } = route.params;
      const filteredId = data.map(item => (
        item.id
      ))
      if (filteredId == id) {
        return setData(oldData => [ ...oldData ])
      } else {
        setData(oldData => [ ...oldData, { id, name, overview, image, vote }])
      }
    };
  }, []);

  const showMovieName = () => {
    return (
      data.map(item => (
        item.name
      ))
    );
  };

  const showOverView = () => {
    return (
      data.map(item => (
        item.overview
      ))
    );
  };

  const showImage = () => {
    return (
      data.map(item => (
        item.image
      ))
    );
  };

  const showRanting = () => {
    return (
      data.map(item => (
        item.vote
      ))
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500/${showImage()}`}} style={styles.image}>
        <TouchableOpacity style={styles.icon} onPress={() => navigation.goBack()} >
          <Icon name="chevron-left" style={[styles.iconText, { marginLeft: 20, color: '#FFFFFF' }]} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>{showMovieName()}</Text>
        <View style={styles.content}>
          <Icon name="star" style={[styles.iconText, { color: 'yellow', marginRight: 10 }]} />
          <Text style={styles.title}>{showRanting()}</Text>
        </View>
      </View>
        <Text style={styles.subtitle}>{showOverView()}</Text>
      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ASSISTIR</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#000000',
  },
  image: {
    width: 400,
    height: 400,
  },
  button: {
    backgroundColor: '#DB0000',
    padding: 14,
    borderRadius: 10,
    marginHorizontal: 45,
    width: '80%',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 15
  },
  subtitle: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 30
  },
  content: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  iconText: {
    fontSize: 18,
    marginTop: 20, 
  }
});

export default MovieDetails;