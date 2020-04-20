import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from "react-native";

const Todo = () => {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");


  useEffect(() => {
    fetch('http://localhost:5000/todos', {
      headers : {
        'Accept': 'application/json'
    }
  })
    .then(res => res.json())
    .then(todos => setTodos(todos))
  },[''])

  const handleChange = text => {
    setNewTodo(text);
  };

  const handlePress = () => {
    if (newTodo!==''){
      fetch('http://localhost:5000/todos',{
        method: 'POST',
        body: JSON.stringify({
          name: newTodo
        }),
        headers: {
          // 'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(res => res.json())
      .then(todo => {
        setTodos([ todo, ...todos])
        setNewTodo("");
    })
    }
  };

  return (
    <View 
    style={styles.container}
    >  
      <View style={styles.form}>
        <TextInput
          value={newTodo}
          onChangeText={handleChange}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>create</Text>
        </TouchableOpacity>
      </View>
      <View style={ styles.todos }>
        {todos.map((todo, i) => (
          <View style={styles.todo} key={i}>
            {/* <Text  style={styles.todoText} >{todo}</Text> */}
            <Text  style={styles.todoText} >{todo.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 20
  },
  input: {
    backgroundColor: "#f2f1f1",
    width: '70%',
    fontSize: 20,
  },
  form : {
    flexDirection: 'row'
  },
  button : {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    marginLeft: '5%',
    height: 50
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  todos: {
    marginTop: 40
  },
  todo: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    marginBottom: 10
  },
  todoText: {
    fontSize: 20
  }
});

export default Todo;
