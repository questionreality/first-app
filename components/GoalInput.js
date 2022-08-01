import { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  Button,
  TextInput,
  Keyboard,
  Pressable,
  Text,
} from "react-native";

const GoalInput = ({
  goalInputHandler,
  addGoalHandler,
  modalIsVisible,
  setModalIsVisible,
}) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your goal for today!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          onSubmitEditing={() => {
            addGoalHandler(enteredGoalText);
            setEnteredGoalText("");
            Keyboard.dismiss();
            setModalIsVisible(false);
          }}
        />
        <View style={styles.buttonContainer}>
          <Button
            title="Add your goal"
            color="rgb(31, 41, 55)"
            // color="rgb(234, 88, 12)"
            onPress={() => {
              addGoalHandler(enteredGoalText);
              setEnteredGoalText("");
              Keyboard.dismiss();
              setModalIsVisible(false);
            }}
          />
          <Pressable
            style={{ height: 40, marginLeft: 8, padding: 10 }}
            onPress={() => {
              setModalIsVisible(false);
            }}
          >
            <Text style={{ color: "rgb(31, 41, 55)", fontSize: 15 }}>
              Cancel
            </Text>
            {/* title="Cancel" // color="rgb(239, 68, 68)" /> */}
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 2,
    borderColor: "rgb(253, 186, 116)",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
    width: "80%",
    justifyContent: "space-between",
  },
});

export default GoalInput;
