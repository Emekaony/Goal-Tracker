import { useState } from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";

const GoalInput = ({ buttonPressHandler }) => {
  const [goalText, setGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  // using this as an intermediate function so that passing state from one file to another is achieved
  // context & Redux will be studied later which will make app-wide state management much easier
  const addGoalHandler = () => {
    setGoalText("");
    buttonPressHandler(goalText);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="your goal..."
        style={styles.textInput}
        // target action pair. Pass a pointer to the function
        onChangeText={goalInputHandler}
        // this is called two-way binding
        value={goalText}
        maxLength={25}
        autoCorrect="off"
        autoComplete="off"
      />
      {/* buttons do not have a style prop */}
      <Button title="add goal" onPress={addGoalHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    margingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    // take up 80% of the available width
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});

export default GoalInput;
