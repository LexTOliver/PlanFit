import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from 'expo-status-bar';

const FirstAccessScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='#D10A16' />
      <Text>TODO: Implementar tela de primeiro acesso</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F3EAE9',
  },
});

export default FirstAccessScreen;