import { useState } from "react";
import { View, Image, Text, StyleSheet, Pressable, Keyboard } from "react-native";
import { StatusBar } from "expo-status-bar";
import MyButton from "../../components/MyButton";
import MyInputText from "../../components/MyInputText";

const PlanFitLogo = require('../../../assets/Logo.png');

const LoginScreen = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='#D10A16' />
      <View style={styles.header}>
        <Image source={PlanFitLogo} style={styles.logo}/>
        <Text style={styles.headerTitle}>PLANFIT</Text>
      </View>
      <Pressable onPress={Keyboard.dismiss} style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Acesso ao espaço do aluno</Text>
          <MyInputText
            setInputValue={setLogin}
            value={login}
            placeholder="Digite seu e-mail"
            keyboardType="email-address"
          />
          <MyInputText
            setInputValue={setPassword}
            value={password}
            placeholder="Digite a senha"
            secureTextEntry={true}
          />
          <Pressable><Text>Esqueci minha senha</Text></Pressable>
          <MyButton
           value="ENTRAR"
           style={{marginTop: 24, marginBottom: 8}}
           onPress={() => props.navigation.navigate('Logged')}
          />
          <MyButton
           value="PRIMEIRO ACESSO"
           onPress={() => props.navigation.navigate('FirstAccess')}
           style={{marginBottom: 8}}
          />
          <MyButton value="ACESSAR COM GOOGLE" style={{marginBottom: 8}}/>
          <MyButton value="ACESSAR COM IFB" style={{marginBottom: 8}}/>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center's,
    backgroundColor: '#F3EAE9',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: 18,
    backgroundColor: '#FFF',
    borderBottomColor: '#970000',
    borderBottomWidth: 0.5,
    // marginBottom
  },
  logo: {
    width: 30,
    height: 37.38,
  },
  headerTitle: {
    marginLeft: 16,
    // fontFamily: 'Sulphur Point', //TODO: baixar fonte e configurar!
    fontWeight: '700',
    fontSize: 30,
  },
  cardContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16
  },
  card: {
    width: 360,
    height: 480,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#FFF',
    borderRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  cardTitle: {
    fontWeight: '700',
    fontSize: 20
  },
});

export default LoginScreen;