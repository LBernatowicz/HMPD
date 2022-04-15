/**
 * Lukasz Bernatowicz
 * LBernatowicz
 * Initial App
 * 15.04.2022
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
