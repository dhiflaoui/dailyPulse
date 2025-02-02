import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  TodoList: undefined;
  Reminder: undefined;
};

// Fix: Make navigation optional in case it's used in a non-navigation context
type Props = Partial<NativeStackScreenProps<RootStackParamList>>;

const Home: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonTodo}
        onPress={() => navigation?.navigate("TodoList")} // Fix: Avoid crash if navigation is undefined
      >
        <Text style={styles.buttonText}>Todo List</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation?.navigate("Reminder")} // Fix: Add onPress event for Reminder button
      >
        <Text style={styles.buttonText}>Reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 98,
  },
  button: {
    backgroundColor: "#4CAF50", // Green color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonTodo: {
    backgroundColor: "#3498db", // Blue color
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginVertical: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Home;
