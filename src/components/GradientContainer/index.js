import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default function Container({children}) {
  return (
    <LinearGradient colors={['#7159c1', '#AE67F4']} style={styles.container}>
      {children}
    </LinearGradient>
  );
}
