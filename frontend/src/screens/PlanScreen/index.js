import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import MyButton from "../../components/MyButton";

const PlanScreen = (props) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='#D10A16' />
      <Text>TODO: Implementar tela de planos do aluno</Text>
      <MyButton
       value="Retornar"
       onPress={() => props.navigation.navigate('Login')}
       style={{marginTop: 10}}
      />
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

export default PlanScreen;