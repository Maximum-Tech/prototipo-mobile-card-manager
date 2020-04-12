import React from 'react';
import {StatusBar} from 'react-native';

import Router from './router';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Router />
    </>
  );
};

export default App;
