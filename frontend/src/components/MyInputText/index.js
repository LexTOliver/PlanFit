import { View, Text, TextInput, StyleSheet } from "react-native";

export default function MyInputText(props) {
  return (
      <View style={{alignSelf: 'stretch'}}>
        <Text style={styles.inputLabel}>{props.title}</Text>
        <TextInput
          style={styles.inputField}
          onChangeText={props.setInputValue}
          value={props.inputValue}
          placeholder={props.placeholder}
          placeholderTextColor={'rgba(57, 74, 128, 0.5)'}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
        />
        <Text style={styles.inputErrorMessage}>{props.errorMessage}</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  inputLabel: {
    color: '#000',
    fontSize: 16,
  },
  inputErrorMessage: {
    fontSize: 10,
    color: '#D10A16',
    fontWeight: 'bold',
  },
  inputField: {
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: 'rgba(57, 74, 128, 0.8)',
    padding: 10,
    fontSize: 16
  },
});