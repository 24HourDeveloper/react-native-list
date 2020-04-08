import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  const people = [
    "Steve Jobs",
    "Bill Gates",
    "Katherine Johnson",
    "Annie Easley",
    "Mark Zuckerberg",
    "Linus Torvalds",
    "Brendan Eich",
    "Elon Musk",
    "Thomas Edison",
  ];
  return (
    <ScrollView style={styles.container}>
      {people.map((person, index) => (
        <Text style={styles.textStyle} key={index}>
          {person}
        </Text>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  textStyle: {
    fontSize: 25,
    paddingVertical: 40,
  },
});
