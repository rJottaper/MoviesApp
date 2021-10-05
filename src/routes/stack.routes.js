import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from '../Screens/Welcome'
import Home from '../Screens/Home';
import MovieDetails from '../Screens/MovieDetails';

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator headerMode="none">
      <Screen name="Welcome" component={Welcome} />
      <Screen name="Home" component={Home} />
      <Screen name="MovieDetails" component={MovieDetails} />
    </Navigator>
  );
};

export default AppRoutes;

