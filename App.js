import React from 'react';
import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/addTodo';



export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Buy a Banana', key: '1' },
    { text: 'Buy a Mango', key: '2' },
    { text: 'Buy a Pumpkin', key: '3' }
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    });
  }

  const submitHandler = (text) => {
    setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    });
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item}
               pressHandler={pressHandler} />
            )}
          />

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: '20px',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
