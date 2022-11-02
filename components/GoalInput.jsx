import { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ buttonPressHandler, visible, onCancel }) => {
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
    <Modal animationType="slide" visible={visible}>
      {/* make sure to use a nested view like you see here when styling modals */}
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal_image.png")}
          style={styles.image}
        />
        <TextInput
          placeholder="your goal..."
          placeholderTextColor={"white"}
          pl
          style={styles.textInput}
          // target action pair. Pass a pointer to the function
          onChangeText={goalInputHandler}
          // this is called two-way binding
          value={goalText}
          maxLength={25}
          autoCorrect="off"
          autoComplete="off"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="white" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    width: "100%",
    padding: 8,
    borderColor: "#C0B9CA",
    backgroundColor: "#C0B9CA",
    color: "#120438",
    borderRadius: 6,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
    backgroundColor: "#5e0acc",
    borderRadius: 5,
  },
});

export default GoalInput;
