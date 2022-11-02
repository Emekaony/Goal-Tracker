import { View, StyleSheet, Text, Pressable } from "react-native";

import { getCurrentTime } from "../utils/timeUtils";

// forgot that props show up as the first argument;
const GoalItem = (props) => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => {
          return pressed
            ? { ...styles.goalContainer, ...styles.pressedItem }
            : { ...styles.goalContainer };
        }}
        // look into the bind and how it solved the problem of passing ID thorugh props
        onPress={props.onDeleteItem.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
        <Text style={styles.goalText}>{getCurrentTime()}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: "#5e0acc",
    borderColor: "#5e0acc",
    height: 40,
    marginBottom: 8,
  },
  pressedItem: {
    opacity: 0.8,
  },
  goalText: {
    color: "#ffffff",
    padding: 8,
  },
});

export default GoalItem;
