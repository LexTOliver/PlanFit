import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function MyButton(props){
  return (
    <View style={props.style}>
      <TouchableOpacity
       style={styles.btn}
       onPress={props.onPress}
      >
        <Text style={styles.btnText}>{props.value}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#002353',
    padding: 8,
    borderRadius: 12,
  },
  btnText: {
    color: "#FFF",
    fontWeight: "400", 
    fontSize: 16,
  },
});