import React from "react";
import Todo from "./src/app/Todo";
import Reddit from "./src/app/Reddit";
import { ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView>
      {/* <Todo /> */}
      <Reddit />
    </ScrollView>
  );
}
