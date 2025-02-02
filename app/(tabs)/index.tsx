import {
  Image,
  StyleSheet,
  Platform,
  Button,
  TouchableOpacity,
} from "react-native";
import { HelloWave } from "@/components/HelloWave";
import Home from "@/components/Home";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import TodoList from "@/components/TodoList";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ffff", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/background.jpg")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView
        style={[
          styles.titleContainer,
          { marginLeft: "40%", marginRight: "10%" },
        ]}
      >
        <HelloWave />
        <ThemedText type="title" style={[styles.welcomeText]}>
          زاد يومك
        </ThemedText>
      </ThemedView>

      <TodoList />
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2c3e50",
  },
  contentContainer: {
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  subtitleText: {
    fontSize: 24,
    fontWeight: "600",
    color: "#34495e",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#3498db",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  reactLogo: {
    height: 200,
    width: "100%",
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
