import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, ImageBackground, ActivityIndicator } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import Movies from '../../Components/Movies';

import api from '../../services/api';

const Home = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const [dataSeries, setDataSeries] = useState([]);
  const [loading, setLoading] = useState(true);

  const apikey = 'api_key=4ec327e462149c3710d63be84b81cf4f'

  const init = async () => {
    const response = await api.get(`trending/movie/week?${apikey}&page=${1}`)
    setDataMovies(response.data.results)
    setLoading(false)
  };

  useEffect(() => {
    init()
  }, [])

  const initSerie = async () => {
    const response = await api.get(`trending/serie/week?${apikey}&page=${1}`)
    setDataSeries(response.data.results)
    setLoading(false)
  };

  useEffect(() => {
    initSerie()
  }, [])

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color='#DB0000' />
      </View>
    );
  } else {
      return (
        <SafeAreaView style={styles.container}>
          <FlatList 
            data={dataSeries}
            key={item => item.id}
            renderItem={({ item }) => <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}` }} style={styles.image} />}
            horizontal
          />
          <Text style={styles.title}>Trending</Text>
          <Carousel 
            data={dataMovies}
            sliderWidth={400}
            itemWidth={170}
            renderItem={({ item }) => <Movies id={item.id} name={item.original_title} overview={item.overview} image={item.poster_path} vote={item.vote_average} />}
          />
          <Text style={styles.title}>Series</Text>
          <Carousel 
            data={dataSeries}
            sliderWidth={400}
            itemWidth={170}
            renderItem={({ item }) => <Movies id={item.id} name={item.name} overview={item.overview} image={item.poster_path} vote={item.vote_average} />}
          />
        </SafeAreaView>
      );
    };
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  image: {
    width: 200,
    height: 230,

  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 10
  },
});

export default Home;