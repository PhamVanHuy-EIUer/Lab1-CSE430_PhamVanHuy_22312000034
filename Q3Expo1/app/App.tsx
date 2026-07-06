import { ScrollView, StyleSheet } from "react-native";

import { Square } from "@/components/Square";
import { data } from "@/constants/Data";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});
