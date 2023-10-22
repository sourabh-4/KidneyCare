import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewPage = () => {
  return (
    <View style={styles.container}>
      <Text>This is the New Page!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NewPage;