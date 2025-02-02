import { StyleSheet, Image } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import Memories from "@/components/Memories";
import Counter from "@/components/Counter";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#ffff", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/cover.png")}
          style={styles.background}
        />
      }
    >
      <Memories />
      <Counter />
    </ParallaxScrollView>
  );
}
//
const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  background: {
    width: "100%",
    height: 200,
    bottom: 0,
    left: 0,
    right: 0,
    position: "absolute",
  },
});
