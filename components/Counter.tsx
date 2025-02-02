import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Alert,
} from "react-native";

const Memories: React.FC = () => {
  const [extraCounter, setExtraCounter] = useState(0);
  const handleCounter = () => {
    const newCount = extraCounter + 1;
    setExtraCounter(newCount);

    if (newCount === 10) {
      Alert.alert(" ✅  Congratulations!", "Done for today", [
        { text: "OK", onPress: () => console.log("Alert closed") },
      ]);
      setExtraCounter(0);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* counter */}
      <View style={styles.contentContainer}>
        <Text style={styles.counterText}>Total Memories: {extraCounter}</Text>
        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            style={[styles.counterButton]}
            onPress={handleCounter}
          >
            <Text style={styles.buttonText}>click</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    position: "relative",
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
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
});
export default Memories;
