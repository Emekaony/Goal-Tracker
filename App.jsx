import { useState } from "react";
import { Button, StyleSheet, TextInput, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setGoalText("");

    // the recommended way of updating state when the new state depends on the old state
    // pass in a function to the setState function
    setCourseGoals((currGoals) => [
      ...currGoals,
      { text: goalText, key: Math.random().toString() },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="your goal..."
          style={styles.textInput}
          // target action pair. Pass a pointer to the function
          onChangeText={goalInputHandler}
          value={goalText}
          maxLength={25}
          autoCorrect="off"
          autoComplete="off"
        />
        {/* buttons do not have a style prop */}
        <Button title="add goal" onPress={addGoalHandler} />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList
          // every object in here has a key property, FlatList automatically looks for that and uses that Key
          data={courseGoals}
          renderItem={(itemData) => {
            // console.log(itemData.item.text);
            return <GoalItem text={itemData.item.text} />;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // take up all of the available height
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
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
  goalsContainer: {
    flex: 8,
    marginTop: 10,
  },
});
