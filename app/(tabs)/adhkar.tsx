import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AdhkarDashboard from "../../components/AdhkarDashboard";

export default function AdhkarScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>أذكار</Text>
      <AdhkarDashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 20,
    marginTop: 40,
    marginLeft: "70%",
  },
});
