import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  Dimensions,
  ScrollView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const { width, height } = Dimensions.get("window");
const CARD_MARGIN = 10;

interface CardProps {
  title: string;
  colors: readonly [string, string];
  name: string;
  onPress?: () => void;
  isSmall?: boolean;
}

interface Styles {
  container: ViewStyle;
  row: ViewStyle;
  rowMultiple: ViewStyle;
  column: ViewStyle;
  cardContainer: ViewStyle;
  largeCardContainer: ViewStyle;
  smallCardContainer: ViewStyle;
  card: ViewStyle;
  largeCard: ViewStyle;
  smallCard: ViewStyle;
  cardText: TextStyle;
  largeCardText: TextStyle;
  smallCardText: TextStyle;
  icon: ViewStyle;
  largeIcon: ViewStyle;
  smallIcon: ViewStyle;
  contentContainer: ViewStyle;
}

// Define the navigation param list type
type RootStackParamList = {
  AdhkarCount: {
    title: string;
    colors: readonly [string, string];
    name: string;
  };
  // ... other screens
};

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "AdhkarCount">;
};

const AdhkarDashboard: React.FC<Props> = ({ navigation }) => {
  const renderCard = ({
    title,
    colors,
    name,
    onPress,
    isSmall = false,
  }: CardProps): JSX.Element => (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        isSmall ? styles.smallCardContainer : styles.largeCardContainer,
      ]}
      onPress={() =>
        navigation.navigate("AdhkarCount", { title, colors, name })
      }
      activeOpacity={0.9}
    >
      <LinearGradient
        colors={colors}
        style={[styles.card, isSmall ? styles.smallCard : styles.largeCard]}
      >
        <Text
          style={[
            styles.cardText,
            isSmall ? styles.smallCardText : styles.largeCardText,
          ]}
        >
          {title}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
  const chunkArray = (arr: CardProps[], size: number) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
      arr.slice(index * size, index * size + size)
    );
  };

  const cards: CardProps[] = [
    {
      title: " ‫ﺳﺒﺤﺎن‬‫ اﻟﻠّﻪ‬ ‫وﺑﺤﻤﺪه‬ ‫ﺳﺒﺤﺎن‬ ‫اﻟﻠّﻪ‬ ‫اﻟﻌﻈﻴﻢ‬",
      colors: ["#4CAF50", "#81C784"], // Green
      name: "Subhan Allah Wabihamdihi Subhan Allah Alazim",
      isSmall: true,
    },
    {
      title: "‫اﻟﻠﻬﻢ ‬‫ﺻﻞ‬ ‫وﺳﻠﻢ‬ ‫ﻋﲆ‬ ‫ﻧﺒﻴﻨﺎ‬ ‫ﻣﺤﻤﺪ‬‬",
      colors: ["#2196F3", "#64B5F6"], // Blue
      name: "Allahumma Salli Ala Nabiyyina Muhammad",
      isSmall: true,
    },
    {
      title: "‫ﻻﺣﻮل‬‫ وﻻ‬ ‫ﻗﻮة‬ ‫اﻻ‬ ‫ﺑﺎﻟﻠﻪ‬ ",
      colors: ["#9C27B0", "#BA68C8"], // Purple
      name: "La Hawla Wala Quwwata Illa Billah",
      isSmall: true,
    },
    {
      title:
        "‫اﺳﺘﻐﻔﺮ ‬‫اﻟﻠﻪ‬ ‫اﻟﻌﻈﻴﻢ‬ ‫اﻟﺬي‬ ‫ﻻاﻟﻪ‬ ‫اﻻ‬ ‫ﻫﻮ‬ ‫اﻟﺤﻲ‬ ‫اﻟﻘﻴﻮم‬ ‫وأﺗﻮب‬ ‫إﻟﻴﻪ‬ ",
      colors: ["#E91E63", "#F06292"], // Pink
      name: "Astaghfirullah Al-Azim",
      isSmall: true,
    },
    {
      title: "‫ﺳﺒﺤﺎن‬‫ اﻟﻠﻪ‬ ",
      colors: ["#FF9800", "#FFB74D"], // Orange
      name: "Subhan Allah",
      isSmall: true,
    },
    {
      title: "‫ﻻ‬‫ اﻟﻪ‬ ‫اﻻ‬ ‫اﻟﻠﻪ‬",
      colors: ["#009688", "#4DB6AC"], // Teal
      name: "Allahumma Salli Ala Nabiyyina Muhammad",
      isSmall: true,
    },
    {
      title: "‫اﻟﻠﻪ‬‫ اﻛﱪ‬ ",
      colors: ["#F44336", "#EF5350"], // Red
      name: "La Hawla Wala Quwwata Illa Billah",
      isSmall: true,
    },
    {
      title: "‫اﻟﺤﻤﺪ‬‫ ﻟﻠﻪ‬ ",
      colors: ["#673AB7", "#9575CD"], // Deep Purple
      name: "Allahumma Salli Ala Nabiyyina Muhammad",
      isSmall: true,
    },
    {
      title: "‫ﻻ‬‫اﻟﻪ‬ ‫اﻻ‬ ‫اﻟﻠﻪ‬ ‫وﺣﺪه‬ ‫ﻻﴍﻳﻚ‬ ‫ﻟﻪ‬ ",
      colors: ["#3F51B5", "#7986CB"], // Indigo
      name: "La Hawla Wala Quwwata Illa Billah",
      isSmall: true,
    },
    {
      title: "‫اﻟﻠﻬﻢ ‬‫اﻧ‬ﻲ ‫اﺳﺘﻐﻔﺮك‬ ‫واﺗﻮب‬ ‫اﻟﻴﻚ‬",
      colors: ["#00BCD4", "#4DD0E1"], // Cyan
      name: "Allahumma Salli Ala Nabiyyina Muhammad",
      isSmall: true,
    },
    {
      title: "‫اﻟﻠﻬﻢ‬‫ اﻧﻚ‬ ‫ﻋﻔﻮ‬ ‫ﺗﺤﺐ‬ ‫اﻟﻌﻔﻮ‬ ‫ﻓﺎﻋﻒ‬ ‫ﻋﻨﻲ‬ ",
      colors: ["#795548", "#A1887F"], // Brown
      name: "Allahumma Salli Ala Nabiyyina Muhammad",
      isSmall: true,
    },
    {
      title: "‫اﻟﻠﻬﻢ‬‫اﻲﻧ‬ ‫ﻇﻠﻤﺖ‬ ‫ﻧﻔﴘ‬ ",
      colors: ["#607D8B", "#90A4AE"], // Blue Grey
      name: "Allahumma Salli Ala Nabiyyina Muhammad",
      isSmall: true,
    },
    {
      title: "‫ﺣﺴﺒﻲ‬‫اﻟﻠﻪ‬ ‫وﻧﻌﻢ‬ ‫اﻟﻮﻛﻴﻞ‬ ",
      colors: ["#8BC34A", "#AED581"], // Light Green
      name: "Allahumma Salli Ala Nabiyyina Muhammad",
      isSmall: true,
    },
    {
      title: "‫ﻻ‬‫اﻟﻪ‬ ‫اﻻ‬ ‫اﻧﺖ‬ ‫ﺳﺒﺤﺎﻧﻚ‬ ",
      colors: ["#FFC107", "#FFD54F"], // Amber
      name: "Allahumma Salli Ala Nabiyyina Muhammad",
      isSmall: true,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {cards.slice(0, 2).map((card, index) => (
          <View key={index} style={styles.row}>
            {renderCard(card)}
          </View>
        ))}
        {chunkArray(cards.slice(2), 2).map((pair, rowIndex) => (
          <View key={rowIndex} style={styles.rowMultiple}>
            {pair.map((card, index) => (
              <View key={`${rowIndex}-${index}`} style={styles.column}>
                {renderCard(card)}
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  row: {
    width: "100%",
    marginBottom: CARD_MARGIN,
  },
  rowMultiple: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  column: {
    flex: 1,
    marginHorizontal: CARD_MARGIN / 2,
  },
  cardContainer: {
    borderRadius: 16,
    overflow: "hidden",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  largeCardContainer: {
    height: height * 0.15,
    marginVertical: CARD_MARGIN / 2,
  },
  smallCardContainer: {
    height: height * 0.12,
    marginVertical: CARD_MARGIN / 2,
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  largeCard: {
    paddingVertical: 25,
  },
  smallCard: {
    paddingVertical: 15,
  },
  cardText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
  largeCardText: {
    fontSize: width * 0.05,
  },
  smallCardText: {
    fontSize: width * 0.04,
  },
  icon: {
    marginBottom: 8,
  },
  largeIcon: {
    marginBottom: 12,
  },
  smallIcon: {
    marginBottom: 6,
  },
});

export default AdhkarDashboard;
