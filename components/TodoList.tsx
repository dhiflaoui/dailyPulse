import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const ToDoList = () => {
  const [tasks, setTasks] = useState([
    { id: "1", title: "أذكار  الصباح", duration: "15 min", completed: false },
    { id: "2", title: "صلاة  الضحى", duration: "15 min", completed: false },
    { id: "3", title: "ورد القرأن", duration: "30 min", completed: false },
    { id: "4", title: "صلاة السنن", duration: "20 min", completed: false },
    { id: "5", title: "أذكار المساء", duration: "15 min", completed: false },
    {
      id: "6",
      title: " ركعتين قيام الليل ",
      duration: "15 min",
      completed: false,
    },
    { id: "7", title: "سورة الملك", duration: "15 min", completed: false },
    { id: "8", title: "أذكار النوم", duration: "15 min", completed: false },
  ]);

  // Toggle task completion
  const toggleTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Render each task
  const renderTask = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.task} onPress={() => toggleTask(item.id)}>
      <View style={styles.taskTextContainer}>
        <Text style={[styles.taskTitle, item.completed && styles.completed]}>
          {item.title}
        </Text>
        <Text style={styles.taskDuration}>{item.duration}</Text>
      </View>
      <Ionicons
        name={item.completed ? "checkmark-circle" : "ellipse-outline"}
        size={24}
        color={item.completed ? "#4CAF50" : "#C4C4C4"}
      />
      {/* <Ionicons name="chevron-forward" size={20} color="#C4C4C4" /> */}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header Section */}

      <Text style={styles.dateText}>
        {new Date().toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </Text>

      {/* Task List */}
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
      />

      {/* Floating Add Button */}
      {/* <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity> */}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#F8F9FA",
  },
  dateText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  taskCount: {
    fontSize: 16,
    color: "#888",
    marginBottom: 20,
  },
  task: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  taskTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  taskDuration: {
    fontSize: 14,
    color: "#888",
  },
  completed: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007AFF",
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default ToDoList;
