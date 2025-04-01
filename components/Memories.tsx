import { List } from "lucide-react-native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import ListMemo from "./cutsomMemo/listMemo";

const Memories: React.FC = () => {
  const [showList, setShowList] = useState(false);

  if (showList) {
    return <ListMemo />;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.button, styles.inactiveButton]}>
        <Text style={styles.buttonText}>Default Memoisation</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => setShowList(true)}>
        <Text style={styles.buttonText}>Forty Nawawi Hadith</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 20,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  inactiveButton: {
    backgroundColor: "#CCCCCC",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Memories;
