import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Alert,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Memory {
  id: string;
  text: string;
  date: Date;
}

const Memories: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [memories, setMemories] = useState<Memory[]>([]);

  const handleSave = () => {
    if (currentText.trim().length === 0) {
      Alert.alert("Error", "Please enter some text");
      return;
    }

    const newMemory: Memory = {
      id: Date.now().toString(),
      text: currentText,
      date: new Date(),
    };

    setMemories([newMemory, ...memories]);
    setCurrentText("");
    setIsModalVisible(false);
  };

  const handleDelete = (id: string) => {
    Alert.alert(
      "Delete Memory",
      "Are you sure you want to delete this memory?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            setMemories(memories.filter((memory) => memory.id !== id));
          },
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Add Button Container */}

      <View style={styles.contentContainer}>
        <View style={styles.listContainer}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            {memories.map((memory) => (
              <View key={memory.id} style={styles.memoryCard}>
                <View style={styles.memoryContent}>
                  <Text style={styles.memoryText}>{memory.text}</Text>
                  <Text style={styles.dateText}>
                    {memory.date.toLocaleDateString()}
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDelete(memory.id)}
                >
                  <Ionicons name="trash-outline" size={24} color="#ff3b30" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.addButtonContainer}>
          <TouchableOpacity
            style={[
              styles.addButton,
              { position: "absolute", top: 10, right: 10 },
            ]}
            onPress={() => setIsModalVisible(true)}
          >
            <Ionicons name="add" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Memory</Text>

            <TextInput
              style={styles.textInput}
              multiline
              placeholder="Write your memory here..."
              value={currentText}
              onChangeText={setCurrentText}
              autoFocus
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => {
                  setCurrentText("");
                  setIsModalVisible(false);
                }}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.saveButton]}
                onPress={handleSave}
              >
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  contentContainer: {
    flex: 1,
    position: "relative",
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 100, // Give space for the add button
  },
  addButtonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  memoryCard: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    flexDirection: "row",
    alignItems: "center",
  },
  memoryContent: {
    flex: 1,
  },
  memoryText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 8,
  },
  dateText: {
    fontSize: 12,
    color: "#666",
  },
  deleteButton: {
    padding: 8,
  },
  addButton: {
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
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  textInput: {
    height: 150,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
    textAlignVertical: "top",
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginLeft: 10,
  },
  cancelButton: {
    backgroundColor: "#ff3b30",
  },
  saveButton: {
    backgroundColor: "#007AFF",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  counterText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 10,
  },
  counterButton: {
    backgroundColor: "#542E71",
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default Memories;
