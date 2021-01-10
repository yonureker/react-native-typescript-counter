import { StatusBar } from "expo-status-bar";
import React, { useReducer } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const initialState = { count: 0 };

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function reducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    default:
      throw new Error("error");
  }
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <View style={styles.container}>
      <Text style={styles.countText}>{state.count}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch({ type: "increment", payload: 1 })}
      >
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ ...styles.button, backgroundColor: "lightgreen" }}
        onPress={() => dispatch({ type: "decrement", payload: 1 })}
      >
        <Text>-</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
  countText: {
    fontSize: 60,
  },
});
