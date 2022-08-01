import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = ({ item, deleteGoalHandler, deletedKey }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "rgb(254, 215, 170)" }}
        onPress={deleteGoalHandler.bind(this, item.key)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "rgb(253, 186, 116)",
    color: "rgb(17, 24, 39)",
  },
  pressedItem: {
    opacity: 0.4,
  },
  goalText: {
    padding: 8,
  },
});

export default GoalItem;
