import { Task } from '@/app/_layout';
import { colors } from '@/constants/color';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function TaskItem(props: Task){

  const [completed, setCompleted] = useState(props.completed)
    return (
        <View style={style.rowContainer}>
            <Pressable onPress={() => setCompleted(!completed)}>
                <Ionicons name="checkmark-circle" size={32} color={completed ? colors.primary : "gray"} />
            </Pressable>
            <Text>{props.text}</Text>
        </View>

    )
}

const style = StyleSheet.create({
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 10
  }
})