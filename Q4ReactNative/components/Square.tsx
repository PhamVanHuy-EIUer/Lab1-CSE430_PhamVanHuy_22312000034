import { Alert, Button, StyleSheet, Text, View } from "react-native";

function ClickOnTheSquare(value: any) {
  Alert.alert(value);
}

export const Square = ({ text }: any) => {
  return (
    <View style={[styles.box, { backgroundColor: "#7ce0f9" }]}>
      <Text>{text}</Text>
      <Button title="Click" onPress={() => ClickOnTheSquare(text)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    margin: 20,
  },
});