import {
  StyleSheet,
  View,
  FlatList,
  Pressable,
  Button,
  Image,
  Text,
  // flatlist is great for long lists
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function addGoalHandler(enteredGoalText) {
    console.log(enteredGoalText);
    if (!enteredGoalText) {
      return;
    }
    setGoals((currentGoals) => [
      ...currentGoals,
      {
        text: enteredGoalText,
        key: `${enteredGoalText}-${Math.random().toString()}`,
      },
    ]);
  }
  function deleteGoalHandler(deletedKey) {
    console.log("Delete");
    setGoals((currentGoals) =>
      currentGoals.filter((currentGoal) => currentGoal.key !== deletedKey)
    );
  }
  return (
    // views are meant to just hold other components. it's not exactly similar to divs
    <View style={styles.appContainer}>
      {/* outerview determines how much space to take up and then the inner scrollview makes the content scrollable */}
      <Button
        title="Add new goal"
        color="rgb(31, 41, 55)"
        onPress={startAddGoalHandler}
      ></Button>
      <GoalInput
        modalIsVisible={modalIsVisible}
        setModalIsVisible={setModalIsVisible}
        addGoalHandler={addGoalHandler}
      />
      <View style={styles.goalsContainer}>
        {/* flatlist will automatically use key property */}
        {goals.length === 0 && (
          <View>
            <Image
              style={{
                width: 400,
                height: 400,
                marginTop: 20,
                marginBottom: 20,
              }}
              source={require("./assets/undraw_Hiking_re_k0bc.png")}
            />
            <Text style={{ fontSize: 16, alignSelf: "center" }}>
              You're all done 😀
            </Text>
          </View>
        )}
        <FlatList
          data={goals}
          renderItem={({ item }) => (
            <GoalItem item={item} deleteGoalHandler={deleteGoalHandler} />
          )}
          keyExtractor={(item, index) => `${index}-${item.key}`}
        />
        {/* sometimes you need to target different platforms, if the styles
          were on text - we'd get rounded corners in android but not ios so we
          use the more versatile View component then */}
      </View>
    </View>
  );
}
// styles don't cascade (like in css) ie child elements don't inherit parent's styles
const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: "flex-start",
  },
  goalsContainer: {
    flex: 5,
  },
});
