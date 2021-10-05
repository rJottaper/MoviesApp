import React from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Movies = ({ id, name, overview, image, vote }) => {
  const navigaiton = useNavigation();

  const sendData = () => {
    navigaiton.navigate('MovieDetails', {
      id: id,
      name: name,
      overview: overview,
      image: image,
      vote: vote
    })
  }

  return (
    <TouchableOpacity onPress={sendData}>
      <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500/${image}` }} style={styles.image} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 130,
    height: 200,
    marginRight: 5,
  },
});

export default Movies;