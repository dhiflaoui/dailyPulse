import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Book, ArrowLeft } from "lucide-react-native";
import { useHadith } from "../../contexts/HadithContext";
import HadithCard from "../cutsomMemo/HadithCard";
import { Hadith } from "../../data/hadiths";

// Define the navigation param list type
type RootStackParamList = {
  Home: undefined;
  HadithDetail: { hadithId: number };
  Memories: undefined;
};

// Define the navigation prop type for this screen
type MemoriesScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Memories"
>;

const ListMemo = () => {
  const { hadiths, selectHadith } = useHadith();
  const navigation = useNavigation<MemoriesScreenNavigationProp>();

  const handleHadithSelect = (hadith: Hadith) => {
    selectHadith(hadith);
    navigation.navigate("HadithDetail", { hadithId: hadith.id });
  };

  const renderHadithItem = ({ item }: { item: Hadith }) => (
    <HadithCard hadith={item} onPress={() => handleHadithSelect(item)} />
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <ArrowLeft color="#0D9488" size={24} />
        <Text style={styles.backButtonText}>Return</Text>
      </TouchableOpacity>
      <View style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <Book color="#0D9488" size={32} />
          <Text style={styles.title}>Forty Nawawi Hadith</Text>
        </View>
        <Text style={styles.description}>
          Memorize the collection of forty hadith compiled by Imam Nawawi.
          Select a hadith to view and begin your memorization journey.
        </Text>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList
          data={hadiths}
          renderItem={renderHadithItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.gridContainer}
          showsVerticalScrollIndicator={true}
          numColumns={1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    marginTop: 8,
  },
  backButtonText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#0D9488",
  },
  headerContainer: {
    alignItems: "center",
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D9488", // islamic-green
    marginLeft: 12,
  },
  description: {
    textAlign: "center",
    color: "#4B5563", // gray-600
    maxWidth: "100%",
  },
  scrollContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#F5F5DC", // islamic-cream
    borderRadius: 8,
    margin: 16,
  },
  gridContainer: {
    padding: 16,
    paddingBottom: 16,
  },
});

export default ListMemo;
