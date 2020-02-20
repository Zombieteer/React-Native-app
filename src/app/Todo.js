import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";

const Todo=()=> {

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')

  const handleChange = (text)=> {
    setNewTodo(text)
  }

  const handlePress = () => {
    setTodos([...todos, newTodo])
    setNewTodo('')
  }

  return (
    <View style={styles.container}>
      <TextInput value={newTodo} onChangeText={handleChange} style={styles.input}/>
      <TouchableOpacity onPress={handlePress}>
        <Text>create</Text>
      </TouchableOpacity>
      <View style={{marginTop: '3%'}}>
        {todos.map((todo, i) => <Text key={i}>{todo}</Text>)} 
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center"
  },
  input: {
    backgroundColor: "#f2f1f1",
    width: '80%',
    marginTop: '10%'
  }
});

export default Todo