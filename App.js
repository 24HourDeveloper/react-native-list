import React from "react";
import { StyleSheet, Text, View, ScrollView, FlatList } from "react-native";

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
    <View style={styles.container}>
      <FlatList
        data={people}
        renderItem={({ item }) => <Text style={styles.textStyle}>{item}</Text>}
        keyExtractor={(item) => item.toString()}
      />
    </View>
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
