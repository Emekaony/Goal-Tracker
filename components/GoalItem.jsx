import { View, StyleSheet, Text, Pressable } from "react-native";

import { getCurrentTime } from "../utils/timeUtils";

// forgot that props show up as the first argument;
const GoalItem = (props) => {
  return (
    // look into the bind and how it solved the problem of passing ID thorugh props
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalContainer}>
        <Text style={styles.goalText}>{props.text}</Text>
        <Text style={styles.goalText}>{getCurrentTime()}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    width: "100%",
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: "#9C1E98",
    borderColor: "#9C1E98",
    marginBottom: 6,
    height: 40,
  },
  goalText: {
    color: "#ffffff",
  },
});

export default GoalItem;
