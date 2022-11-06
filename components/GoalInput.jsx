import { useState } from "react";
import {
  View,
  Button,
  StyleSheet,
  TextInput,
  Modal,
  Image,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from "react-native";

const GoalInput = ({ buttonPressHandler, visible, onCancel }) => {
  const [goalText, setGoalText] = useState("");
  const [motivation, setMotivation] = useState("");

  const goalInputHandler = (enteredText) => {
    setGoalText(enteredText);
  };

  const motivationHandler = (motivation) => {
    setMotivation(motivation);
  };

  // using this as an intermediate function so that passing state from one file to another is achieved
  // context & Redux will be studied later which will make app-wide state management much easier
  const addGoalHandler = () => {
    setGoalText("");
    setMotivation("");
    buttonPressHandler(goalText);
  };

  return (
    <Modal animationType="slide" visible={visible}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.inputContainer}>
            <Image
              source={require("../assets/images/goal_image.png")}
              style={styles.image}
            />
            <View style={styles.baseTopText}>
              <Text style={{ color: "white" }}>Goal</Text>
            </View>
            <TextInput
              selectionColor={"#1D1818"}
              style={styles.baseTextInput}
              // target action pair. Pass a pointer to the function
              onChangeText={goalInputHandler}
              // this is called two-way binding
              value={goalText}
              multiline={true}
              maxLength={100}
              autoComplete="off"
            />
            <View style={{ ...styles.baseTopText, marginTop: 10 }}>
              <Text style={{ color: "white" }}>Motivation</Text>
            </View>
            <TextInput
              selectionColor={"#1D1818"}
              style={{
                ...styles.baseTextInput,
                height: "auto",
                textAlign: "left",
              }}
              onChangeText={motivationHandler}
              value={motivation}
              autoComplete="off"
              multiline={true}
              numberOfLines={10}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Cancel" onPress={onCancel} color="#f31282" />
              </View>
              <View style={styles.button}>
                <Button
                  title="Add Goal"
                  onPress={addGoalHandler}
                  color="white"
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
  baseTopText: {
    width: "100%",
    height: 20,
    justifyContent: "flex-start",
  },
  baseTextInput: {
    borderWidth: 1,
    width: "100%",
    borderColor: "#C0B9CA",
    backgroundColor: "#C0B9CA",
    color: "#1D1818",
    borderRadius: 6,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
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
