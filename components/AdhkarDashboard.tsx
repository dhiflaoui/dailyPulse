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
  I18nManager,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import { CardProps } from "../types/adhkar";
import { adhkarCards } from "../data/adhkarCards";
// Force RTL layout for Arabic text
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const { width, height } = Dimensions.get("window");
const CARD_MARGIN = 10;

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

type RootStackParamList = {
  AdhkarCounter: {
    title: string;
  };
};

type Props = {};

const AdhkarDashboard: React.FC<Props> = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const renderCard = ({
    title,
    colors,

    isSmall = false,
  }: CardProps): JSX.Element => (
    <TouchableOpacity
      style={[
        styles.cardContainer,
        isSmall ? styles.smallCardContainer : styles.largeCardContainer,
      ]}
      onPress={() => navigation.navigate("AdhkarCounter", { title })}
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        {adhkarCards.slice(0, 2).map((card, index) => (
          <View key={index} style={styles.row}>
            {renderCard(card)}
          </View>
        ))}
        {chunkArray(adhkarCards.slice(2), 2).map((pair, rowIndex) => (
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
    writingDirection: "rtl",
    fontFamily: Platform.select({
      ios: "Al Nile",
      android: "noto-naskh-arabic",
    }),
  },
  largeCardText: {
    fontSize: width * 0.05,
    lineHeight: width * 0.07,
  },
  smallCardText: {
    fontSize: width * 0.04,
    lineHeight: width * 0.06,
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
