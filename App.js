import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const people = [
    "Steve Jobs",
    "Bill Gates",
    "Katherine Johnson",
    "Annie Easley",
    "Mark Zuckerberg",
    "Linus Torvalds",
    "Brendan Eich",
  ];
  return (
    <View style={{ marginTop: 30 }}>
      {people.map((person, index) => (
        <Text style={{ fontSize: 25, paddingVertical: 40 }} key={index}>
          {person}
        </Text>
      ))}
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
});
