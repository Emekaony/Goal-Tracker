import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  const startAddGoalHandler = () => {
    setModalIsVisible(true);
  };

  const addGoalHandler = (goalText) => {
    // the recommended way of updating state when the new state depends on the old state
    // pass in a function to the setState function
    setCourseGoals((currGoals) => [
      ...currGoals,
      // switched this from key to ID so I can make use of the KeyExtractor function
      { text: goalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  };

  const deleteGoalHandler = (id) => {
    console.log("Item has been deleted!");
    setCourseGoals((currState) => {
      // keep all goals except the one we wan to delete - the one that matches the id
      return currState.filter((goal) => goal.id !== id);
    });
  };

  const endAddGoalHandler = () => {
    setModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add new goal"
          color="#9D6ADF"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          buttonPressHandler={addGoalHandler}
          visible={modalIsVisible}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            // every object in here has a key property, FlatList automatically looks for that and uses that Key
            data={courseGoals}
            renderItem={(itemData) => {
              // console.log(itemData.item.text);
              return (
                <GoalItem
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                  id={itemData.item.id}
                />
              );
            }}
            keyExtractor={(item) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // take up all of the available height
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 8,
    marginTop: 10,
  },
});
