import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goalText, setGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const addGoalHandler = () => {
    console.log(goalText);
    setGoalText("");

    // the recommended way of updating state when the new state depends on the old state
    // pass in a function to the setState function
    setCourseGoals((currGoals) => [...currGoals, goalText]);
  };

  const getCurrentTime = () => {
    let currentDate = new Date().toJSON().slice(0, 10);
    return currentDate;
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
        {/* TODO: Add a time-stamp to the right of the text container that displays the time the goal was added */}
        {courseGoals.map((goal) => (
          <View style={styles.goalContainer}>
            <Text key={goal} style={styles.goalText}>
              {goal}
            </Text>
            <Text style={styles.goalText}>{getCurrentTime()}</Text>
          </View>
        ))}
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
