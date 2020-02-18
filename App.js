import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([1,2,3]);

  return (
    <View style={styles.container}>
      <TextInput  style={styles.input}/>
      {todos.map((todo,i) => (
        <Text key={i}>{todo}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    backgroundColor: "#f2f1f1",
    width: '80%'
  }
});
