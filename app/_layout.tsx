
import TaskItem from "@/components/task";
import { colors } from "@/constants/color";
import { useState } from "react";
import { FlatList, Image, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import logo from "../assets/images/icon.png";

export type Task = {
  id: number;
  completed: boolean;
  text: string;
};

  const InitialTasks: Task[] = [
    { id: 1, completed: false, text: "Estudar JavaScript" },
    { id: 2, completed: true, text: "Iniciar projeto com Expo" },
    { id: 3, completed: false, text: "Criar tela de login" }
  ];

export default function RootLayout() {
  const [tasks, setTasks] = useState<Task[]>(InitialTasks)
  const [text, setText] = useState<string>("")

  const addTask = () => {
    const newTask = {id: tasks.length + 1 , completed: false , text}
    setTasks([...tasks, newTask])
    setText("")
  }
  
  return (
    <View style={style.mainContainer}>
      <View style={style.rowContainer}>
        <Image source={logo} style={style.image} />
        <Text style={style.title}>Minhas Tarefas</Text>
      </View>

      <View style={style.rowContainer}>
        <TextInput style={style.input} value={text} onChangeText={setText} onSubmitEditing={addTask} />
        <Pressable
          onPress={addTask}
          style={({ pressed }) => [
            style.button,
            { backgroundColor: pressed ? "blue" : colors.primary }
          ]}
        >
          <Text style={style.buttonText}>+</Text>
        </Pressable>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
           <TaskItem id={item.id} text={item.text} completed={item.completed} key={item.id}   />
        )}
      />
    </View>
  );
}

const style = StyleSheet.create({
  image: {
    width: 55,
    height: 50
  },
  title: {
    fontSize: 30,
    fontFamily: "Calibri",
    fontWeight: "600",
    color: colors.primary
  },
  input: {
    height: 40,
    paddingHorizontal: 16,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 20,
    flexGrow: 1
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontSize: 20
  },
  mainContainer: {
    margin: 20
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20
  }
});
