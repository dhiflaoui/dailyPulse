import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Hadith } from "../../data/hadiths";
import { useHadith } from "../../contexts/HadithContext";

interface HadithCardProps {
  hadith: Hadith;
  onPress: () => void;
}

const HadithCard = ({ hadith, onPress }: HadithCardProps) => {
  const { getRepetitionCount } = useHadith();
  const repetitionCount = getRepetitionCount(hadith.id);
  const isCompleted = repetitionCount >= 100;

  return (
    <TouchableOpacity
      style={[styles.hadithCard, isCompleted && styles.completedCard]}
      onPress={onPress}
    >
      <Text style={styles.title}>{hadith.title}</Text>
      <Text style={styles.arabicTitle}>{hadith.titleArabic}</Text>

      {repetitionCount > 0 && (
        <View
          style={[
            styles.badge,
            isCompleted ? styles.completedBadge : styles.progressBadge,
          ]}
        >
          <Text
            style={[
              styles.badgeText,
              isCompleted
                ? styles.completedBadgeText
                : styles.progressBadgeText,
            ]}
          >
            {repetitionCount}/100
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hadithCard: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: "white",
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    position: "relative",
  },
  completedCard: {
    borderWidth: 2,
    borderColor: "#0D9488", // islamic-green
    backgroundColor: "rgba(245, 245, 220, 0.5)", // islamic-cream with opacity
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
  },
  arabicTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#0D9488", // islamic-green
    textAlign: "right",
    fontFamily: "System", // You may want to use a specific Arabic font here
  },
  badge: {
    position: "absolute",
    top: 8,
    right: 8,
    borderRadius: 20,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  completedBadge: {
    backgroundColor: "#0D9488", // islamic-green
  },
  progressBadge: {
    backgroundColor: "#D4AF37", // islamic-gold
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "500",
  },
  completedBadgeText: {
    color: "white",
  },
  progressBadgeText: {
    color: "black",
  },
});

export default HadithCard;
